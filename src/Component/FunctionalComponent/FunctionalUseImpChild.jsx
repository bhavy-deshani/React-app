import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'

const FunctionalUseImpChild = forwardRef( (props,ref) => {
  const [ele, setEle] =useState(0);
  const [ele2, setEle2] =useState(0);

  useImperativeHandle(ref, () => ({
    getAlert() {
      console.log("called");
    let suffRes = shuffle(arr)
    setEle(suffRes [0])
    suffRes.shift()
    }
  }))
  // props.onAddHandler(suffRes)

  useEffect(() => {
    let suffRes = shuffle(arr)
    console.log(suffRes);
    setEle(suffRes[0])
    setEle2(suffRes[1])
    suffRes.shift()
    suffRes.shift()
    console.log(suffRes);
    props.onAddHandler(suffRes)
  },[ele])
  
  const arr = [1,2,3,4,5,6]
    const shuffle = (array) => {
      console.log("called inside shuffle");
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array;
  };


  return (
    <>
        <h3>Child Component</h3>
        <table>
            <tr>
                <td>{ele}</td>
                <td>{ele2}</td>
            </tr>
        </table>
    </>
  )
})

export default FunctionalUseImpChild
