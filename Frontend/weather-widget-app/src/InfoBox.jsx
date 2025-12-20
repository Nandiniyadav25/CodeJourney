import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({ info }) {
  let INIT_URL =
    "https://images.unsplash.com/photo-1754638334814-8ac08f706823?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhhemUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";

  let RAIN_URL =
    "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdWR5JTIwc2t5fGVufDB8fDB8fHww";

  let HOT_URL =
    "https://images.unsplash.com/photo-1605158080227-fd61e78bdc8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VubnklMjBkYXl8ZW58MHx8MHx8fDA%3D";

  let COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="InfoBox">
      <div className="CardComponent">
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="180"
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {
                info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp > 15
                ? <SunnyIcon/>
                : <AcUnitIcon/>
              }
              <h1>{info.temp}&deg;C</h1>
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Temp Min = {info.tempMin}&deg;C</p>
              <p>Temp Max = {info.tempMax}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>
                The weather can be described as {info.weather} and feels like{" "}
                {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
