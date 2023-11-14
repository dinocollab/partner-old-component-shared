import React, { Component } from 'react'
import { Spinner } from 'reactstrap'
import './LazySpinner.css'
export default class LazySpinner extends Component {
  render() {
    return (
      <div className="container-spinner">
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="primary" />
      </div>
    )
  }
}
