import Editor from "../components/Editor";
import { connect } from "react-redux";
import { changeText } from "../actions";

const mapStateToProps = state => ({
  defaultText: state.defaultText
});

const mapDispatchToProps = {
  changeText
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
