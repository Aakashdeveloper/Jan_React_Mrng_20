import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import {postNews  } from '../actions';

class Forms extends Component {
    constructor(){
        super()

        this.state={
            title:'',
            body:''
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(event){
        this.setState({title:event.target.value})
    }

    handleChangeBody(event){
        this.setState({body:event.target.value})
    }

    handleSubmit(){
        this.props.postNews(
            this.state.title,
            this.state.body
        );

        alert('submitted')

    }
    render(){
        return(
            <div className="container">
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control"
                    value={this.state.title}
                    onChange={this.handleChangeTitle}
                    id="title"/>
                </div>
                <div className="form-group">
                    <label>Body</label>
                    <input type="text" className="form-control"
                    value={this.state.body}
                    onChange={this.handleChangeBody}
                    id="body"/>
                </div>

                <input type="file"></input>
                <button type="submit" className="btn btn-success"
                onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({postNews},dispatch)
}
export default connect(null,mapDispatchToProps)(Forms);