import { hydrateRoot } from 'react-dom/client';
 
import App from './components/App';

let data;

if (typeof window !== 'undefined') {
      data = window.__data__;
}
 
hydrateRoot(document.getElementById('app'), <App data={data} />);