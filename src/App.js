import React, { Component } from 'react';
import Songname from './components/songname';
import Inform from './components/inform';
import './App.css';
import './components/inform.css';
import './components/songname.css';

class App extends Component {
  render(){
    return (
      <div className="App">

        <header className="App-header">
          <h1>SONGRAPHY</h1>
          Find Music Relation
        </header>

        <nav className = "App-nav">
          <Songname/>
        </nav>
        <article className = "App-atc">
          <Inform/>
        </article>
    </div>
   );
 }
}

export default App;
