import React from 'react'
import { Box } from '@mui/material'

const LoadingSquare: React.FC = () => {
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      sx={{ margin: 'auto', display: 'block', shapeRendering: 'auto', width: '72px', height: '72px' }}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="translate(20 20)">
        <rect x="-15" y="-15" width="30" height="30" fill="#e65a1e">
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            calcMode="spline"
            dur="1s"
            values="1;1;0.2;1;1"
            keyTimes="0;0.2;0.5;0.8;1"
            keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5"
            begin="-0.4s"
          ></animateTransform>
        </rect>
      </g>
      <g transform="translate(50 20)">
        <rect x="-15" y="-15" width="30" height="30" fill="#f16022">
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            calcMode="spline"
            dur="1s"
            values="1;1;0.2;1;1"
            keyTimes="0;0.2;0.5;0.8;1"
            keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5"
            begin="-0.3s"
          ></animateTransform>
        </rect>
      </g>
      <g transform="translate(80 20)">
        <rect x="-15" y="-15" width="30" height="30" fill="#f37643">
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            calcMode="spline"
            dur="1s"
            values="1;1;0.2;1;1"
            keyTimes="0;0.2;0.5;0.8;1"
            keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5"
            begin="-0.2s"
          ></animateTransform>
        </rect>
      </g>
      <g transform="translate(20 50)">
        <rect x="-15" y="-15" width="30" height="30" fill="#f16022">
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            calcMode="spline"
            dur="1s"
            values="1;1;0.2;1;1"
            keyTimes="0;0.2;0.5;0.8;1"
            keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5"
            begin="-0.3s"
          ></animateTransform>
        </rect>
      </g>
      <g transform="translate(50 50)">
        <rect x="-15" y="-15" width="30" height="30" fill="#f37643">
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            calcMode="spline"
            dur="1s"
            values="1;1;0.2;1;1"
            keyTimes="0;0.2;0.5;0.8;1"
            keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5"
            begin="-0.2s"
          ></animateTransform>
        </rect>
      </g>
      <g transform="translate(80 50)">
        <rect x="-15" y="-15" width="30" height="30" fill="#e65a1e">
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            calcMode="spline"
            dur="1s"
            values="1;1;0.2;1;1"
            keyTimes="0;0.2;0.5;0.8;1"
            keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5"
            begin="-0.1s"
          ></animateTransform>
        </rect>
      </g>
      <g transform="translate(20 80)">
        <rect x="-15" y="-15" width="30" height="30" fill="#f37643">
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            calcMode="spline"
            dur="1s"
            values="1;1;0.2;1;1"
            keyTimes="0;0.2;0.5;0.8;1"
            keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5"
            begin="-0.2s"
          ></animateTransform>
        </rect>
      </g>
      <g transform="translate(50 80)">
        <rect x="-15" y="-15" width="30" height="30" fill="#e65a1e">
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            calcMode="spline"
            dur="1s"
            values="1;1;0.2;1;1"
            keyTimes="0;0.2;0.5;0.8;1"
            keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5"
            begin="-0.1s"
          ></animateTransform>
        </rect>
      </g>
      <g transform="translate(80 80)">
        <rect x="-15" y="-15" width="30" height="30" fill="#f16022">
          <animateTransform
            attributeName="transform"
            type="scale"
            repeatCount="indefinite"
            calcMode="spline"
            dur="1s"
            values="1;1;0.2;1;1"
            keyTimes="0;0.2;0.5;0.8;1"
            keySplines="0.5 0.5 0.5 0.5;0 0.1 0.9 1;0.1 0 1 0.9;0.5 0.5 0.5 0.5"
            begin="0s"
          ></animateTransform>
        </rect>
      </g>
    </Box>
  )
}

export default LoadingSquare
