import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from '../container/Home'; 

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                    <Route exact path="/" component={Home}></Route>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;