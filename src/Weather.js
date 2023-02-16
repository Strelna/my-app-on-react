import React from "react";
import axios from 'axios';

export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}C`)
    }
    
    let apiKey = `6d68aadfacdd4f5163bc273049a0cf2d`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return <h2>Hello from Weather</h2>
}