import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route,Link} from 'react-router-dom';

import Home from './component/home';
import Post from './component/post';
import Profile from './component/profile';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/post">Post</Link>
                <Link to="/profile">Profile</Link>
            </header>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/post" component={Post}></Route>
            <Route exact path="/profile" component={Profile}></Route>
        </div>
    </BrowserRouter>
    ,document.getElementById('root')
)

