import { SEARCH_TAGS, SHOW_TAGS } from "../actions";

const initState = {
  photoList: [],
  currentPage: 1
};

const tags = (state = initState, action) => {
  switch (action.type) {
    case SHOW_TAGS:
      return {
        ...state,
        photoList: [...state.photoList, ...action.data],
        currentPage: action.page
      };
    case SEARCH_TAGS:
      return { ...initState };
    default:
      return state;
  }
};

export default tags;
