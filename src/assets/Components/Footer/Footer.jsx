import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
     <footer className="w-full text-center p-5 text-md md:text-xl font-semibold text-black mt-10">&#169;{new Date().getFullYear()}, <Link className="font-black hover:underline capitalize text-[#006A67]" to={'https://github.com/fuhad-shiblu'} target="_blank">fuhad hasan shiblu</Link> | All Rights Reserved</footer>
    </>
  )
}
export default Footer