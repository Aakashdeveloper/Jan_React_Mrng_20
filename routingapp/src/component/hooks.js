import React,{useState, useEffect} from 'react';
import axios from 'axios';

const url = 'http://localhost:8900/artists';
function HooksComp(){
    
    const [title] = useState('React Hooks Page');
    const [counter, setCounter] = useState(1);
    const [artist, setArtist] = useState(0);

    /*useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setArtist(data)
            })
    })*/
    
    useEffect(() => {
        axios.get(url)
            .then((res) => {
                const mydata = res.data;
                this.setArtist(mydata)
            })
    })

    return(
        <div>
            <h1>{title}</h1>
            <h2>Count: {counter}</h2>
            <div className="btn btn-info"
            onClick={()=>{setCounter(counter+1)}}>
                Click
            </div>
        </div>
    )

}


export default HooksComp;