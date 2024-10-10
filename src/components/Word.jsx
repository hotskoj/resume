import React, { useEffect, useState} from 'react';
import axios from 'axios';
import data from '../words.json'


export default function Word(){
    const url = import.meta.env.VITE_API_MW_URL;
    const api_key = import.meta.env.VITE_API_MW_KEY;

    const date = new Date();
    const day = date.getDay();
    const words = data.words;
    const word = words[day];
    const [def, setDef] = useState("");
    const [type, setType] = useState("");


    const options = {
        method: 'GET',
        url: `${url}/${word}`,
        params: {key: api_key},
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.request(options);
            setType(response.data[0].fl);
            setDef(response.data[0].shortdef);
        } catch (error) {
            console.error(error);
        }
    };

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
