import data from './words.json'
import axios from 'axios';

export const getServerData = async() => {
    const url_word = process.env.API_MW_URL;
    const api_key_word = process.env.API_MW_KEY;

    const url_quote = process.env.API_QUOTE_URL;
    const api_key_quote = process.env.API_QUOTE_KEY;

    const date = new Date();
    const day = date.getDay();
    const words = data.words;
    const word = words[day];

    const options1 = {
        method: 'GET',
        url: `${url_word}/${word}`,
        params: {key: api_key_word},
    };

    const options2 = {
        method: 'GET',
        url: url_quote,
        params: {category: 'inspirational'},
        headers: {
          'x-rapidapi-key': api_key_quote
        }
      };

    try {
        const response1 = await axios.request(options1);
        const response2 = await axios.request(options2);
        const data1 = [...response1.data];
        const data2 = [...response2.data];
        const data = [data1[0], data2[0]];
        return data;
    } catch (error) {
        console.error(error);
        return {};
    }
}