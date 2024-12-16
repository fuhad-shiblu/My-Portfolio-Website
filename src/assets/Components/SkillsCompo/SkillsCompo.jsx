import { useState } from 'react'
import fuhadShibluSkills from '../../../DB-with-API/skillsAPI'
const SkillsCompo = () => {
  const [skillsData , setSkillsData] = useState(fuhadShibluSkills)
  return (
    <>
     <div className="mt-[100px]">
          <h2 className='text-2xl md:text-3xl text-center uppercase font-bold mb-5'>my expertise</h2>
          <p className='w-full md:w-[1000px] text-sm md:text-xl font-medium text-center m-auto mb-10'>Using these tools I can create a ui base web application. With the help of these tools, a web application becomes user friendly, seo friendly and 100% responsive.</p>
          <div className="flex flex-wrap justify-center items-center gap-5">
            {
              skillsData.map((items)=>(
            <div key={items.skills_id} className="flex flex-col justify-center items-center gap-5">
              <div className="w-[150px] h-[150px] p-3 md:p-5 rounded-xl bg-[#e6e6e6] border-2 border-solid border-[#003161] hover:bg-[#003161] hover:scale-[1.1] hover:rotate-[-10deg] transition-all flex justify-center items-center">
                <img className='w-full h-full hover:scale-[1.1] transition-all' src={items.skills_image} alt={items.skills_alt} />
              </div>
              <p className='uppercase font-medium text-lg md:text-xl'>{items.skills_name}</p>
            </div>
              ))
            }
          </div>
     </div>
    </>
  )
}
export default SkillsCompo