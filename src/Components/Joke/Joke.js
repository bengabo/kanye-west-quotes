import React from 'react';

import './Joke.css'

class Joke extends React.Component {
  constructor() { //1st
    super();

    this.state = {
      joke: "Be patient like is a fly",
      img: "",
    }

  }

  componentDidMount = () => { //3rd
    fetch ('https://api.chucknorris.io/jokes/random') //récupère les données de l'API
    .then(result => result.json()) // convertir le résultat en Json
    .then(result => { //renvoie le resultat de la ligne précédente
      this.setState({
        joke: result.value,
        img: result.icon_url,
      })
    ;} 
  )}

  render() { //2nd
    return (
      <div>
        <img className="chuck" src={this.state.img} />
        <p className="joke">{this.state.joke}</p>
      </div>
    )
  }
}

export default Joke;