import { Display } from "./Display";
import { useEffect, useState } from "react";
import useNavigatorPermissions from "react-use-navigator-permissions";

const URL = "https://weather-proxy.freecodecamp.rocks/api/current?";

export function Clima() {
  const { status, error } = useNavigatorPermissions("geolocation");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (status === "granted") {
      navigator.geolocation.getCurrentPosition((position) => {
        fetch(
          URL +
            `lat=${position.coords.latitude}&lon=${position.coords.longitude}`
        ).then((response) => {
          response.json().then((json) => {
            console.log(json);
            setWeather(json);
          });
        });
      });
    }
  }, [status, error]);

  if (weather) {
    return (
      <div>
        <Display
          estado={weather.name}
          pais={weather.sys.country}
          clima={weather.weather[0]}
          temperatura={weather.main}
        ></Display>
      </div>
    );
  }
}
