import React, {useState, useEffect} from "react";
import axios from 'axios';

export default function Quote() {
    const url_quote = process.env.API_QUOTE_URL;
    const api_key = process.env.API_QUOTE_KEY;

    const [quote, setQuote] = useState({quote: "", author: "", category: ""});

    const options = {
        method: 'GET',
        url: url_quote,
        params: {category: 'inspirational'},
        headers: {
          'x-rapidapi-key': api_key
        }
      };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.request(options);
            setQuote(response.data[0]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="row quote">
            <div className="d-flex flex-column justify-content-center">
                <h3>Inspirational Quote</h3>
                <div className="container">
                    <p>{quote.quote} - {quote.author}</p> 
                </div>
            </div>
        </div>
    )

}