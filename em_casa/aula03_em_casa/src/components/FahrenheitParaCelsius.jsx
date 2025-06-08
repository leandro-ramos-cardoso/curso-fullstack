import React from 'react'

const FahrenheitParaCelsius = (props) => {
const celsius = ((props.fahrenheit - 32) * 5) / 9
  return (
    <div>
        <h1>{props.fahrenheit}ºF equivalem a {celsius}ºC</h1>
    </div>
  )
}

export default FahrenheitParaCelsius