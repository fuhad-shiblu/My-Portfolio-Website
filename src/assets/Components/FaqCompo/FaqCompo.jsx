import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import fuhadShibluFaq from "../../../DB-with-API/faqAPI";

const FaqCompo = () => {
  const [activeFaqId, setActiveFaqId] = useState(null); // Track the active FAQ

  const handleFaq = (id) => {
    // Toggle FAQ item based on its ID
    setActiveFaqId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div className="container mx-auto mt-10">
        <h1 className="text-center capitalize font-extrabold text-xl md:text-3xl text-[#111361] mb-5">
          Frequently Asked Questions
        </h1>
        <div className="w-full bg-white p-3 md:p-5 rounded-lg flex flex-col gap-5">
          {fuhadShibluFaq.map((item) => (
            <div
              key={item.Faq_id}
              className="w-full p-3 md:p-5 rounded-3xl bg-[#e2e2e2] hover:bg-[#bdbdbd] flex flex-col gap-5 transition-all"
            >
              <p
                onClick={() => handleFaq(item.Faq_id)}
                className="flex justify-between items-center font-bold text-sm md:text-xl cursor-pointer uppercase"
              >
                {item.Faq_q}
                <span className="text-xl">
                  {activeFaqId === item.Faq_id ? (
                    <IoChevronDown />
                  ) : (
                    <IoChevronUp />
                  )}
                </span>
              </p>
              {activeFaqId === item.Faq_id && (
                <>
                  <div className="w-full h-[1px] bg-[#7e7e7e]" />
                  <div className="flex flex-col gap-1 cursor-pointer">
                    <p onClick={()=>handleFaq(item.Faq_id)} className="capitalize">{item.Faq_a}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FaqCompo;
