import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default class ClassComponentMenu extends Component {
  render() {
    
    return (
      <>
        <div>
          <ul>
            <li className='m-4'><Link to="WelcomeTOClassComponen">Class Compo Intro</Link></li>
            <li className='m-4'><Link to="jsxclasscomponent">JAX Componet</Link></li>
            <li className='m-4'><Link to="ComponentForCard">props</Link></li>
            <li className='m-4'><Link to="StateClasscomponent">State</Link></li>
            <li className='m-4'><Link to="LifeCycleInClassComponent">LifeCycleIn</Link></li>
            <li className='m-4'><Link to="ControlledCompoInClassComponent">Controlled</Link></li>
            <li className='m-4'><Link to="UnControlledCompoInClassComponent">UnControlled</Link></li>
            <li className='m-4'><Link to="SpreadVsRestComponent">Spread Vs React</Link></li>
            <li className='m-4'><Link to="ClassCompoCompositionVsInheritance">Composition vs Inheritance</Link></li>
            <li className='m-4'><Link to="ArrayAccessThrouProps">Array </Link></li>

          </ul>
        </div>
        <Outlet />

      </>
    )
  }
}
