import './AboutCompo.css'
import profile from '../../../../public/images/profile.jpg'
import SkillsCompo from '../SkillsCompo/SkillsCompo'
import EduCompo from '../EduCompo/EduCompo'
import ExpertCompo from '../ExpertCompo.jsx/ExpertCompo'
import FaqCompo from '../FaqCompo/FaqCompo'
const AboutCompo = () => {
  return (
    <>
    <div className="container mx-auto">
     <div className="flex flex-col gap-5 items-center md:flex-row md:flex md:items-center md:gap-10 mt-10">
          <img className='w-[250px] md:w-[300px] h-[300px] md:h-[350px] rounded-xl' src={profile} alt="Profile Photo" />
          <div className="w-5 h-96 bg-[#481E14] relative rounded-xl hidden md:block">
               <div className="absolute w-5 h-5 bg-[#9B3922] top-0 left-1/2 translate-x-[-50%] rounded-full"></div>
               <div className="absolute w-5 h-5 bg-[#9B3922] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full"></div>
               <div className="absolute w-5 h-5 bg-[#9B3922] bottom-0 left-1/2 translate-x-[-50%] rounded-full"></div>
          </div>
          <div className="flex flex-col gap-10">
               <div className="fuhadShiblu_aboutHeader w-full bg-[#ffffff80] p-10 rounded-xl">
                    <h1 className='w-32 md:w-40 font-black text-[#0E2954] text-center text-2xl md:text-3xl uppercase relative mb-5 md:mb-10'>who am i?</h1>
                    <p className='text-sm text-[#3a3a3a] font-medium text-justify'>Hi, I’m Fuhad Hasan Shiblu, a Front-End Web Developer with 3 years of experience specializing in ReactJS. I enjoy building beautiful, responsive, and user-friendly websites. My skills include HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, Firebase, and Figma. I’m passionate about writing clean code and creating designs that work perfectly and look great. If you’re looking for someone to bring your ideas to life with creativity and reliability, I’m ready to help.<br /><br />To leverage my 3 years of experience as a Front-End Web Developer specializing in ReactJS to create innovative, responsive, and user-focused web applications. I aim to continuously enhance my skills in modern web technologies like HTML, CSS, JavaScript, and Firebase while contributing to impactful projects. My goal is to collaborate with forward-thinking teams, deliver high-quality solutions, and grow as a developer by embracing new challenges in the dynamic field of web development.</p>
               </div>
          </div>
     </div>
     <SkillsCompo/>
     <div className="mt-[100px] flex flex-col gap-10 md:flex-row md:justify-between items-center md:items-start">
          <EduCompo/>
          <ExpertCompo/>
     </div>
     <FaqCompo/>
    </div>
    </>
  )
}
export default AboutCompo