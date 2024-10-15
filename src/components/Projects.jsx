import React from "react";
import Project from "./Project";

export default function Projects(){
  return (
    <div className="container projects">
        <h3>Projects</h3>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <Project source="./images/vsta.png" url="https://vstda-2909a6c5790a.herokuapp.com/" git="https://github.com/hotskoj/vsta" content="A simple to-do app allows users to easily create, edit, delete, and manage their tasks in an intuitive interface."/>
            <Project source="./images/top-spots.png" url="https://san-diego-top-spots-e3ee28eebcd7.herokuapp.com/" git="https://github.com/hotskoj/react-san-diego-top-spots" content="An app that displays the top 30 spots in San Diego, complete with descriptions and directions."/>
            <Project source="./images/change-calculator.png" url="https://change-calculator-8eb2892947c3.herokuapp.com/" git="https://github.com/hotskoj/vite-change-calculator" content="An app that calculates change to be tendered in specific bill and coin denominations based on the total cost and payment received."/>
        </div>
    </div>
  )
}