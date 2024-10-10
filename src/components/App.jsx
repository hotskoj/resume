import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Projects from "./Projects";
import Word from "./Word";
import Education from "./Education";
import Skills from "./Skills";
import Quote from "./Quote";
import Hobbies from "./Hobbies";
import Line from "./Line";

export default function App(){
  return (
    <div>
        <Header/>
        <Intro/>
        <Word/>
        <Projects/>
        <Line/>
        <Skills/>
        <Education/>
        <Quote/>
        <Line/>
        <Hobbies/>
    </div>
  )
}
