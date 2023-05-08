import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    let data = "Something"
    const [statedata, setStatedata] = useState("something")
    const [count, setcount] = useState(0)
    const [width, setwidth] = useState(window.innerWidth)

    useEffect(() => {
        console.log("useEffect called");
        fetch('https://jsonplaceholder.typicode.com/todos   ')
            .then(response => response.json())
            .then(json => console.log(json))
    }, [statedata, count])
    useEffect(() => {
        window.addEventListener("resize", () => { setwidth(() => window.innerWidth) })
        return () => { window.removeEventListener("resize", () => { setwidth(() => window.innerWidth) }) }
    })
    let btnclick = () => {
        data = "checking"
        setStatedata(data)
    }

    return (
        <>
            Simple variable data : {data}
            <br />
            statedata : {statedata}
            <br />
            <button onClick={btnclick}>click</button>
            <br />
            <button onClick={() => { (count <= 0) ? setcount(0) : setcount(count - 1) }}>decrement</button>
            {count}
            <button onClick={() => { setcount(count + 1) }}>increment</button>
            <br />
            <h3> the size of the window : {width}</h3>
        </>
    )
}

export default UseEffectHook
