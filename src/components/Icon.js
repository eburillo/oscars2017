import React from 'react'

const ICONS = {
  star: 'M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538z'
}

const Icon = props => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    path: {
      fill: props.color
    }
  }

  return (
    <svg
      style={styles.svg}
      width={props.width || props.size || "16px"}
      height={props.height || props.size || "16px"}
      viewBox="0 0 1024 1024"
    >
      <path style={styles.path} d={ICONS[props.icon]} />
    </svg>
  )
}

export default Icon
