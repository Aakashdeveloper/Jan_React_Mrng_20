import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import NewsList from './component/NewsList';
import JSON from './db.json';

class App extends Component{

    constructor(){
        super()

        this.state={
            news:JSON
        }
    }


    render(){
        return(
            <div>
                <Header/>
                <NewsList newsData={this.state.news}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

