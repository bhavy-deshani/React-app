import React, { useEffect, useRef, useState } from 'react'
import FunctionalUseImpChild from './FunctionalUseImpChild';

const FunctionalCompoUseImp = () => {
  const [ele, setEle] = useState();
  const childRef = useRef();

  useEffect(() => {
  }, [])
  const parentFunction = async (data) => {
    console.log("called parentFunction upfate", data);
    await setEle(data)
  }
  return (
    <>
      {JSON.stringify(ele)}
      <table>
        <thead>
          <tr>
            <td>col-1</td>
            <td>col-2</td>
          </tr>
        </thead>
        {(ele && ele.length) ?
          <tbody><tr>
            <td>{ele[0]}</td>
            <td>{ele[1]}</td>
          </tr>
            <tr>
              <td>{ele[2]}</td>
              <td>{ele[3]}</td>
            </tr></tbody> : <tbody><tr><td colSpan={2}>No Data Found</td></tr></tbody>}
      </table>

      <button className='btn btn-primary mt-2' onClick={() => childRef.current.getAlert()}>Shuffle</button>


      <FunctionalUseImpChild onAddHandler={parentFunction} ref={childRef} />
    </>
  )
}

export default FunctionalCompoUseImp
