import { connect } from "react-redux/es/exports";
import ProcoductList from "../components/ProcoductList";

import { productAction } from "../redux/actions/actions";

const getMyState = (state) => {
  return state;
};

const ProductListContainer = connect(getMyState, { productAction })(
  ProcoductList
);
export default ProductListContainer;
