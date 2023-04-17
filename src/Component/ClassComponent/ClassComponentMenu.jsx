import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default class ClassComponentMenu extends Component {
  render() {
    return (
      <>
        <div>
          <ul>
            <li><Link to="WelcomeTOClassComponen">Class Compo Intro</Link></li>
            <li><Link to="jsxclasscomponent">JAX Componet</Link></li>
            <li><Link to="ComponentForCard">props</Link></li>
            <li><Link to="StateClasscomponent">State</Link></li>
            <li><Link to="LifeCycleInClassComponent">LifeCycleIn</Link></li>
            <li><Link to="ControlledCompoInClassComponent">Controlled</Link></li>
            <li><Link to="UnControlledCompoInClassComponent">UnControlled</Link></li>
            
          </ul>
        </div>
        <Outlet />

      </>
    )
  }
}
