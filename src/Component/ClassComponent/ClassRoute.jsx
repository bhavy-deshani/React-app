import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import ClassComponentMenu from './ClassComponentMenu'
import WelcomeTOClassComponent from './WelcomeTOClassComponen'
import JSXClassComponent from './JSXClassComponent'
import ComponentForCard from './ComponentForCard'
import StateClasscomponent from './StateClasscomponent'
import LifeCycleInClassComponent from './LifeCycleInClassComponent'
import ControlledCompoInClassComponent from './ControlledCompoInClassComponent'
import UnControlledCompoInClassComponent from './UnControlledCompoInClassComponent'
import SpreadVsRestComponent from './SpreadVsRestComponent'
import ClassCompoCompositionVsInheritance from './ClassCompoCompositionVsInheritance'
import ArrayAccessThrouProps from './ArrayAccessThrouProps'

export default class ClassRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<ClassComponentMenu />} >
                        <Route path="WelcomeTOClassComponen" element={<WelcomeTOClassComponent />} />
                        <Route path="JSXClassComponent" element={<JSXClassComponent />} />
                        <Route path="ComponentForCard" element={<ComponentForCard />} />
                        <Route path="StateClasscomponent" element={<StateClasscomponent />} />
                        <Route path="LifeCycleInClassComponent" element={<LifeCycleInClassComponent />} />
                        <Route path="ControlledCompoInClassComponent" element={<ControlledCompoInClassComponent />} />
                        <Route path="UnControlledCompoInClassComponent" element={<UnControlledCompoInClassComponent />} />
                        <Route path="SpreadVsRestComponent" element={<SpreadVsRestComponent />} />
                        <Route path="ClassCompoCompositionVsInheritance" element={<ClassCompoCompositionVsInheritance />} />
                        <Route path="ArrayAccessThrouProps" element={<ArrayAccessThrouProps />} />
                       
                    </Route>
                </Routes>
            </>
        )
    }
}
