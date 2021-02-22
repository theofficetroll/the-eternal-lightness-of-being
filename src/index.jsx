import React from 'react';
import ReactDOM from 'react-dom';
import ls from 'local-storage';

// components

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    }
  }

  render() {
    return (
      <div className="game">
        WIP
      </div>
    )
  }
}

ReactDOM.render(<Container />, document.getElementById('app'));
