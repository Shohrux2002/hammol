import getDate from "../API";
export const GET_DATA = "get/data";
export const SELECT = "select";
export const CATEGORY = "category";
export const PAGE = "page";
export const DETAIL = "details";
export const productAction = () => async (dispatch, getState) => {
  let url;
  if (
    !getState().selectReducer.categoryName.search &&
    getState().selectReducer.categoryName.select === "all"
  ) {
    console.log("aaaaaaaaa");
    url = "product?";
  } else if (
    getState().selectReducer.categoryName.search &&
    getState().selectReducer.categoryName.select === "all"
  ) {
    url = `product?name=${getState().selectReducer.categoryName.search}`;
  } else if (!getState().selectReducer.categoryName.search) {
    url = `product?category=${getState().selectReducer.categoryName.select}`;
  } else {
    url = `product?name=${
      getState().selectReducer.categoryName.search
    }&category=${getState().selectReducer.categoryName.select}`;
  }

  const data = await getDate(
    url + `&limit=3&offset=${getState().pageReducer.page}`
  );

  console.log(data);
  dispatch({ type: GET_DATA, payload: data });
};
export const pageAction =
  (page = 1) =>
  (dispatch) => {
    dispatch({
      type: PAGE,
      payload: page,
    });
  };
export const selectAction = (select, search) => {
  return {
    type: SELECT,
    payload: {
      search: search,
      select: select,
    },
  };
};
export const detailAction = (id) => async (dispatch) => {
  const data = await getDate(`product/${id}`);
  dispatch({
    type: DETAIL,
    payload: data,
  });
};
export const categoryAction = () => async (dispatch, getState) => {
  const data = await getDate("category");
  console.log(data);
  dispatch({
    type: CATEGORY,
    payload: data,
  });
};
