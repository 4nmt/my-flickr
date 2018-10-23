import React from "react";
import "./Explore.css";
import InfiniteScroll from "react-infinite-scroller";
import Gallery from "react-grid-gallery";
import store from "../store/configureStore";
import { fetchPhoto } from "../actions";

const Explore = ({ photoList, currentPage, fetchExplore }) => (
  <InfiniteScroll
    pageStart={1}
    loadMore={() => fetchExplore(currentPage + 1)}
    hasMore={currentPage < 10 ? true : false}
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
        images={photoList.map(photo => {
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

function myOnSelectImage() {
  store.dispatch(fetchPhoto(this.props.item.photo_id));
}

export default Explore;
