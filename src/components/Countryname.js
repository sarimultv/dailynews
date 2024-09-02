import React from "react";
import "./Countryname.css";

export class Countryname extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [
        { fullName: "INDIA", shortName: "in" },
        { fullName: "USA", shortName: "us" },
        { fullName: "China", shortName: "ch" },
        { fullName: "RUSSIA", shortName: "ru" },
      ],
      articles: [],
    };
  }
  array = () => {
    this.setState({
      country: [...this.state.country],
    });
  };
  fetchNews = (event) => {
    const CountryCode = event.target.getAttribute("CountryCode");
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${CountryCode}&category=business&apiKey=cf9dce39ff4748cfa8e2a1e3265f04d6`
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          articles: response.articles,
        });
      });
  };

  render() {
    // console.log(this.state.articles);
    const newsItem = this.state.articles.map((article) => {
      return (
        <ul className="news" key={article.title}>
          <li className="newsArticle">{article.title}</li>

          {/* <img
            className="img"
            src={article.urlToImage}
            alt="News Picture Not Available"
          /> */}
        </ul>
      );
    });

    const CountryNameItem = this.state.country.map((countryItem) => {
      return (
        <button
          onClick={this.fetchNews}
          CountryCode={countryItem.shortName}
          key={countryItem.fullName}
        >
          {countryItem.fullName}
        </button>
      );
    });
    return (
      <>
        {CountryNameItem}
        {newsItem}
      </>
    );
  }
}
