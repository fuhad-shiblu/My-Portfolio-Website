import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"

const PrimaryLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}
export default PrimaryLayout