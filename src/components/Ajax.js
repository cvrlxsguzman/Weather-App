import React from "react";

export default function Ajax(props) {
    const { cityName } = props;

    function get(url) {
        return new Promise((resolve, reject) => {
            let httpRequest = new XMLHttpRequest();
            httpRequest.open('GET', url);
            httpRequest.onload =function () {
                if (httpRequest.status === 200) {
                    resolve(httpRequest.responseText);
                } else {
                    reject(Error(httpRequest.status));
                }
            }
            httpRequest.send();
        })
    }
    
    function tempToF(kelvin) {
        return ((kelvin - 273.15) * 1.8 + 32).toFixed(0);
    }
    
    function successHandler(data) {
        const dataObj = JSON.parse(data);
        
        const weatherFragment =
            (`
            <h2>${dataObj.name}:</h2>
            <h2>Weather: ${dataObj.weather[0].description.charAt(0).toUpperCase() + dataObj.weather[0].description.slice(1)}</h2>
            <h2>Temp: ${tempToF(dataObj.main.temp)}</h2>
            <img src="http://openweathermap.org/img/w/${dataObj.weather[0].icon}.png"
                alt="${dataObj.weather[0].description}"
                width="80"
                height="80"
            />
            <br>
            `);
        return weatherFragment;
    }
    
    function failHandler(status) {
        console.log(status);
    }
    
    const locations = [
        'sheboygan'
    ]
    
    const apiKey = 'cbe8c3256cd606d6062f2453051f5aa0';
    
    const urls = locations.map(function (location) {
        return `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    });
    
    let literals;
    
    (async function () {
        let response = await get(urls[0]);

        literals = successHandler(response);
        
        console.log(literals);

        return (
            <h1>WOrld</h1>
            );
    })();

    return (
        <h1>World</h1>
    );
}




