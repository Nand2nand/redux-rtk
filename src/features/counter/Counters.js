import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement, reset,incrementByAmount } from './counterSlice';
const Counters = () => {
    const [incrementAmount,setIncrementAmount] = useState(0);
    const count = useSelector((store)=>store.counter.count);
    const dispatch = useDispatch();

    const addValue = Number(incrementAmount) || 0;
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset())
    }
  return (
    <section>
       <p>{count}</p>
        <div>
            <button onClick={()=>dispatch(increment()) }>
                +
            </button>
            <button onClick={()=>dispatch(decrement()) } >
                -
            </button>
            <input 
            type='text'
            value={incrementAmount}
            onChange={(e)=> setIncrementAmount(e.target.value)}
            />
        </div>
        <div>
            <button onClick={()=>dispatch(incrementByAmount(addValue))}>Add Amount</button>
            <button onClick={resetAll}>Reset Amount</button>

        </div>
    </section>
  )
}

export default Counters
