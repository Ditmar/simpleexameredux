import { useState } from "react";

const ExampleRedux = () => {
  const [counter, setCounter] = useState(0);
  const handlerPlus = () => {
    setCounter(counter +1);
  }
  const handlerSubstract = () => {
    setCounter(counter -1);
  }
  return <div>
    <button onClick={handlerPlus}>+1</button> 
        counter {counter}
    <button onClick={handlerSubstract}>-1</button>
    </div> 
}
export default ExampleRedux;