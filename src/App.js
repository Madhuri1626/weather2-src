// import axios from 'axios';
// import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [city, setcity] = useState(" ")
  const [result, setresult] = useState({
    temp: "./0c",
    humidity: "--/---",
    wind: "---/---"
  })
  const changeHandler = e => {
    setcity(e.target.value);
  }
  const submitHandler = e => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=77850174f0521a8f573e850e5d0d1768`).then(
      response => response.json()
    ).then(data => {
      // const kelvin=data.main.temp
      // const Humidity=data.main.humidity
      // const wind=data.wind.speed
      // console.log(wind)
      // const celcius=kelvin-273.15
      setresult({
        temp: data.main.temp,
        humidity: data.main.humidity,
          wind: data.wind.speed
    })
    setcity("")
  })

}
return (
  <div>
    <center>
      <div >
        <h4 >whetther_app</h4>
        <form onSubmit={submitHandler}>
          <input type="text" name="city" value={city} onChange={changeHandler} /><br /><br />
          <input type="submit" value="get temp" />
        </form>
        <h1>{result.temp}</h1>
        <h1>{result.humidity}</h1>
        <h1>{result.wind}</h1>
      </div>
    </center>
  </div>
)
}
export default App;