import { connect } from "react-redux";
import { toggleShowSettings } from "../actions";
import Settings from "../components/Settings";

const mapStateToProps = state => ({
  show: state.showSettings
});
const mapDispatchToProps = {
  toggleShowSettings
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
