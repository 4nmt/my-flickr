import { connect } from "react-redux";
import Photo from "../components/Photo";
import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
  const photo = state.photo;
  let tagList = photo.tags.tag.map(val => {
    return (
      <Link to={`/my-flickr/tags/${val._content}`}>
        <Button color="secondary" className="tagStyle">
          {val._content}
        </Button>{" "}
      </Link>
    );
  });

  let photoInfo = {
    mainImageURL: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${
      photo.id
    }_${photo.secret}.jpg`,
    avatarImageURL: `http://farm${photo.owner.iconfarm}.staticflickr.com/${
      photo.owner.iconserver
    }/buddyicons/${photo.owner.nsid}.jpg`,
    username: photo.owner.username,
    location: photo.owner.location,
    description: photo.description.content,
    tagList
  };
  return {
    photo: { ...photoInfo }
  };
};

export default connect(mapStateToProps)(Photo);
