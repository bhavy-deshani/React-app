import React, { useState } from 'react'

const UsestateHook = () => {
    const [statedata,setStatedata] = useState("This is the default state value")
    const [koipannaam,methodforsetstate] = useState("0")
    let data = "Something"
    let bhavya = () => {
        data = "new val"
        setStatedata("data")
    }
    return (
    <>
       <p>What is useState ?<br />
        The useState hook is used for storing variables that are part of your application's state and will change as the user interacts with your website.</p>
      <br />
      simple variable data : {data}
      <br />
      statedata : {statedata}
      <br />
      <button onClick={bhavya}>click</button>
    </>
  )

  }
export default UsestateHook
