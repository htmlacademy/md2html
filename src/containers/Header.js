import { changeTab, toggleShowSettings } from "../actions";
import Header from "../components/Header";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  currentTab: state.currentTab
});

const mapDispatchToProps = {
  changeTab,
  toggleShowSettings
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
