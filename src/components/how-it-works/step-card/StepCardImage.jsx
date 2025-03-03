import React from 'react'

const StepCardImage = ({image, title}) => {
  return (
    <><img src={image} alt={title} className="h-full object-cover" /></>
  )
}

export default StepCardImage