import React, { FunctionComponent, useState, useEffect } from "react";
import { CustomSpinner } from "./shared-components/Spinner";
import { getRecruiter } from "../services/recruiters.services";

interface Recruiter {
  [key: string]: string;
}

interface Question {
  id: string;
  label: string;
  value: string;
}

const questions: Question[] = [
  { id: "first_name", label: "First Name", value: "" },
  { id: "last_name", label: "Last Name", value: "" },
  { id: "email", label: "Email", value: "" },
  { id: "phone", label: "Phone", value: "" },
  { id: "calendly_link", label: "Calendly Link", value: "" },
  { id: "years_at_aptask", label: "Number of years working at ApTask", value: "" },
  { id: "years_of_experience", label: "years of experience as recruiter", value: "" },
  { id: "hometown_city", label: "Hometown (city, state, country)", value: "" },
  { id: "current_city", label: "Current location (city, state, country)", value: "" },
  { id: "languages_spoken", label: "Languages spoken", value: "" },
  { id: "countries_traveled", label: "Countries traveled", value: "" },
  { id: "linkedin_url", label: "LinkedIn profile URL", value: "" },
  { id: "facebook_id", label: "Facebook ID", value: "" },
  { id: "instagram_id", label: "Instagram ID", value: "" },
  { id: "twitter_id", label: "Twitter ID", value: "" },
  { id: "voiceFile", label: "Upload Voice file for cloning the voice", value: "" },
  { id: "hobbies", label: "Hobbies", value: "" },
  { id: "education", label: "Education", value: "" },
];

const RecruiterComponent: FunctionComponent = () => {
  const [recruiterDetails, setRecruiterDetails] = useState<Recruiter>({});
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  const [formData, setFormData] = useState<Recruiter>({});

  async function gettingRecruiter() {
    try {
      setIsSpinnerVisible(true);
      // Get recruiter data
      const recruiterData = await getRecruiter();
      setIsSpinnerVisible(false);
      const recruiter: Recruiter[] = recruiterData.recruiters[0];
      console.log("recruiter:", recruiter);
      setRecruiterDetails(recruiterData.recruiters[0]);
      
      setFormData(recruiterData.recruiters[0]);
      console.log("FormData:", formData);

    } catch (error) {
      console.error("Error:", error);
      setIsSpinnerVisible(false);
    }
  }
  useEffect(() => {
    console.log("Form data changed:", formData);
  }, [formData]);
  useEffect(() => {
    gettingRecruiter();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form data:", formData);
    // You can perform any action like saving the data here
  };

  return (
    <div className="w-full relative bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[10px] box-border tracking-[normal]">
      <CustomSpinner isVisible={isSpinnerVisible} />
      <section className="self-stretch flex flex-col  justify-start max-w-full shrink-0 text-left text-lg text-dark font-button-button">
        <form onSubmit={handleSubmit}>
          <div className="self-stretch bg-white box-border flex flex-col items-end justify-start py-5 pr-[49px] pl-[51px] gap-[20px] max-w-full border-[0.5px] border-solid border-gainsboro mq1275:pl-[25px] mq1275:pr-6 mq1275:box-border">
            {questions.map(({ id, label, value }) => (
              <div
                key={id}
                className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-full "
              >
                <label
                  htmlFor={id}
                  className={`min-w-[200px] relative leading-[25.27px] capitalize inline-block shrink-0mq1275:min-w-[580px] `}
                >
                  {label}
                </label>
                <input
                  type="text"
                  id={id}
                  name={id}
                  className={`h-[46px] flex-1 rounded-[5.26px] bg-whitesmoke-200 box-border overflow-hidden min-w-[1046px] max-w-full border-[0.2px] border-solid border-dark  mq1275:min-w-full pl-4 `}
                  value={formData[id] || value}
                  onChange={handleInputChange}
                />
              </div>
            ))}
            <div className="w-[292px] flex flex-row items-start justify-start gap-[6px]">
              <button
                type="button"
                className="cursor-pointer [border:none] py-[10px] px-[16px] bg-black h-[47.1px] flex-1 rounded-[5.01px] flex flex-row items-center justify-center box-border hover:bg-darkslategray-300"
              >
                <b className="relative text-base-2 tracking-[1.25px] leading-[16.04px] font-button-button text-white text-left">
                  Close
                </b>
              </button>
              <button
                type="submit"
                className="cursor-pointer [border:none] py-[10px] px-[16px] bg-forestgreen-200 h-[47.1px] flex-1 rounded-[5.01px] flex flex-row items-center justify-center box-border hover:bg-limegreen"
              >
                <b className="relative text-base-2 tracking-[1.25px] leading-[16.04px] font-button-button text-white text-left">
                  Save
                </b>
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default RecruiterComponent;
