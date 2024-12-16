import logo from '../../../../public/images/logo.png'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className="container mx-auto">
      <nav className="pt-5 flex justify-between items-center">
        <Link to={'/'}><img className='w-[75px] h-[75px] rounded-full' src={logo} alt="Logo" /></Link>
        <ul className='flex items-center gap-10 capitalize text-xl font-bold text-[#03346E] border-2 border-solid border-[#092635] px-5 py-2 rounded-xl'>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#FF6600] relative transition-all" : "text-[#091057] hover:text-[#219B9D] transition-all"}>home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-[#FF6600] relative transition-all" : "text-[#091057] hover:text-[#219B9D] transition-all"}>about</NavLink></li>
        </ul>
        <Link className='text-xl font-black bg-[#AB4459] text-white px-5 py-3 rounded-xl border-2 border-solid hover:border-[#9B3922] hover:bg-transparent hover:text-[#3565b1] transition-all uppercase active:scale-[1.1]' to={'#contact'}>hire me</Link>
      </nav>
    </div>
    </>
  )
}
export default Navbar