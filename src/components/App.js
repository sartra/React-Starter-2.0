import React, { Component } from 'react'
import Home from './Home'
import About from './About'
import { Route } from 'react-router-dom'
require('./style')

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </div>
    )
  }
}
