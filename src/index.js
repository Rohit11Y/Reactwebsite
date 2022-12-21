import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Category from './pages/Category';
import Faq from './pages/Faq';
import Help from './pages/Help';
import Contact from './pages/Contact';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index path="/" element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='category' element={<Category />} />
                <Route path='faq' element={<Faq />} />
                <Route path='help' element={<Help />} />
                <Route path='contact' element={<Contact />} />
                
            </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
