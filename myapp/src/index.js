import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import NewsList from './component/NewsList';
import JSON from './db.json';

class App extends Component{

    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    filterNews(keyword){
        const output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })
        this.setState({filtered:output})
    }


    render(){
        return(
            <div>
                <Header userText={(userInput) => {this.filterNews(userInput)}}/>
                <NewsList newsData={this.state.filtered}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

