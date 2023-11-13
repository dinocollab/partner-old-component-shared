import React, { Component } from 'react'
import LoadingSquare from './LoadingSquare'

type TLoadingType = 'square'

interface IProps {
  variant: TLoadingType
}

export class LoadingAnimation extends Component<IProps> {
  render() {
    switch (this.props.variant) {
      case 'square':
      default:
        return <LoadingSquare />
    }
  }
}
export default LoadingAnimation
