import React, { useEffect, useRef, useState } from 'react'
import FunctionalUseImpChild from './FunctionalUseImpChild';

const FunctionalCompoUseImp = () => {
    const [ele,setEle] = useState();
    // const childRef = useRef();

    const parentFunction = async (data) => {
        console.log("called parentFunction upfate",data);
        // await setEle(data)
    }
  return (
    <>
      {JSON.stringify(ele)}
      <FunctionalUseImpChild onAddHandler={parentFunction} />
    </>
  )
}

export default FunctionalCompoUseImp
