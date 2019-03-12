import React, { Component } from "react";
import "./App.css";
import ImageFeed from "./components/ImageFeed";

class App extends Component {
  state = {
    title: "",
    url: "",
    images: [
      {
        url: "https://thumbs.dreamstime.com/z/zip-line-26475548.jpg",
        title: "ziplining"
      },
      {
        url: "http://bit.ly/2J8q2ky",
        title: "Hiking"
      }
    ]
  };

  // this function adds a new image url to image list
  postImageClicked = () => {
    const { url, title } = this.state;
    const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/; // regex to validate url

    // update state if url input is valid
    if (regexp.test(url)) {
      this.setState({ images: [...this.state.images, { url, title }] });
    } else {
      console.log("Invalid url");
    }

    // empty input boxes after submit clicked
    this.setState({
      title: "",
      url: ""
    });
  };

  handleChange = evt => {
    const value = evt.target.value;
    const name = evt.target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    // console.log("STATE", this.state);
    return (
      <div
        className="container"
        style={{
          backgroundColor: "rgb(38, 38, 38)",
          padding: "2em",
          border: "2px solid red"
        }}
      >
        <div className="row">
          <div className="col-lg-12">
            <form>
              <div className="form-group row">
                <div className="col-sm-12">
                  <input
                    value={this.state.url}
                    onChange={this.handleChange}
                    name="url"
                    type="text"
                    className="form-control"
                    id="inputURl"
                    placeholder="Enter Url"
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-12">
                  <input
                    value={this.state.title}
                    onChange={this.handleChange}
                    name="title"
                    type="text"
                    className="form-control"
                    id="inputTitle"
                    placeholder="Title"
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-10">
                  <button
                    onClick={this.postImageClicked}
                    type="button"
                    className="btn btn-primary"
                  >
                    New Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <ImageFeed images={this.state.images} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
