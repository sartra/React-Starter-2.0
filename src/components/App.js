import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => this.sayHi()

  sayHi = () => {
    console.log('Hello, arrow functions are great.')
  }

  render() {
    return (
      <div>
        <h1>Yolo</h1>
      </div>
    )
  }
}
