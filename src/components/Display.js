import Lottie from "lottie-react";
import { useState, useRef } from "react";
import sun from "../lottie/lf20_Stdaec.json";
export function Display({ estado, pais, clima, temperatura }) {
  const [celcius, setCelcius] = useState(true);
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());

  const interval = useRef();

  interval.current = setInterval(() => {
    const actualTime = new Date();
    if (hours !== actualTime.getHours()) {
      setHours(actualTime.getHours());
    }
    if (minutes !== actualTime.getMinutes()) {
      setMinutes(actualTime.getMinutes());
    }
  }, 1000);

  return (
    <div className="imagen-fondo">
      <div className="dia" id="clima-display">
        <p id="fecha">{`${hours}:${minutes}`}</p>
        <p id="lugar">{`${estado}, ${pais}`}</p>
        <button id="temperatura" onClick={() => setCelcius(!celcius)}>
          {celcius
            ? Math.floor(temperatura.temp) + "ºC"
            : Math.floor((temperatura.temp * 9) / 5 + 32) + "ºF"}
        </button>
        <p id="descripcion">
          {clima.main}, {clima.description}
        </p>
        <img id="imagen" src={clima.icon} alt="" />
      </div>
    </div>
  );
}
