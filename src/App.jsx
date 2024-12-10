import React from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom"
import HomePage, {productLoader} from './pages/HomePage'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route index element={<HomePage/>} loader={productLoader}/>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App