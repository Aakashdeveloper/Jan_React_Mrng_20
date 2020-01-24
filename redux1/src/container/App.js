import React,{Component} from 'react';
import * as actions from '../actions';
import { connect }from 'react-redux';
import List from '../component/list';

class App extends Component {

    componentDidMount(){
        this.props.productList()
    }


    render(){
        return(
            <div>
                <h1>Redux App</h1>
                <List prodlist={this.props.data} />
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