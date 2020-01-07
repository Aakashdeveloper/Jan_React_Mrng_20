import React, {Component} from 'react';
import './Header.css';

class Header extends Component {

    constructor(){
        super()

        this.state={
            title:'React News App'
        }

    }

    render(){
        return(
            <header>
                <div className="logo">
                    {this.state.title}
                </div>
                <center>
                <input/>
                </center>
            </header>
        ) 
    }
}

export default Header;