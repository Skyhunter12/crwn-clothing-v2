import {
  CATEGORY_ACTION_TYPES,
  CATEGORY_INITIAL_STATE,
} from "./category.types";

export const categoryReducer = (
  state = CATEGORY_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, isLoading: false };
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES_FAILURE:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
