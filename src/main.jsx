import {createRoot} from 'react-dom/client';
import Api from './api/Api.jsx';
import 'bulma/css/bulma.min.css';
import './index.css';

createRoot(document.getElementById('root')).render(
    <Api/>
);
