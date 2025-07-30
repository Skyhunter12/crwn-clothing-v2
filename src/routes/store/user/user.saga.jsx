import { takeLatest, all, call, put } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
  createAuthUserWithEmailAndPassword,
  signOutUser,
} from "../../../utils/firebase/firebaseauth";
import {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
  signOutFailure,
} from "./user.action";

export function* signInWithPassword({ payload: { email, password } }) {
  try {
    let { user } = yield call(signInAuthWithEmailAndPassword, email, password);
    console.log("user", user);

    if (!user) {
      return;
    }
    yield call(getUserSnapshotFromUserAuth, user);
    yield put(signInSuccess({ id: user.uid, ...user }));
    // Simulate a successful sign-in
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* getUserSnapshotFromUserAuth(user, otherDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      user,
      otherDetails
    );
    if (!userSnapshot) {
      return;
    }
    console.log("User snapshot:", userSnapshot);

    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getUserSnapshotFromUserAuth, user);
    yield put(signInSuccess({ id: user.uid, ...user }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* signUpWithEmail({
  payload: { email, password, displayName },
}) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    if (!user) {
      return;
    }
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}
export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  try {
    yield call(getUserSnapshotFromUserAuth, user, additionalDetails);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}
export function* isAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser());
    if (!userAuth) {
      return;
    }
    yield call(getUserSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onSignInWithGoogleStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGNIN_START, signInWithGoogle);
}

export function* onSignInWithEmailStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGNIN_START, signInWithPassword);
}
export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isAuthenticated);
}
export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGNUP_START, signUpWithEmail);
}
export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGNUP_SUCCESS, signInAfterSignUp);
}
export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGNOUT_START, signOut);
}
export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onSignInWithGoogleStart),
    call(onSignInWithEmailStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
