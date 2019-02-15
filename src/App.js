import React, { Component } from 'react'
import { Header } from './components/Header'
import "./components/Header.css"

class App extends Component {
  render() {
    return (
      <div>
        <Header text="Bytewar" />
        <h1>notTwitter</h1>
        <p>by <a href="/bytewar">@bytewar</a></p>
      </div>
    );
  }
}

export default App;