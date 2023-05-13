import React, { useCallback, useState } from 'react'


const funccount = new Set();
const FunctionalCompoUseCallback = () => {
    const [count, setcount] = useState(0)
    const [numbar, setNumber] = useState(0)

    const incrementCounter = useCallback(() => {
        setcount(count + 1);
      }, [count]);

      const decrementCounter = useCallback(() => {
        setcount(count - 1)
      },[count])

      const incrementNumber =useCallback(() => {
        setNumber(numbar + 1)
      },[numbar])

      funccount.add(incrementCounter);
      funccount.add(decrementCounter);
      funccount.add(incrementNumber);
      console.log(funccount.size);
      console.log(funccount)
  return (
    <>
        <div className='mb-5'>
            Count: {count} <br />
            Number: {numbar} <br />
            <button onClick={incrementCounter}>Increase counter</button>
            <button onClick={decrementCounter}>Decrease Counter</button>
            <button onClick={incrementNumber}>increase number</button>
        </div>
    </>
  )
}

export default FunctionalCompoUseCallback