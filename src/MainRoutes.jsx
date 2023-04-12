import React, { Component, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Contac from './Contac'
import Example from './Example'
import Errorpage from './Errorpage'



const ClassComponent = React.lazy(() => import('./Component/ClassComponent/ClassRoute'))
 const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Errorpage /> ,
    },
    {
        path: "/Contac",
        element: <Contac />,
    },
    {
        path: "/Example",
        element: <Example />,
        children: [
            {
                path:"classcomponent/*",
                element:<Suspense fallback={<h2>Loading....</h2>}><ClassComponent /></Suspense>
            },
        ],
    },
    
])
export default MainRoutes;
