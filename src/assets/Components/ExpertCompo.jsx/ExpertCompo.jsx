import { useState } from "react";
import fuhadShibluExpert from "../../../DB-with-API/expertAPI";
import { Link } from "react-router-dom";

const ExpertCompo = () => {
  const [expertData, setExpertData] = useState(fuhadShibluExpert);

  return (
    <>
      <div className="flex flex-col items-center md:items-stretch gap-5">
        <h3 className="text-3xl md:text-5xl capitalize font-black tracking-[10px] text-[#1A202C]">
          Experience
        </h3>
        {expertData.map((items) => (
          <div
            key={items.expert_id}
            className="flex p-5 bg-[#F7FAFC] hover:bg-[#EDF2F7] focus:bg-[#E2E8F0] active:bg-[#CBD5E0] transition-all duration-200 ease-in-out shadow-md hover:shadow-lg focus:shadow-inner border border-[#E2E8F0] rounded-xl gap-5"
          >
               <Link to={items.expert_company_link} target='_blank'><img className='w-[50px] h-[50px] rounded-full' src={items.expert_company_logo} alt={items.expert_company_logo_alt} /></Link>
            <div className="flex flex-col gap-1">
               <p className="text-xl font-medium capitalize text-[#2D3748]">
               {items.expert_from_date} - {items.expert_to_date}
               </p>
               <p className="text-2xl font-bold capitalize text-[#1A202C]">
               {items.expert_company}
               </p>
               <p className="text-lg font-bold capitalize text-[#4A5568]">
               {items.expert_designation}
               </p>
               <p className="text-sm font-medium capitalize text-[#718096]">
               {items.expert_location}
               </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExpertCompo;