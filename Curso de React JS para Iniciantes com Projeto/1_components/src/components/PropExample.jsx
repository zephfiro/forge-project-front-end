import React from 'react'

const PropExample = ({name, uncle_name}) => {
  return (
    <div>
        <h3>Hello {name}</h3>
        <h3>Your uncle name is {uncle_name}</h3>
    </div>
  )
}

export default PropExample