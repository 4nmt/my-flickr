import React, { Component } from "react";
//import logo from './logo.svg';
import axios from "axios";
import "./Explore.css";
import InfiniteScroll from "react-infinite-scroller";
import { api_key } from "./config";
import Gallery from "react-grid-gallery";

class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPhotos: [],
      curPage: 1,
      curTag: ""
    };
    this.isReset = false;
  }

  async loadItemList(page) {
    try {
      const res = await axios.get(`https://api.flickr.com/services/rest/`, {
        params: {
          api_key: api_key,
          method: "flickr.photos.search",
          format: "json",
          nojsoncallback: 1,
          tags: this.props.match.params.tag,
          page: page,
          per_page: 20,
          extras: "url_l,owner_name,views,tags"
        }
      });

      let listPhotos = [...this.state.listPhotos];
      if (this.isReset) {
        this.isReset = false;
        listPhotos = [];
      }
      this.setState({
        listPhotos: [...listPhotos, ...res.data.photos.photo],
        curPage: page,
        curTag: this.props.match.params.tag
      });
    } catch (err) {
      console.log("error");
    }
  }

  componentDidUpdate(prevProps) {
    // respond to parameter change in scenario 3
    let oldTag = prevProps.match.params.tag;
    let newTag = this.props.match.params.tag;

    if (oldTag !== newTag) {
      this.isReset = true;
      this.loadItemList(1);
    }
  }

  render() {
    return (
      <InfiniteScroll
        pageStart={1}
        loadMore={() => this.loadItemList(this.state.curPage + 1)}
        hasMore={this.state.curPage < 10 ? true : false}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <div>
          <Gallery
            enableImageSelection={false}
            onClickThumbnail={myOnSelectImage}
            rowHeight={280}
            images={this.state.listPhotos.map((photo, index) => {
              return {
                photo_id: photo.id,
                src: photo.url_l,
                thumbnail: photo.url_l,
                thumbnailWidth: photo.width_l,
                thumbnailHeight: photo.height_l,
                customOverlay: (
                  <div className="captionStyle">
                    <b>{photo.title}</b>
                    <div>Owner: {photo.ownername}</div>
                    <div>Views: {photo.views}</div>
                  </div>
                )
              };
            })}
          />
        </div>
      </InfiniteScroll>
    );
  }
}

function myOnSelectImage() {
  window.location.href = `/photos/${this.props.item.photo_id}`;
}

export default Tag;
