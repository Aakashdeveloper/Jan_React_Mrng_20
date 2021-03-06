const url = 'http://localhost:8900'

export function articleNews(){
    const output = fetch(`${url}/articles?_start=3&_end=10`,{method:'GET'})
        .then(response => response.json())

    return{
        type:'GET_ARTICLE',
        payload:output
    }
}

export function latestNewsA(){
    const output = fetch(`${url}/articles?_end=3`,{method:'GET'})
        .then(response => response.json())

    return{
        type:'GET_LATEST',
        payload:output
    }
}

export function galleryNewsA(){
    const output = fetch(`${url}/galleries?_limit=2`,{method:'GET'})
        .then(response => response.json())

    return{
        type:'GET_GALLERY',
        payload:output
    }
}

export function selectedNews(id){
    const output = fetch(`${url}/articles?id=${id}`,{method:'GET'})
    .then(response => response.json())

    return{
        type:'GET_SELECTED_NEWS',
        payload:output
    }
}

export function clearselectedNews(id){

    return{
        type:'CLEAR_SELECTED_NEWS',
        payload:[]
    }
}


export function handleLikes(array,id){
    const output =fetch(`${url}/articles/${id}`,
    {
        method:'PATCH',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({likes:array})
    })
    .then(data => data.json()) 

    return{
        type:'HANDLE_LIKES',
        payload:output
    }
}

export function postNews(title,body){
    var random = Math.floor(Math.random()*1000)
    var data ={
        "id": random,
        "title": title,
       "body": body,
      "category": "Sports",
      "img": "2.jpg",
      "date": "21/21/1944",
      "author": "Mary Bottom",
      "views": 456,
      "likes": [
        65,
        12
      ]
    }

    fetch(`${url}/articles/`,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })

    .then((response) => response.json())
    return{
        type:'POST_NEWS',
        payload:''
    }
}