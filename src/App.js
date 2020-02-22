import React, { Component } from 'react'
import './App.css'
import AppContainer from './Components/AppContainer.react'

export default class App extends Component {
  render() {
    return <AppContainer taskGroupList={this.props.taskGroupList} />;
  }
}
