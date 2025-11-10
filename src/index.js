//CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const tesla = cars[0];
const teslaTopSpeed = cars[0].speedStats.topSpeed;
const teslaTopColour = cars[0].coloursByPopularity[0];

const honda = cars[1];
const hondaTopSpeed = cars[1].speedStats.topSpeed;
const hondaTopColour = cars[1].coloursByPopularity[0];



const 
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
