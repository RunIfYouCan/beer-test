import React from "react";
import BeerCard from "../beerCard";
import InfiniteScroll from 'react-infinite-scroller';
import "./style.scss";

export default class BeerCardList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: []
    }
  }

  page = 0;

  getBeers = (page = 1) => {
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=9`)
      .then(data => data.json())
      .then(res => {
        this.setState((prev) => ({ beers: [...prev.beers, ...res] }))
      })
  };

  // componentDidMount() {
  //   this.getBeers(1)
  // }

  render() {
    return (
      <div className="BeerCardList">
        <InfiniteScroll
          className="BeerCardList__content"
          pageStart={1}
          loadMore={this.getBeers}
          hasMore={true || false}
        >
          {this.state.beers.map((beer) => (
            <BeerCard
              key={beer.id}
              beer={beer}
            />
          ))}
        </InfiniteScroll>
      </div>
    )
  }
}
