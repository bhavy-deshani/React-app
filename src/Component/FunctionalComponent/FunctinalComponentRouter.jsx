import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import FunctinalComponentMenu from './FunctinalComponentMenu'
import FunctionalComponentIntro from './FunctionalComponentIntro'
import UsestateHook from './01UsestateHook'

const FunctinalComponentRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<FunctinalComponentMenu />} >
                    <Route path='FunctionalComponentIntro' element={<FunctionalComponentIntro />} />
                    <Route path='UsestateHook' element={<UsestateHook />} />

                </Route>
            </Routes>
        </>
    )
}
    export default FunctinalComponentRouter
