import { combineReducers } from "redux";

import explore from "./explore";
import photo from "./photo";
import tags from "./tags";

const rootReducer = combineReducers({
  explore,
  tags,
  photo
});

export default rootReducer;
