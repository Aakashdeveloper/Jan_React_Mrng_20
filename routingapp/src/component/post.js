import React from 'react';
import { Link } from 'react-router-dom';

const Post =() => {
    return(
        <div className="panel panel-success">
            <div className="panel-heading">
                <h2>Post Page</h2>
            </div>
            <div className="panel-body">
                <p>
                lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pagemaker including versions of lorem ipsum
                </p>
                <h3>JavaScript</h3>
                <Link to="/post/Javascript">Details</Link>
                <h3>Node</h3>
                <Link to="/post/Node">Node</Link>
                <h3>React</h3>
                <Link to="/post/React">React</Link>
                <h3>GoLang</h3>
                <Link to="/post/Golang">Golang</Link>
            </div>
           
        </div>
    )
}

export default Post