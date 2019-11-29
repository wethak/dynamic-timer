import React from "react";

export default function Timer(props) {
  let hours = Math.floor(props.time / 1000 / 3600);
  let minutes = Math.floor((props.time / 1000 - hours * 3600) / 60);
  let seconds = props.time / 1000 - hours * 3600 - minutes * 60;
  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}

  return (
    <div>
      <h1>
          
        {hours}:{minutes}:{seconds}
      </h1>
      <p>hours minutes seconds</p>
    </div>
  );
}
