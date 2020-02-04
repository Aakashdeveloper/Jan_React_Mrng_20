import React, {Component} from 'react';
import { connect } from 'react-redux';
import {articleNews,latestNewsA,galleryNewsA} from '../actions';
//import { bindActionCreators} from 'redux';
import PropTypes from 'prop-types'

import ArticleNews from '../component/Home/ArticleNews';
import LatestNews from '../component/Home/LatestNews';
import GalleryNews from '../component/Home/GalleryNews';
import Panel from '../component/Home/testcompnent'

class Home extends Component {
    componentDidMount(){
        this.props.dispatch(articleNews());
        this.props.dispatch(latestNewsA())
        this.props.dispatch(galleryNewsA())
    }
    render(){
        return(
            <div>
                <LatestNews latestD={this.props.myarticle.latestnews}/>
                <ArticleNews article={this.props.myarticle.articles}/>
                <GalleryNews galleryD={this.props.galleryS.galdata}/>
                <Panel/>
                
            </div>
        )
    }
}


// Recive props
function mapStateToProps(state){
    console.log(state)
    return{
        myarticle:state.articles,
        galleryS:state.gallery
    }
}

Home.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps) (Home);
/* Dispatch actions
function mapDispatchToProps(dispatch){
    return bindActionCreators({articleNews,latestNewsA}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps) (Home);
*/