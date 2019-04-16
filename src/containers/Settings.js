import { connect } from "react-redux";
import { toggleShowSettings, changeSettings } from "../actions";
import Settings from "../components/Settings";

const mapStateToProps = state => ({
  show: state.showSettings,
  settings: state.settings
});
const mapDispatchToProps = {
  toggleShowSettings,
  changeSettings
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
