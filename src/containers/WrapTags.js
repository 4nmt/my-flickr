import { connect } from "react-redux";
import { fetchTagsIfNeeded, resetTags } from "../actions";
import Tag from "../components/Tag";

const mapStateToProps = (state, ownProps) => {
  return {
    photoList: state.tags.photoList,
    currentPage: state.tags.currentPage,
    currentTag: state.tags.currentTag
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTags: (page, tagName) => dispatch(fetchTagsIfNeeded(page, tagName)),
  resetTags: tagName => dispatch(resetTags(tagName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tag);
