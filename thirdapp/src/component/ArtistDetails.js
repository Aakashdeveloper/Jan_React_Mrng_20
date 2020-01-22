import React , {Component} from 'react';
import Header from './Header';
import AlbumList from './albumList';

const url = 'http://localhost:8900/artists';

class ArtistDetails extends Component {
    constructor(){
        super()

        this.state={
            details:''
        }
    }

    render(){
        return(
            <React.Fragment>
                <Header/>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{background:`url('/images/covers/${this.state.details.cover}.jpg')`}}></span>
                        <h3>{this.state.details.name}</h3>
                        <div className="bio_text">
                            {this.state.details.bio}
                        </div>
                        <AlbumList albumd={this.state.details.albums}/>
                    </div>

                </div>
            </React.Fragment>
        )
    }

    componentDidMount(){
        fetch(`${url}/${this.props.match.params.id}`,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                details:data
            })
        })
    }
}

export default ArtistDetails;