// create your App component here
import React from 'react'

export default class App extends React.Component {

  state = {
    persons: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json()).then(data => setState({ persons: [...this.state.persons, data] }))
  }

  render() {
    return(
      <div>
        {this.state.persons.map(person => <li>{person.name}</li>)}
      </div>
    )
  }

}
