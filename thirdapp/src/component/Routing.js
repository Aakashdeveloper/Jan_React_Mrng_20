import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import ArtistDetails from './ArtistDetails'

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/artists/:id" component={ArtistDetails}/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;