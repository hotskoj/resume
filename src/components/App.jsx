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
import Footer from "./Footer";

export default function App({data}){

{/* <div>
  <Header/>
  <Intro/>
  <Word data={data}/>
  <Projects/>
  <Line/>
  <Skills/>
  <Education/>
  <Quote data={data}/>
  <Line/>
  <Hobbies/>
  <Footer/>
</div> */}

  return (
    <div>
      <Header/>
      <Intro/>
      <Word data={data}/>
      <Projects/>
      <Line/>
      <Skills/>
      <Education/>
      <Quote data={data}/>
      <Line/>
      <Hobbies/>
      <Footer/>
    </div>
  )
}
