import React from 'react';

import './style.css'

class Joke extends React.Component {
  constructor(){
    super();

    this.state = {
      joke: "Wait, wait, wait, wait... WAIT!!!"
    }
  }

  componentDidMount = () => {
    fetch('https://api.kanye.rest')
    .then(result => result.json())
    .then(result => {
      this.setState({joke:result.quote});
    })
  }

render() {
    return(
    <div>
      <img src="https://ph-files.imgix.net/ae4dde67-ab72-4c45-a4fa-75c7fde723b3?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"/>
      <p className="sentence">{this.state.joke}</p>
    </div>
    )
  }
}

export default Joke;