import { connect } from "react-redux";
import { fetchExplore, fetchPhoto } from "../actions";
import Explore from "../components/Explore";

const mapStateToProps = state => {
  return {
    photoList: state.explore.photoList,
    currentPage: state.explore.currentPage
  };
};

const mapDispatchToProps = dispatch => ({
  fetchExplore: page => dispatch(fetchExplore(page)),
  fetchPhoto: id => dispatch(fetchPhoto(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore);
