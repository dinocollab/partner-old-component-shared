import React, { Component, ComponentType, FC } from 'react'
import { ModelBase } from 'partner-local-lib/helper'
import { RoleKeyExternalSite, RoleKeyInternalSite } from '../Helper/RoleKey'
import { authService } from 'partner-oidc-auth'

type RoleKey = RoleKeyExternalSite | RoleKeyInternalSite
type MapComponent = {
  [key in RoleKey]?: ComponentType<any> | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
}

// function isComponentType(component: any): component is React.ComponentType {
//   return typeof component === 'function'
// }

interface SwitchComponentProps {
  MapComponent: MapComponent
}
interface SwitchComponentState {
  roles: string[]
}

export default class SwitchComponent extends Component<SwitchComponentProps, SwitchComponentState> {
  constructor(props: any) {
    super(props)
    this.state = {
      roles: [],
    }
  }
  _isMounted = true
  componentDidMount(): void {
    authService.getRoles().then((roles) => {
      if (this._isMounted) {
        this.setState({ roles: roles ?? [] })
      }
    })
  }
  componentWillUnmount(): void {
    this._isMounted = false
  }
  getComponent = () => {
    const { MapComponent } = this.props
    const roles = this.state.roles
    const role = Object.keys(MapComponent).find((x) => roles?.some((y) => y === x)) ?? ''
    return MapComponent[role as keyof Extract<MapComponent, ModelBase>]
  }
  render = () => {
    const { MapComponent, ...other } = this.props
    const ComponentSub = this.getComponent() ?? Div
    // return <Component {...other} />
    if (React.isValidElement(ComponentSub)) {
      // component is a JSX element
      return ComponentSub
    } else {
      // component is a ComponentType
      return <ComponentSub {...other} />
    }
  }
}
const Div: FC = (props) => <div>{props.children}</div>
