import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    let[weatherInfo,setWeatherInfo] = useState({
        city:"Saharnpur",
        feelsLike: 33.76,
        temp:31.05,
        tempMin:31.05,
        tempMax:31.05,
        humidity:55,
        weather:"haze",
    })

    let updateInfo = (result) =>{
        setWeatherInfo(result);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox weatherInfo={updateInfo} />
            <InfoBox info={weatherInfo} />

        </div>
    )
    
}