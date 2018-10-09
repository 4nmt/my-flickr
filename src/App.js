import React from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Topbar from "./components/Topbar";
import Explore from "./components/Explore";
import Photo from "./components/Photo";
import Tag from "./components/Tag";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Container>
            <Topbar />
            <Route exact path="/" component={Explore} />
            <Route path="/tags/:tag" component={Tag} />
            <Route path="/photos/:photo_id" component={Photo} />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
