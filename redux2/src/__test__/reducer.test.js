import reducer from '../reducer';

describe('Reducer Testing',()=>{
    it('should return initial state',() => {
        expect(JSON.stringify(reducer(undefined,{}))).toEqual(
            JSON.stringify({
                articles:{},
                gallery:{}
            })
        )
    })

    it('render test for action GET_LATEST',() => {
        let state={
            articles:[],
            gallery:[]
        }

        state= reducer(state,{
            action:'GET_LATEST'
        });

        expect(state).toEqual({
            articles:[],
            gallery:[]
        })
    })
})