import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import FunctinalComponentMenu from './FunctinalComponentMenu'
import FunctionalComponentIntro from './FunctionalComponentIntro'
import UsestateHook from './01UsestateHook'
import UseEffectHook from './02UseEffectHook'
import FunctionalCompoUseLayoutEffect from './FunctionalCompoUseLayoutEffect'
import StyledCompoExample from './StyledCompoExample'
import FunctionalCompoUseMemo from './FunctionalCompoUseMemo'

const FunctinalComponentRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<FunctinalComponentMenu />} >
                    <Route path='FunctionalComponentIntro' element={<FunctionalComponentIntro />} />
                    <Route path='UsestateHook' element={<UsestateHook />} />
                    <Route path='UseEffectHook' element={<UseEffectHook />} />
                    <Route path='FunctionalCompoUseLayoutEffect' element={<FunctionalCompoUseLayoutEffect />} />
                    <Route path='StyledCompoExample' element={<StyledCompoExample />} />
                    <Route path='FunctionalCompoUseMemo' element={<FunctionalCompoUseMemo />} />

                </Route>
            </Routes>
        </>
    )
}
    export default FunctinalComponentRouter
