const url = 'http://localhost:8900'

export function articleNews(){
    const output = fetch(`${url}/articles?_end=3`,{method:'GET'})
        .then(response => response.json())

    return{
        type:'GET_ARTICLE',
        payload:output
    }
}