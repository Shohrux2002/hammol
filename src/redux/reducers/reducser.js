import { combineReducers } from "redux";
import { CATEGORY, DETAIL, GET_DATA, PAGE, SELECT } from "../actions/actions";

export const initialState = {};
const productReducer = (state = initialState, action) => {
  if (action.type === GET_DATA) {
    return {
      products: action.payload,
    };
  }
  return state;
};

const categoryReducer = (state = initialState, action) => {
  if (action.type === CATEGORY) {
    return {
      category: action.payload,
    };
  }
  return state;
};

const selectReducer = (state = initialState, action) => {
  if (action.type === SELECT) {
    return {
      categoryName: action.payload,
    };
  }
  return state;
};
const pageReducer = (state = initialState, action) => {
  if (action.type === PAGE) {
    return {
      page: action.payload,
    };
  }
  return state;
};
const datailReducer = (state = initialState, action) => {
  if (action.type === DETAIL) {
    return {
      product: action.payload,
    };
  }
  return state;
};

const allReducers = combineReducers({
  productReducer,
  categoryReducer,
  selectReducer,
  pageReducer,
  datailReducer,
});
export default allReducers;
