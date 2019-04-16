import { connect } from "react-redux";
import { toggleShowSettings, toggleHljsSettings } from "../actions";
import Settings from "../components/Settings";

const mapStateToProps = state => ({
  show: state.showSettings,
  convertHljs: state.convertHljs
});
const mapDispatchToProps = {
  toggleShowSettings,
  toggleHljsSettings
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
