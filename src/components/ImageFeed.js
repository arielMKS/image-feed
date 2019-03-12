import React from "react";

class ImageFeed extends React.Component {
  // this function renders images with title using map function
  renderImages = () => {
    return this.props.images.map((image, i) => {
      return (
        <div
          style={{ margin: "2em 0", backgroundColor: "rgb(255,255,255)" }}
          key={i}
        >
          <h2 style={{ textAlign: "center" }}>{image.title}</h2>
          <img
            style={{
              padding: "2em",
              width: "100%"
            }}
            src={image.url}
            alt={"test"}
          />
        </div>
      );
    });
  };

  render() {
    // console.log("PROPS", this.props);
    var renderImageList = this.renderImages();
    return <div>{renderImageList}</div>;
  }
}

export default ImageFeed;
