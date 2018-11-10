import React from "react";
export default class BeerInfo extends React.Component {
  render() {
    function mapBeertypes(beertypes) {
      let beerNames = beertypes.map(beer => {
        return <li key={beer.name}>{beer.name}</li>;
      });
      return beerNames;
    }
    return (
      <section>
        <h1>Beers we are pouring right now:</h1>
        <ul>{mapBeertypes(this.props.beertypes)}</ul>
      </section>
    );
  }
}
