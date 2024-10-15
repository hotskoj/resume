import React from 'react';

export default function Word({data}) {
    let word = JSON.parse(JSON.stringify(data[0].meta.id));
    let type = JSON.parse(JSON.stringify(data[0].fl));
    let def = JSON.parse(JSON.stringify(data[0].shortdef));

    word = word.match(/([A-Za-z]+)/)[0];
    
    return (
        <div className="row wordOfDay">
            <div className="d-flex flex-column justify-content-center">
                <h3>Word of the Day</h3>
                <div className="container">
                    <p>{word.substring(0, 1).toUpperCase() + word.substring(1)}</p> 
                    <p>{`(${type}): ${def}`}</p>
                </div>
            </div>
        </div>
    );
};
