import { useReducer } from "react";

const reduce = (state, action) => {
    switch(action.type) {
        case 'increment': {
            return  {
                count: state.count + action.payload
            }
        }
        case 'decrement' : {
            return {
                count: state.count - action.payload
            }
        }
        default: 
         throw new Error();
    }
}
const counter = {count: 0}
const ExampleRedux2  = () => {
    const [state, dispatch] = useReducer(reduce, counter);
    const handlerPlus = () => {
        const action = {
            type: 'increment',
            payload: 1
        }
        dispatch(action);
    }
    const handlerSubstract = () => {
        const action = {
            type: 'decrement',
            payload: 1
        }
        dispatch(action);
    }
    return <div>
    <button onClick={handlerPlus}>+1</button> 
        {state.count}
    <button onClick={handlerSubstract}>-1</button>
    </div> 
}
export default ExampleRedux2;