import React from 'react'

interface IProps {
  ratio?: number
  reverse?: boolean
  style?: React.CSSProperties
}

export const HeightEqualWidth: React.FC<React.PropsWithChildren<IProps>> = (props) => {
  const boxRef = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    const resize = () => {
      if (!boxRef.current) return
      const { ratio = 1, reverse } = props
      if (reverse) {
        const height = boxRef.current.offsetHeight * ratio
        boxRef.current.style.width = `${height}px`
      } else {
        const width = boxRef.current.offsetWidth * ratio
        boxRef.current.style.height = `${width}px`
      }
    }
    resize()
    // const timer = setTimeout(resize, 50)
    window.addEventListener('resize', resize)
    return () => {
      // clearTimeout(timer)
      window.removeEventListener('resize', resize)
    }
  }, [props])
  const _style = Object.assign({}, !!props.reverse ? { height: '100%' } : { width: '100%' }, props.style)
  return (
    <div ref={boxRef} style={_style}>
      {props.children}
    </div>
  )
}

export default HeightEqualWidth
