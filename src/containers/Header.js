import { changeTab } from "../actions";
import Header from "../components/Header";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  currentTab: state.currentTab
});

const mapDispatchToProps = {
  changeTab
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
