import React from "react";
export default class BeerInfo extends React.Component {
  render() {
    function createItems(beertypes, bartenders) {
      //taps that are being used at the moment (array)
      let tapsInUse = tapUsage(bartenders);
      //map out the beertypes on tap into list items
      function mapBeertypes(beertypes) {
        let beerNames = beertypes.map(beer => {
          return (
            <li key={beer.name} className={getColor(beer)}>
              {beer.name}
            </li>
          );
        });
        return beerNames;
      }
      //define css class name if tap === one of the beertypes
      function getColor(beer) {
        let name;
        tapsInUse.forEach(tap => {
          if (tap === beertypes.indexOf(beer)) {
            name = "color";
          }
        });
        return name;
      }
      //identify taps the bartenders are using currently
      function tapUsage(bartenders) {
        let tapIndex = bartenders.map(bartender => {
          return bartender.usingTap;
        });
        return tapIndex;
      }
      // begin the sequence to return list items
      return mapBeertypes(beertypes);
    }
    return (
      //create unordered list and pass in the props for the creation of list items
      <section>
        <h1>Beers we are pouring right now:</h1>
        <ul>{createItems(this.props.beertypes, this.props.tapUsage)}</ul>
      </section>
    );
  }
}
