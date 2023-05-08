import React, { useEffect, useLayoutEffect, useState } from 'react'

const FunctionalCompoUseLayoutEffect = () => {
    const [mystate, gmete] = useState(0)
    const [mySecondState, setMySecondState] = useState(0)
    useEffect(() => {
        console.log("called userffect 1st");
        return (() => {
            console.log("called return 1st");
        })
    })
    useLayoutEffect(() => {
        console.log("called useeffect");
    })
    const anything = () => {
        console.log("bnt click");
        gmete(mystate + 1)
    }
    return (
        <>
            <div className="container">
                <div className="row my-3">
                    <div className="col">
                        <p>useEffect is a React Hook that lets you synchronize a component with an external system.</p>
                        {/* <button onClick={anything()}>Click</button> */}
                        <button onClick={anything}>Click {mystate}</button>
                        <button onClick={() => { setMySecondState(mySecondState + 2) }}>Click {mySecondState}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FunctionalCompoUseLayoutEffect
