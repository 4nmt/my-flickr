import { connect } from "react-redux";
import { fetchTags } from "../actions";
import Tag from "../components/Tag";

const mapStateToProps = state => {
  return {
    photoList: state.tags.photoList,
    currentPage: state.tags.currentPage
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTags: (page, tagName) => dispatch(fetchTags(page, tagName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tag);
