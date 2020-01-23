export function productList(){
    return {
        type:'PRODUCT_LIST',
        payload:[
            {id:1,name:'Bread'},
            {id:2,name:'Jam'},
            {id:3,name:'Salt'}
        ]
    }
}