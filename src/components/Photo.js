import React, { Component } from "react";
import axios from "axios";
import "./Photo.css";
import { api_key } from "./config";
import { Jumbotron, Button, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null
    };
  }

  async componentDidMount() {
    try {
      const res = await axios.get(`https://api.flickr.com/services/rest/`, {
        params: {
          api_key: api_key,
          method: "flickr.photos.getInfo",
          photo_id: this.props.match.params.photo_id,
          format: "json",
          nojsoncallback: 1
        }
      });
      console.log(res, this.state.info);
      let info = null;
      info = res.data.photo;
      console.log(info);

      this.setState({ info });
    } catch (err) {
      console.log("error");
    }
  }

  render() {
    const info = this.state.info;
    if (!info) return null;
    let url, tagList, avatarUrl, username, location, description;

    url = `https://farm${info.farm}.staticflickr.com/${info.server}/${
      info.id
    }_${info.secret}.jpg`;

    tagList = info.tags.tag.map(val => {
      return (
        <Link to={`/tags/${val._content}`}>
          <Button color="secondary" className="tagStyle">
            {val._content}
          </Button>{" "}
        </Link>
      );
    });

    avatarUrl = `http://farm${info.owner.iconfarm}.staticflickr.com/${
      info.owner.iconserver
    }/buddyicons/${info.owner.nsid}.jpg`;

    username = info.owner.username;
    location = info.owner.location;
    description = info.description.content;

    return (
      <div>
        <Jumbotron>
          <img src={url} style={{ width: "60%" }} />
        </Jumbotron>
        <Row>
          <Col>
            <Row>
              <Col xs="4">
                <img src={avatarUrl} style={{ width: "150px" }} />
              </Col>
              <Col xs="8">
                <b>{username}</b>
                <div>Location: {location}</div>
                <p>Description: {description}</p>
              </Col>
            </Row>
            <hr className="my-2" />
          </Col>
          <Col>
            <h3>Tag list:</h3>
            <hr />
            {tagList}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Photo;
