import React from "react";
import "./Countryname.css";

export class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoaded: false,
    };
  }
  render() {
    const { articles } = this.state;
    const author = articles.map((item) => {
      return <p>{item.author}</p>;
    });
    return <>{author}</>;
  }
}
