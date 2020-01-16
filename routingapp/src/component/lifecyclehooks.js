//Get default State
//Set Initial State
//Before get created
//Render  JSX
//After get created

import React, {Component} from 'react';

class LifeCycle extends Component{

    //1. Get default State
    constructor(props){
        console.log('Get Default State')
        super(props);

        //2. Set Initial State
        this.state={
            title:'Lifecycle'
        }
    }

    //3. Before get created
    componentWillMount(){
        console.log('componentWillMount')
    }

    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate')
        if(nextState.title === this.state.title){
            return false
        }else{
            return true;
        }
    }

    //4. Render  JSX
    render(){
        console.log('Render JSX')
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div className="btn btn-success"
                onClick={() => {this.setState({title:'SomeThing Else'})}}>
                    Click me
                </div>
            </div>
        )
    }

    //5. //After get created
    componentDidMount(){
        console.log('componentDidMount')
    }


}

export default LifeCycle