import explore from "../src/reducers/explore";
import { assert } from "chai";

describe("init explore", () => {
  const initState = {
    photoList: [],
    currentPage: 1
  };
  it("should return the initial state", () => {
    assert.equal(explore(undefined, {}), [initState]);
  });
});
