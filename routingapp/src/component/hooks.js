import React,{useState} from 'react';

function HooksComp(){
    
    const [title] = useState('React Hooks Page');
    const [counter, setCounter] = useState(1)

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