import { connect } from "react-redux";
import { toggleShowSettings, changeSettings } from "../actions";
import Settings from "../components/Settings";

const mapStateToProps = state => ({
  show: state.showSettings,
  convertHljs: state.convertHljs
});
const mapDispatchToProps = {
  toggleShowSettings,
  changeSettings
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
