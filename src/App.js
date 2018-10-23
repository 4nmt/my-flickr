import React from "react";
import { Container } from "reactstrap";
import { Router, Route } from "react-router-dom";

import "./App.css";
import Topbar from "./components/Topbar";
import WrapExplore from "./containers/WrapExplore";
import history from "./components/browserHistory";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import WrapTags from "./containers/WrapTags";
import WrapPhoto from "./containers/WrapPhoto";

const App = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Container>
        <Topbar />
        <Route exact path="/my-flickr/" component={WrapExplore} />
        <Route path="/my-flickr/tags/:tag" component={WrapTags} />
        <Route path="/my-flickr/photos/:photo_id" component={WrapPhoto} />
      </Container>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default App;
