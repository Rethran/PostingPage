import React from "react";
import "./app.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
class FetchPost extends React.Component {
  state = {
    loading: true,
    jsondata: null,
  };
  async componentDidMount() {
    {
      /*
                                  this component fetch asynchronously posts from url and stores it as state              
                              */
    }
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ jsondata: data, loading: false });
  }

  render() {
    return (
      <div>
        {" "}
        {this.state.loading || !this.state.jsondata ? (
          <div> loading... </div>
        ) : (
          <div>
            {" "}
            {this.state.jsondata.map((post) => (
              <Link to={`/post/${post.id}`}>
                <h4> Post {post.id} </h4> <p> {post.title} </p>{" "}
              </Link>
            ))}{" "}
          </div>
        )}{" "}
      </div>
    );
  }
}

export default FetchPost;
