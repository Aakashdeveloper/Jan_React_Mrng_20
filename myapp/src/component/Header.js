import React, {Component} from 'react';
import './Header.css';

class Header extends Component {

    constructor(){
        super()

        this.state={
            title:'React News App',
            keyword:'User Text Here'
        }

    }

    inputChange(event){
        console.log(event.target.value);
        this.setState({"keyword":event.target.value?event.target.value:"User Text here"})
        
        this.props.userText(event.target.value)
    }

    render(){
        return(
            <header>
                <div className="logo"
                onClick={()=>console.log("Clicked>>>>")}>
                    {this.state.title}
                </div>
                <center>
                <input onChange={this.inputChange.bind(this)}/>
                <p>{this.state.keyword}</p>
                </center>
            </header>
        ) 
    }
}

export default Header;