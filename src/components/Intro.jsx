import React from "react";

export default function Intro(){

    return (
        <div className="row intro">
            <div className="d-flex flex-column align-items-center">
                <img id="profile-pic" src="./images/profilePic.jpeg" alt="Profile Pic"/>
                <div className="container">
                    <p className="pt-5">Welcome to my portfolio! I’m Jessica, a software developer and U.S. Air Force veteran. Here, you can explore my resume and projects that showcase my skills and passion for creating innovative solutions. Feel free to reach out if you’d like to connect or collaborate!</p>
                    <div>
                        <a href= "mailto: jessianne001@email.com"> jessianne001@email.com</a>   |   <a target="_blank" href= "https://www.linkedin.com/in/jessica-hotsko-a487352a3/">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    )
}