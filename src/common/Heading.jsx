import React from 'react'

const Heading = ({text , headingClass}) => {
  return (
    <h2 className={`text-custom-6xl font-light text-white text-center uppercase leading-custom-lg max-lg:text-5xl max-md:text-4xl max-sm:text-3xl ${headingClass}`}>{text}</h2>
  )
}

export default Heading