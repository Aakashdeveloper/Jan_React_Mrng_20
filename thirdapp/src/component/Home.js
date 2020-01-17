import React, {Component} from 'react';

const url = 'http://localhost:8900/artists';

class Home extends Component{
    constructor(){
        super()

        this.state={
            artists:''
        }
    }

    componentDidMount(){
        fetch(url,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data) => {console.log(data)})
    }


    render(){
        return(
            <div>
                <h1>Home page</h1>
            </div>
        )
    }
}

export default Home;