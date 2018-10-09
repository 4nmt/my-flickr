import React, { Component } from "react";
import axios from "axios";
import "./Explore.css";
import InfiniteScroll from "react-infinite-scroller";
import { api_key } from "./config";
import Gallery from "react-grid-gallery";

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoList: [],
      currentPage: 1
    };
  }

  async loadItemList(page) {
    try {
      const res = await axios.get(`https://api.flickr.com/services/rest/`, {
        params: {
          api_key: api_key,
          method: "flickr.interestingness.getList",
          format: "json",
          nojsoncallback: 1,
          page: page,
          per_page: 20,
          extras: "url_l,owner_name,views,tags"
        }
      });

      this.setState({
        photoList: [...this.state.photoList, ...res.data.photos.photo],
        curPage: page
      });
    } catch (err) {
      console.log("error");
    }
  }

  render() {
    return (
      <InfiniteScroll
        pageStart={1}
        loadMore={() => this.loadItemList(this.state.currentPage + 1)}
        hasMore={this.state.currentPage < 10 ? true : false}
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
            enableLightbox={false}
            rowHeight={280}
            images={this.state.photoList.map(photo => {
              return {
                photo_id: photo.id,
                src: photo.url_l,
                thumbnail: photo.url_l,
                thumbnailWidth: parseInt(photo.width_l),
                thumbnailHeight: parseInt(photo.height_l),
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

export default Explore;
