import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider } from 'react-redux';
import { store } from './Redux/store.jsx'

AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
    <App />
    </Provider>
    

)