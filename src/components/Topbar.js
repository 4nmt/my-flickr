import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  InputGroup,
  InputGroupAddon,
  Input,
  Button
} from "reactstrap";

import { withRouter } from "react-router-dom";

class Topbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      text: ""
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">
            <img
              src="https://cdn2.techadvisor.co.uk/cmsdata/features/3637023/flickr-thumb_thumb800.png"
              style={{ width: "10%", margin: "0" }}
              alt="logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <Button
                      onClick={() =>
                        this.props.history.push(`/tags/${this.state.text}`)
                      }
                    >
                      Search
                    </Button>
                  </InputGroupAddon>
                  <Input
                    onChange={e => this.handleChange(e)}
                    value={this.state.text}
                    placeholder="tags"
                  />
                </InputGroup>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Topbar);
