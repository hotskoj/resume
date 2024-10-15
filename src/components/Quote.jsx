import React, {useState, useEffect} from "react";
import axios from 'axios';

export default function Quote({data}) {
    const quote = JSON.parse(JSON.stringify(data[1].quote));
    const author = JSON.parse(JSON.stringify(data[1].author));

    return (
        <div className="row quote">
            <div className="d-flex flex-column justify-content-center">
                <h3>Inspirational Quote</h3>
                <div className="container">
                    <p>{quote} - {author}</p> 
                </div>
            </div>
        </div>
    )

}