import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


class NewsDetails extends Component {
    render(){
        return(
            <div>
                <h1>News Details</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        details:state.articles
    }
}

NewsDetails.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(NewsDetails);