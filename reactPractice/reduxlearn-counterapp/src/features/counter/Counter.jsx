import {React, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, 
         decrement,
         reset,
         incrementByAmount } from './counterSlice'

export const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch()

    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;

  return (
    <div>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <div>
            <input type="text" onChange={e => setIncrementAmount(e.target.value)} />
            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>AddAmount</button>
            </div>
        </div>
    </div>
  )
}
