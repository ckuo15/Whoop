import * as CategoryAPIUtil from "../util/categories_api_util";

export const FETCH_BY_CATEGORY = 'FETCH_BY_CATEGORY'

const receiveByCategories = businesses => ({
  type: FETCH_BY_CATEGORY,
  businesses
});

export const fetchByCategory = categoryId => dispatch => (
  CategoryAPIUtil.fetchByCategory(categoryId).then(businesses => (
    dispatch(receiveByCategories(businesses))
  ))
);