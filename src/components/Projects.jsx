import React from "react";
import Project from "./Project";

export default function Projects(){
  return (
    <div className="container projects">
        <h3>Projects</h3>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <Project source="./images/vsta.png" url="https://github.com/hotskoj/vsta" content="A simple todo app. Users are able to add, edit, delete, and group by priority their todos."/>
            <Project source="./images/top-spots.png" url="https://github.com/hotskoj/react-san-diego-top-spots" content="San Diego Top Spots. The website pulls from an API to list the 30 top spots in San Diego with directions."/>
            <Project source="./images/change-calculator.png" url="https://github.com/hotskoj/react-change-calculator" content="Change Calculator. Calculates change by denomination based on amount owed and amount received."/>
        </div>
    </div>
  )
}