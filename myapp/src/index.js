import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header'

const App = () => {
    return(
        <div>
            <Header/>
            <h1>This is React App</h1>
            <h2>This is my page</h2>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));