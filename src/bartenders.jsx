import React from "react";
export default class Bartenders extends React.Component {
  render() {
    function mapBartenders(bartenders) {
      let working = bartenders.map(e => {
        return (
          //bartenders name and his/hers status
          <li key={e.name}>
            {e.name} status: {e.statusDetail}
          </li>
        );
      });
      return working;
    }
    return (
      <section>
        <h1>Bartenders working: </h1>
        <ul>{mapBartenders(this.props.bartenders)}</ul>
      </section>
    );
  }
}
