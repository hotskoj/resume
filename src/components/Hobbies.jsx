import React from "react";

export default function Hobbies() {
    return (
        <div className="row hobbies">
            <div className="d-flex flex-column justify-content-center align">
                <h3>Hobbies</h3>
                <div className="row justify-content-center">
                    <div className="col-lg-3">
                        <img id="pup-pic" src="./images/walter.jpeg" alt="Walter Pic"/>
                    </div>
                    <div className="col-lg-6">
                        <p className="py-2">Training my two dogs, Walter and Terry. ❤️</p>
                        <p className="py-2">Playing the piano. I'm currently working on memorizing 'Moon River' by Johnny Mercer. My favorite rendition is by Louis Armstrong—definitely worth a listen! 🎵</p>
                        <p className="py-2">Learning spanish. I'm using a technique called Language Immersion, and I'm approaching 300 hours of input. I highly recommend it if you're interested in learning a new language. 💬</p>
                    </div>
                    <div className="col-lg-3">
                        <img id="pup-pic" src="./images/terry.jpeg" alt="Terry Pic"/>
                    </div>
                </div>
            </div>
        </div>
    )
}