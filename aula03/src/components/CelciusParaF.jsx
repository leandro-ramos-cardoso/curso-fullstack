import React from 'react'

const CelciusParaF = (props) => {
    const fahrenheit = (props.celcius * 9) / 5 + 32
  return (
    <div>
       <h1>{props.celcius} C é igual a {fahrenheit} F</h1> 
    </div>
  )
}

export default CelciusParaF