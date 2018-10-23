import React, { Component } from "react";
import { connect } from "react-redux";
import { redirectTags } from "../actions";
import { Link, withRouter } from "react-router-dom";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  NavLink,
  Row,
  Col
} from "reactstrap";

const Topbar = ({ dispatch }) => {
  let input = "";
  const divStype = {
    color: "white",
    margin: "10px",
    opacity: ".7"
  };
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/my-flickr">
        {" "}
        <span style={{ color: "white", fontWeight: "bold" }}>Flickr</span>
      </NavbarBrand>
      <Nav navbar>
        <NavItem>
          <Link to="/my-flickr">
            <span style={divStype}>You</span>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/my-flickr">
            <span style={divStype}>Explore</span>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/my-flickr">
            <span style={divStype}>Create</span>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/my-flickr">
            <span style={divStype}>Go</span>
          </Link>
        </NavItem>
      </Nav>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Button onClick={() => dispatch(redirectTags(input.value))}>
                Search
              </Button>
            </InputGroupAddon>
            <Input innerRef={node => (input = node)} placeholder="tags" />
          </InputGroup>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default withRouter(connect()(Topbar));
