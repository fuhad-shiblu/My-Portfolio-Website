import { useState } from 'react';
import fuhadShibluEdu from '../../../DB-with-API/eduAPI';
import fuhadShibluExpert from '../../../DB-with-API/expertAPI';
import { Link } from 'react-router-dom';

const EduCompo = () => {
  const [eduData, setEduData] = useState(fuhadShibluEdu);
  const [expertData, setExpertData] = useState(fuhadShibluExpert);

  return (
    <>
      <div className="flex flex-col items-center md:items-stretch gap-5">
        <h3 className="text-3xl md:text-5xl capitalize font-black tracking-[10px] text-[#1A202C]">
          Education
        </h3>
        {eduData.map((items) => (
          <div className='p-5 flex bg-[#F7FAFC] hover:bg-[#EDF2F7] focus:bg-[#E2E8F0] active:bg-[#CBD5E0] transition-all duration-200 ease-in-out shadow-md hover:shadow-lg focus:shadow-inner border border-[#E2E8F0] rounded-xl gap-5' key={items.edu_id}>
               <Link to={items.edu_institute_link} target='_blank'><img className='w-[50px] h-[50px] rounded-full' src={items.edu_institute_logo} alt={items.edu_institute_logo_alt} /></Link>
            <div className="flex flex-col gap-1">
               <p className="text-xl font-medium text-[#2D3748] capitalize">
               {items.edu_from_date} - {items.edu_to_date}
               </p>
               <p className="text-2xl font-bold text-[#1A202C] capitalize">
               {items.edu_institution}
               </p>
               <p className="text-lg font-bold text-[#4A5568] capitalize">
               {items.edu_department}
               </p>
               <p className="text-sm font-black text-[#3182CE] uppercase">
               C.G.P.A: {items.edu_cgpa}
               </p>
               <p className="text-sm font-medium text-[#718096] capitalize">
               {items.edu_location}
               </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EduCompo;