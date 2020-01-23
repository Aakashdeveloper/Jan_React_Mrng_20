import React,{Component} from 'react';
import * as actions from '../actions';
import { connect }from 'react-redux';

class App extends Component {

    componentDidMount(){
        this.props.productList()
    }

    render(){
        return(
            <div>
                <h1>Redux App</h1>
            </div>
        )
    }
   
}

function mapStateToProps(state){
    console.log(state);
    return{
        data:state.product
    }
}

export default connect(mapStateToProps,actions)(App);