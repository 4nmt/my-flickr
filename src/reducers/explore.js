import { SHOW_EXPLORE } from "../actions";

const explore = (
  state = {
    photoList: [],
    currentPage: 1
  },
  action
) => {
  switch (action.type) {
    case SHOW_EXPLORE:
      return {
        ...state,
        photoList: [...state.photoList, ...action.data],
        currentPage: action.page
      };
    default:
      return state;
  }
};

export default explore;
