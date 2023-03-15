import React from 'react'

function Button({children, type, version, isDisabled}) {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>{children}</button>
  )
}

Button.defaultProps = {
    type: 'button',
    version: 'primary',
    isDisabled: false,
    children: 'Button'
}

export default Button