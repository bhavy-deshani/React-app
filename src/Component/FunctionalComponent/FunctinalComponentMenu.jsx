import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const FunctinalComponentMenu = () => {
    return (
        <>
            <div className='row'>
                <div className='col-6 offset-7'>
                    <ul>
                        <li><Link to="FunctionalComponentIntro">Functional Compo Intro</Link></li>
                        <li><Link to="UsestateHook">Usestate Hook</Link></li>
                        <li><Link to="UseEffectHook">UseEffect Hook</Link></li>
                        <li><Link to="FunctionalCompoUseLayoutEffect">Functional Compo UseLayoutEffect</Link></li>

                    </ul>

                </div>

            </div>
            <Outlet />
        </>
    )
}

export default FunctinalComponentMenu
