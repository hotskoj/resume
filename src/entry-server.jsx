import { renderToString } from 'react-dom/server';
 
import App from './components/App';
 
export const render = (data) => {
    return renderToString(<App data={data} />);
};