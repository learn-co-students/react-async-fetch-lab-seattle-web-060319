// create your App component here
import React from 'react';
const API = 'http://api.open-notify.org/astros.json';
class App extends React.Component {
  state = {
    people: []
  };

  componentDidMount = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          people: json.people
        });
      });
  };

  render() {
    return (<div>{this.state.people.map(people => people.name)}</div>)
  }
}

export default App;