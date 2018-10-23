import { SEARCH_TAGS, SHOW_TAGS } from "../actions";

const initState = {
  photoList: [],
  currentPage: 1,
  currentTag: ""
};

const tags = (state = initState, action) => {
  switch (action.type) {
    case SHOW_TAGS:
      return {
        ...state,
        photoList: [...state.photoList, ...action.data],
        currentPage: action.page,
        currentTag: action.tag
      };
    case SEARCH_TAGS:
      return {
        photoList: [...action.data],
        currentPage: 1,
        currentTag: action.tag
      };
    default:
      return state;
  }
};

export default tags;
