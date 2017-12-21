import React, { Component } from 'react';
import data from '../constants/data'
import styles from '../stylesheets/index.css'
import ListItem from './ListItem'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visited: [],
      places: []
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(id) {
    // debugger;
    if (!this.state.visited.includes(id)) {
      this.setState({ visited: [...this.state.visited, id] })
    }
  }

  componentDidMount() {

    fetch('http://country.io/names.json')
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
    return response
    })
    .then(response =>{
      let parsedData = response.json()
      return parsedData
    })
    .then(data =>{

      let i = 0
      let places = Object.values(data).map(place => {
        i++
        return(
          { id: i, name: place}
        )
      })
      this.setState({ places: places })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    let list = this.state.places.map(place => {
      let visited
      if (this.state.visited.includes(place.id)){
        visited = true
      } else {
        visited = false
      }

      let handleClick = () =>{
        this.clickHandler(place.id)
      }
      return(
        <ListItem
        key={place.id}
        handleClick={handleClick}
        placeName={place.name}
        visited={visited} />
      )
    })

    return (
      <div id="wishlist-div">
        <div className="row">
          <div className="small-12 small-centered columns text-center">
            <h3>Wanderlust Wishlist</h3>
            <div className="small-5 small-centered columns text-left">
            {list}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
