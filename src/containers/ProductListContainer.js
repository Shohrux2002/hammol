import { connect } from "react-redux/es/exports";
import ProcoductList from "../components/ProcoductList";

import {
  detailAction,
  pageAction,
  productAction,
} from "../redux/actions/actions";

const getMyState = (state) => {
  return state;
};
const ProductListContainer = connect(getMyState, {
  productAction,
  pageAction,
  detailAction,
})(ProcoductList);
export default ProductListContainer;
