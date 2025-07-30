import { getcatalogAndDocuments } from "../../../utils/firebase/firebaseauth";
import { CATEGORY_ACTION_TYPES } from "./category.types";
import { call, put, takeLatest, all } from "redux-saga/effects";

import { setCategoriesSuccess, setCategoriesFailure } from "./category.action";

export function* fetchCategoriesSaga() {
  try {
    const categoriesArray = yield call(getcatalogAndDocuments, "products");
    yield put(setCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(setCategoriesFailure(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORY_ACTION_TYPES.SET_CATEGORIES_START,
    fetchCategoriesSaga
  );
}

export function* categorySaga() {
  yield all([call(onFetchCategories)]);
}
