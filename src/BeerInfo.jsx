import React from "react";
export default class BeerInfo extends React.Component {
  render() {
    function mapBeertypes(beertypes) {}
    return (
      <section>
        <h1>Beers we serve today:</h1>
        <ul>{mapBeertypes(this.props.beertypes)}</ul>
      </section>
    );
  }
}
