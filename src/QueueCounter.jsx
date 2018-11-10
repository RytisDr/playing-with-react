import React from "react";
export default class QueueCounter extends React.Component {
  render() {
    return (
      <section>
        <h1>
          There are currently {this.props.queueLength.length} people in queue
        </h1>
      </section>
    );
  }
}
