import { FunctionComponent } from "react";
import GroupComponent from "../components/GroupComponent";
import RecruiterComponent from "../components/RecruiterComponent";
import RulesComponent from "../components/RulesComponent";
import ClientProfileComponent from "../components/ClientProfile";

import { useState } from "react";

const RecruiterProfile: FunctionComponent = () => {
    // State to track which component to display
    const [displayedComponent, setDisplayedComponent] = useState('recruiter'); // Default to 'recruiter'

    // Function to handle button clicks and switch between components
    const handleButtonClick = (component: any) => {
      setDisplayedComponent(component);
    };
  return (
    <div className="w-full relative bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[10
    px] box-border tracking-[normal]">
      <GroupComponent />
      <section className=" self-stretch flex flex-col items-end justify-start max-w-full shrink-0 text-left text-lg text-dark font-button-button">
        <div className="self-stretch bg-white box-border flex flex-col items-end justify-start py-5 pr-[49px] pl-[51px] gap-[20px] max-w-full border-[0.5px] border-solid border-gainsboro mq1275:pl-[25px] mq1275:pr-6 mq1275:box-border">
        <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[20px] max-w-full">
            <div className="flex-1 flex flex-row items-end justify-start min-w-[585px] max-w-full mq900:min-w-full">
              <div className="flex-1 flex flex-row items-end justify-start gap-[5.08px] max-w-full mq900:flex-wrap">
              <button
    className={`cursor-pointer p-[15px] w-[220px] rounded-[5.08px] text-smi-2 tracking-[1.15px] leading-[14.71px] font-bold rounded-lg bg-${displayedComponent === 'recruiter' ? 'deepskyblue-100' : 'dark'} text-white`}
    onClick={() => handleButtonClick('recruiter')}
  >
    Recruiter Profile
  </button>
  <button
    className={`cursor-pointer p-[15px] w-[220px] rounded-[5.08px] text-smi-2 tracking-[1.15px] leading-[14.71px] font-bold rounded-lg bg-${displayedComponent === 'client' ? 'deepskyblue-100' : 'dark'} text-white`}
    onClick={() => handleButtonClick('client')}
  >
    Client Profile
  </button>
  <button
    className={`cursor-pointer p-[15px] w-[220px] rounded-[5.08px] text-smi-2 tracking-[1.15px] leading-[14.71px] font-bold rounded-lg bg-${displayedComponent === 'rules' ? 'deepskyblue-100' : 'dark'} text-white` }
    onClick={() => handleButtonClick('rules')}
  >
    Rules
  </button>
                
              </div>
            </div>
            {/* <div className="flex-1 flex flex-col items-end justify-start min-w-[585px] max-w-full mq900:min-w-full">
              <button className="cursor-pointer [border:none] py-3 px-5 bg-forestgreen-100 rounded-[7px] flex flex-row items-center justify-center whitespace-nowrap hover:bg-limegreen">
                <b className="relative text-base tracking-[1.75px] leading-[22.41px] font-button-button text-white text-left">
                  New Question
                </b>
              </button>
            </div> */}
          </div>
          {/* Conditional rendering of components based on state */}
      {displayedComponent === 'recruiter' && <RecruiterComponent />}
      {displayedComponent === 'client' && <ClientProfileComponent />}
      {displayedComponent === 'rules' && <RulesComponent />}
          
        </div>
      </section>
    </div>
  );
};

export default RecruiterProfile;
