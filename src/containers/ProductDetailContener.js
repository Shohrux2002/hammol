import { connect } from "react-redux";
import ProductDetail from "../components/ProductDetail";

const getMyState = (state) => {
  return state;
};

const ProductDetailContainer = connect(getMyState, {})(ProductDetail);
export default ProductDetailContainer;
