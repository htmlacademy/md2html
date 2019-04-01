import ResultWrap from "../components/ResultWrap";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  text: state.text,
  currentTab: state.currentTab
});

export default connect(mapStateToProps)(ResultWrap);
