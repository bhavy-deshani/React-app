import React, { useEffect } from 'react'

const FunctionalUseImpChild = (props) => {
    const arr = [1,2,3,4,5,6]
    useEffect(()=> {
        props.onAddHandler(arr)
    },[arr])


  return (
    <>
      
    </>
  )
}

export default FunctionalUseImpChild
