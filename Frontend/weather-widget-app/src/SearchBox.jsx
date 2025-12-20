import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({weatherInfo}) {
  let [city, setCity] = useState("");
  let[error,setError] = useState(false);
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "f97f879618008794f4fe2bb327f4f842";

  let getWeatherInfo = async () => {
    try{
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    console.log(jsonResponse);

    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
  } catch(err){
    throw err;
  }
  };

  let handleState = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try{
      event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    weatherInfo(newInfo);

    }catch(err) {
      setError(true);
    }
    

    
  };
  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleState}
          required
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}}>No such place in our API</p>}
      </form>
    </div>
  );
}
