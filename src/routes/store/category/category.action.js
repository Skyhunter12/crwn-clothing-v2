import { CATEGORY_ACTION_TYPES } from "./category.types";
import { createAction } from "../../../utils/reducer/reducer.utils";

export const setCategoriesStart = () =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES_START);
export const setCategoriesFailure = (error) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES_FAILURE, error);
export const setCategoriesSuccess = (categories) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES_SUCCESS, categories);
