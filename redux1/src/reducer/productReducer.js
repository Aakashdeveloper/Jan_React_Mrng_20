export default function(state=null, action){
    switch(action.type){
        case 'PRODUCT_LIST':
            return action.payload
        default:
            return state
    }
}