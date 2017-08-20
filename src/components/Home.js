import React, { Component } from 'react'
import ButtonLink from './reusable/ButtonLink'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <p>Welcome to React Brah. If you like this repo, please give me a follow on Github!</p>

        <ButtonLink url="about">
          About Page
        </ButtonLink>
      </div>
    )
  }
}
