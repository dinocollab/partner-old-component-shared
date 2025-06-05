import React, { ComponentType, FC, useRef, useState, useEffect, FunctionComponent } from 'react'
import { AuthorizeRouteContext } from 'partner-oidc-auth-ui'
interface IOption<IData> {
  action: (param?: any, abort?: AbortSignal) => Promise<IData | undefined>
}
interface IExtenData<IData> {
  data: IData
}
export interface IParamSkeleton {
  param?: any
  extract?: any
  onResult?: (data?: any) => void
}
export const SkeletonServiceCreate = function <Tprop, IData>(option: IOption<IData>) {
  return (WrappedComponent: ComponentType<Tprop>) => {
    const hocComponent: FC<Tprop & IExtenData<IData> & IParamSkeleton> = ({ ...props }) => {
      const [data, setData] = useState<IData | undefined>()
      const isMounted = useRef(false)
      const tokenSource = useRef<AbortController>(new AbortController())
      useEffect(() => {
        isMounted.current = true
        setData(undefined)
        option.action({ ...(props.param ?? {}) }, tokenSource.current.signal).then((data) => {
          if (isMounted.current) {
            setData(data)
          }
          props.onResult && props.onResult(data)
        })
        return () => {
          isMounted.current = false
          tokenSource.current.abort()
        }
      }, [props.extract])
      useEffect(() => {}, [props.param])
      return <WrappedComponent {...props} data={data} IsLoading={!data} />
    }
    return hocComponent as FunctionComponent<Omit<Tprop & IParamSkeleton, keyof { data: any; IsLoading: any }>>
  }
}
interface IRoleViewProps {
  Role: string[]
}
export const RoleView: FC<IRoleViewProps> = (props) => {
  const mapRole = new Set(props.Role)
  const IsShow = (roles: string[]) => roles.some((x) => mapRole.has(x))
  return (
    <AuthorizeRouteContext.Consumer>
      {({ state }) => {
        return IsShow(state.roles ?? []) ? props.children : <></>
      }}
    </AuthorizeRouteContext.Consumer>
  )
}
