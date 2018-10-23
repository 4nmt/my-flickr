import { SHOW_PHOTO_DETAILS } from "../actions";

const photo = (state = {}, action) => {
  switch (action.type) {
    case SHOW_PHOTO_DETAILS:
      return { ...action.data };
    default:
      return state;
  }
};

export default photo;
