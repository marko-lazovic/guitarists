import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import Navbar from './components/Navigation/Navbar/Navbar';
import Button from './components/Button/Button';
import Card from './components/Card/Card';

class App extends Component {
  state = {
    guitarists: null,
    cardOutput: ''
  }

  componentDidMount() {
    axios.get('http://localhost:3002/api/v1/guitarists')
      .then(response => {
        this.setState({ guitarists: response.data.data.guitarists });        
      })
      .catch(err => console.log(err));
  }
  
  cardHandler(guitarist){    
    let cardOutputVar = '';  
    let imgSrc = null;  
    if (guitarist) {
      axios.get(`http://localhost:3002/api/v1/guitarists/images?image=${guitarist.image}`)
        .then(res => {
          imgSrc = res.config.url;
          cardOutputVar = <Card
            name={guitarist.name}
            imgUrl={imgSrc}
            guitars={guitarist.guitars}
            strings={guitarist.strings} />;
          this.setState({ cardOutput: cardOutputVar });
        })
        .catch(err => console.log(err));      
    }
  }

  render() {
    const guitarists = this.state.guitarists;    
    let btnOutput = '';
    if (guitarists) {
      btnOutput = guitarists.map(guitarist => {
        return(
          <Button 
            key={guitarist.name} 
            classes="btn btn-secondary" 
            name={guitarist.name}
            click={() => this.cardHandler(guitarist)} />
        );
      })
    }

    return (
      <div className="App">
        <Navbar appName="Guitarists" />
        <div className="container py-4">
          <div className="btn-toolbar mb-5" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group mr-2" role="group" aria-label="Button group">
              {btnOutput}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-6">
              {this.state.cardOutput}
            </div>
          </div>
        </div>
      </div>
    );
  }  
}

export default App;
