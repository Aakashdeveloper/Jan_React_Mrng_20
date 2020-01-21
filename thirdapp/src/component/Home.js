import React, {Component} from 'react';
import Banner from './Banner';
import ArtistList from './ArtistList';

const url = 'http://localhost:8900/artists';

class Home extends Component{
    constructor(){
        super()

        this.state={
            artists:''
        }
    }

    render(){
        return(
            <div>
                <Banner></Banner>
                <ArtistList artistData={this.state.artists}></ArtistList>
            </div>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data) => this.setState({artists:data}))
    }
}

export default Home;