import React from 'react';
import ReactDOM from 'react-dom';
import ls from 'local-storage';

// components
import PastSceneList from './pastSceneList';
import CurrentScene from './currentScene';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completedSceneList: [], // Holds list of scenes for which decisions have been made
      openSceneList: [], // Holds list of scenes which are available but for which no decisions have been made
      choicesMade: 0, // How many current choices have been locked in
    }
    this.handleClick = this.handleClick.bind(this);
    this.saveProgress = this.saveProgress.bind(this);
    this.loadProgress = this.loadProgress.bind(this);
  }

  handleClick = (e) => {
    e.preventDefault();
    // TODO
  };

  // These are stubs
  // If I end up using just the main state, I can have it just save the whole thing
  // Otherwise, I'll want to save individually in each place the state changes
  saveProgress = (key, value) => {
    ls.set(key, value);
  };

  loadProgress = (key) => {
    ls.get(key);
  };

  render() {
    return (
      <div className="game">
        <PastSceneList />
        <CurrentScene />
      </div>
    )
  }
}

ReactDOM.render(<Container />, document.getElementById('app'));
