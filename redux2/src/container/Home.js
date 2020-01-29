import React, {Component} from 'react';
import { connect } from 'react-redux';
import {articleNews} from '../actions';
import { bindActionCreators} from 'redux';

import ArticleNews from '../component/Home/ArticleNews';

class Home extends Component {
    componentDidMount(){
        this.props.articleNews();
    }
    render(){
        return(
            <div>
                <ArticleNews article={this.props.myarticle.articles}/>
            </div>
        )
    }
}


// Recive props
function mapStateToProps(state){
    return{
        myarticle:state.articles
    }
}
// Dispatch actions
function mapDispatchToProps(dispatch){
    return bindActionCreators({articleNews}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps) (Home);