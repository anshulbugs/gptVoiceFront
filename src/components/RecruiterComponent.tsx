import { FunctionComponent } from "react";

import { useState } from "react";

const RecruiterComponent: FunctionComponent = () => {
  interface Question {
    id: string;
    label: string;
  }
  
  const questions: Question[] = [
    { id: "firstName", label: "First Name" },
    { id: "lastName", label: "Last Name" },
    { id: "gender", label: "Gender" },
    { id: "email", label: "Email" },
    { id: "directPhoneNumber", label: "Direct Phone Number" },
    { id: "mobileNumber", label: "Mobile Number" },
    { id: "smsNumber", label: "SMS Number" },
    { id: "workingAtApTask", label: "Working years at Aptask?" },
    { id: "totalExperience", label: "Total years of experience" },
    { id: "Hometown", label: "Hometown" },
    { id: "CurrentLocation", label: "Current Location" },
    { id: "Languages", label: "languages Spoken" },
    { id: "CountriesTraveled", label: "Countries traveled" },
    { id: "LinkedIn ", label: "LinkedIn profile" },{ id: "Facebook", label: "Facebook profile " },{ id: "Instagram", label: "Instagram profile" },{ id: "Twitter", label: "Twitter Profile" },{ id: "Hobbies", label: "Hobbies" },{ id: "Eduaction", label: "Education" },
    { id: "workingTimes", label: "Business hours for call?" },
    { id: "Voice", label: "Upload Voice" },
  ];

  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };
  return (
    <div className="w-full relative bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[10px] box-border tracking-[normal]">
      <section className="self-stretch flex flex-col items-end justify-start max-w-full shrink-0 text-left text-lg text-dark font-button-button">
        
        
        <div className="self-stretch bg-white box-border flex flex-col items-end justify-start py-5 pr-[49px] pl-[51px] gap-[20px] max-w-full border-[0.5px] border-solid border-gainsboro mq1275:pl-[25px] mq1275:pr-6 mq1275:box-border">
          {questions.map((question) => (
            <div key={question.id} className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-full ">
              <b className={`min-w-[200px] relative leading-[25.27px] capitalize inline-block shrink-0mq1275:min-w-[580px] ${
                  ["workingAtApTask", "totalExperience", "workingTimes"].includes(question.id) ? 'max-w-[370px]' : ''
                }`}>
                {question.label}
              </b>
              <input
                type="text"
                className={`h-[46px] flex-1 rounded-[5.26px] bg-whitesmoke-200 box-border overflow-hidden min-w-[1046px] max-w-full border-[0.2px] border-solid border-dark  mq1275:min-w-full `}
                value={formData[question.id] || ''}
                onChange={(e) => handleInputChange(e, question.id)}
              />
            </div>
          ))}
          <div className="w-[292px] flex flex-row items-start justify-start gap-[6px]">
            <button className="cursor-pointer [border:none] py-[10px] px-[16px] bg-black h-[47.1px] flex-1 rounded-[5.01px] flex flex-row items-center justify-center box-border hover:bg-darkslategray-300">
              <b className="relative text-base-2 tracking-[1.25px] leading-[16.04px] font-button-button text-white text-left">
                Close
              </b>
            </button>
            <button className="cursor-pointer [border:none] py-[10px] px-[16px] bg-forestgreen-200 h-[47.1px] flex-1 rounded-[5.01px] flex flex-row items-center justify-center box-border hover:bg-limegreen">
              <b className="relative text-base-2 tracking-[1.25px] leading-[16.04px] font-button-button text-white text-left">
                Save
              </b>
            </button>
          </div>
          </div>

      </section>
    </div>
  );
};

export default RecruiterComponent;
