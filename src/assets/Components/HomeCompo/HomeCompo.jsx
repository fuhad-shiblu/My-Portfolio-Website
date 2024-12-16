import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import profile from '../../../../public/images/profile.jpg'
import { Link } from 'react-router-dom'
import resume from '../../../../public/resume/Fuhad-Hasan-Shiblu.pdf'
const HomeCompo = () => {
  return (
    <>
    <div className="container mx-auto">
     <section className="mt-[50px] flex flex-col md:flex-row items-center justify-center gap-10 md:justify-between md:items-center ml-5 mr-5">
          <div className="fuhadShiblu_txtArea flex flex-col items-center md:items-stretch gap-10 justify-center items-start">
               <h1 className='font-black text-4xl md:text-5xl text-[#C84B31]'>Hello <span className='block mt-1 mb-1 font-bold text-2xl md:text-3xl'>I'm</span><span className='capitalize font-semibold text-5xl md:text-6xl text-[#00005C]'>fuhad hasan shiblu</span></h1>
               <p className='text-2xl md:text-3xl uppercase font-black'>front-end web developer</p>
               <span className='w-full md:w-[750px] text-lg md:text-md text-justify'>I specialize in building dynamic, responsive user interfaces with expertise in JavaScript, HTML, and CSS. Combining creativity with technical precision, I deliver high-quality web solutions tailored to enhance user experiences and bring innovative ideas to life.</span>
               <img className='w-[200px] h-[250px] rounded-xl border-2 border-dashed border-[#070A52] p-1 rotate-[-10deg] hover:rotate-0 transition-all hover:border-dotted block md:hidden' src={profile} alt="Profile Photo" />
               <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="flex items-center gap-10 md:gap-5 text-xl">
                         <Link className='p-1 md:p-2 border-2 border-solid text-[#1877F2] border-[#03346E] rounded-full hover:bg-[#1877F2] transition-all hover:text-white hover:border-[#1877F2]' to={'https://www.facebook.com/fuhadshiblu.official'} target='_blank'><FaFacebookF/></Link>
                         <Link className='p-1 md:p-2 border-2 border-solid text-[#c13584] border-[#03346E] rounded-full hover:bg-[#c13584] transition-all hover:text-white hover:border-[#c13584]' to={'https://www.instagram.com/fuhadshiblu.official'} target='_blank'><FaInstagram/></Link>
                         <Link className='p-1 md:p-2 border-2 border-solid text-[#FF0000] border-[#03346E] rounded-full hover:bg-[#FF0000] transition-all hover:text-white hover:border-[#FF0000]' to={'https://www.youtube.com/@fuhad.shiblu'} target='_blank'><FaYoutube/></Link>
                         <Link className='p-1 md:p-2 border-2 border-solid text-[#0077B5] border-[#03346E] rounded-full hover:bg-[#0077B5] transition-all hover:text-white hover:border-[#0077B5]' to={'https://www.linkedin.com/in/fuhad-shiblu'} target='_blank'><FaLinkedinIn/></Link>
                         <Link className='p-1 md:p-2 border-2 border-solid text-[#24292e] border-[#03346E] rounded-full hover:bg-[#24292e] transition-all hover:text-white hover:border-[#24292e]' to={'https://www.github.com/fuhad-shiblu'} target='_blank'><FaGithub/></Link>
                    </div>
                    <Link className='text-xl font-black text-center px-10 py-5 bg-[#3C0753] text-white uppercase rounded-xl hover:bg-[#6A1E55] transition-all active:scale-[1.1]' to={'https://drive.usercontent.google.com/uc?id=165YmgA6PIpiCZ7LJp-f8_qyLq6vuHr-7&export=download'}>download cv</Link>
               </div>
          </div>
          <img className='w-[300px] h-[350px] rounded-xl border-2 border-dashed border-[#070A52] p-1 rotate-[-10deg] hover:rotate-0 transition-all hover:border-dotted hidden md:block' src={profile} alt="Profile Photo" />
     </section>
    </div>
    </>
  )
}
export default HomeCompo