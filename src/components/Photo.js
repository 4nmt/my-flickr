import React from "react";
import "./Photo.css";
import { Row, Col } from "reactstrap";

const Photo = ({ photo }) => {
  return (
    <div>
      <div
        style={{
          background: `url(${photo.mainImageURL})`,
          width: "100%",
          height: "400px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      />
      <Row style={{ marginTop: "20px" }}>
        <Col>
          <Row>
            <Col xs="4">
              <img
                src={photo.avatarImageURL}
                alt={photo.username}
                style={{ width: "150px" }}
              />
            </Col>
            <Col xs="8">
              <b>{photo.username}</b>
              <div>Location: {photo.location}</div>
              <p>Description: {photo.description}</p>
            </Col>
          </Row>
          <hr className="my-2" />
        </Col>
        <Col>
          <h3>Tag list:</h3>
          <hr />
          {photo.tagList}
        </Col>
      </Row>
    </div>
  );
};

export default Photo;
