import React from "react";
export default class BeerInfo extends React.Component {
  render() {
    function mapBeerNames(beertypes, bartenders) {
      let tapsInUse = tapUsage(bartenders);
      function mapBeertypes(beertypes) {
        function getColor(beer) {
          let name;
          tapsInUse.forEach(tap => {
            if (tap === beertypes.indexOf(beer)) {
              name = "color";
            } else {
              name = "neutral";
            }
          });
          return name;
        }
        let beerNames = beertypes.map(beer => {
          let colorClassName = getColor(beer);
          return (
            <li key={beer.name} className={colorClassName}>
              {beer.name}
            </li>
          );
        });
        return beerNames;
      }

      return mapBeertypes(beertypes);

      function tapUsage(bartenders) {
        let tapIndex = bartenders.map(bartender => {
          return bartender.usingTap;
        });
        return tapIndex;
      }
    }
    return (
      <section>
        <h1>Beers we are pouring right now:</h1>
        <ul id="beerList">
          {mapBeerNames(this.props.beertypes, this.props.tapUsage)}
        </ul>
      </section>
    );
  }
}
