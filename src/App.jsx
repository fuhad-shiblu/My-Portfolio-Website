import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import PrimaryLayout from './assets/Layout/PrimaryLayout'
import Homepage from './assets/Pages/Homepage'
import AboutPage from './assets/Pages/AboutPage'
function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<PrimaryLayout/>}>
          <Route index element={<Homepage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Route>
      </Route>
    )
  )
  return (
    <>
    <RouterProvider router={myRoute}/>
    </>
  )
}
export default App