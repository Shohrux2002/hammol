import { connect } from "react-redux";
import Header from "../components/Header";
import {
  categoryAction,
  productAction,
  selectAction,
} from "../redux/actions/actions";

const getMyState = (state) => {
  return state;
};
const HeaderContainer = connect(getMyState, {
  categoryAction,
  selectAction,
  productAction,
})(Header);
export default HeaderContainer;
