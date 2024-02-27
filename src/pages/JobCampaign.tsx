import { FunctionComponent } from "react";
//import useState
import { useState, useEffect, useRef } from "react";
import { CustomToast } from "../components/shared-components/Toast";
import LoadingSpinner from "../components/shared-components/loader";

import GroupComponent from "../components/GroupComponent";
// import { Input, Select, Radio } from 'shadcn/ui';

import {
  runCampaign, testCampaign
} from "../services/campaign.services";
import {
  searchJob
} from "../services/jobdiva.services";


const JobCampaign: FunctionComponent = () => {
  type CsvRow = { Name: string; Phone: string };
  interface Question {
    id: string;
    label: string;
  }
  async function runCampaignDataEndpoint(data: any) {
    // data = editFormData(data)
    console.log("data", data)
    try {
      const response = await runCampaign(data);
      console.log(data)
      console.log('Campaign data written successfully:', response);
      CustomToast({
        message: response.response,
        type: response.status,
      });
      // Handle success response if needed
    } catch (error) {
      console.error('Error writing campaign data:', error);
      CustomToast({
        message: "Error writing campaign data",
        type: "error",
      });
      // Handle error if needed
    }

  }
  const selectRef = useRef<HTMLSelectElement | null>(null); // Reference to the select element

  const handleDropdownClick = () => {
    if (selectRef.current) {
      selectRef.current.click(); // Programmatically trigger click event on the select element
    }
  };
  async function testCampaignDataEndpoint(data: any) {
    // data = editFormData(data)
    console.log("data", data)
    try {
      const response = await testCampaign(data);
      console.log("data", data)
      console.log('Campaign data written successfully:', data, response);
      CustomToast({
        message: response.response,
        type: response.status,
      });
      // Handle success response if needed
    } catch (error) {
      console.error('Error writing campaign data:', error);
      CustomToast({
        message: "Error writing campaign data",
        type: "error",
      });
      // Handle error if needed
    }
  }
  const campaignQuestions: Question[] = [
    { id: "CampaignName", label: "Campaign Name" },
    { id: "JobTitle", label: "Job Title" },
    { id: "JobID", label: "Job ID" },
    { id: "JobType", label: "Job Type" },
    { id: "Salary", label: "Salary" },
    { id: "HourlyRate", label: "Hourly Rate" },
    { id: "Duration", label: "Duration" },
    { id: "City", label: "City" },
    { id: "State", label: "State" },
    { id: "ZipCode", label: "Zip Code" },
    { id: "SeniorityLevel", label: "Seniority Level" },
    { id: "RemoteHybrid", label: "RemoteHybrid" },
    { id: "LLM", label: "LLM" },
    { id: "JobDescription", label: "Job Description" },
    { id: "RequiredSkills", label: "Required Skills" },
    { id: "DesiredSkills", label: "Desired Skills" },
    { id: "IndustryExperience", label: "Industry Experience" },
    { id: "RecruiterName", label: "Recruiter Name" },
    { id: "RecruiterPhoneNumber", label: "Recruiter Phone Number" },
    { id: "RecruiterEmail", label: "Recruiter Email" },
    { id: "Link", label: "Calendly Link" },
    { id: "VoiceGender", label: "Voice Gender" },
    { id: "tts", label: "tts" },
    { id: "Voice", label: "Voice" },
    { id: "EmailTemplate", label: "Email Template" },
    { id: "SMSTemplate", label: "SMS Template" },
    { id: "TestName", label: "Name" },
    { id: "TestPhoneNumber", label: "Phone No." },
    { id: "RecruiterName", label: "Recruiter Name" },
    { id: "ClientName", label: "Client Name" },
    { id: "atscrm", label: "ATS/CRM" },
    { id: "jobTemplate", label: "Job Template" },


  ];
  const campaignNameQuestion = campaignQuestions.find(question => question.id === "CampaignName");
  const jobTitleQuestion = campaignQuestions.find(question => question.id === "JobTitle");
  const JobIDQuestion = campaignQuestions.find(question => question.id === "JobID");
  const jobTypeQuestion = campaignQuestions.find(question => question.id === "JobType");
  const salaryQuestion = campaignQuestions.find(question => question.id === "Salary");
  const hourlyRateQuestion = campaignQuestions.find(question => question.id === "HourlyRate");
  const durationQuestion = campaignQuestions.find(question => question.id === "Duration");
  const cityQuestion = campaignQuestions.find(question => question.id === "City");
  const stateQuestion = campaignQuestions.find(question => question.id === "State");
  const zipCodeQuestion = campaignQuestions.find(question => question.id === "ZipCode");
  const seniorityLevelQuestion = campaignQuestions.find(question => question.id === "SeniorityLevel");
  const remoteHybridQuestion = campaignQuestions.find(question => question.id === "RemoteHybrid");
  const llmQuestion = campaignQuestions.find(question => question.id === "LLM");
  const jobDescriptionQuestion = campaignQuestions.find(question => question.id === "JobDescription");
  const requiredSkillsQuestion = campaignQuestions.find(question => question.id === "RequiredSkills");
  const desiredSkillsQuestion = campaignQuestions.find(question => question.id === "DesiredSkills");
  const industryExperienceQuestion = campaignQuestions.find(question => question.id === "IndustryExperience");
  const recruiterNameQuestion = campaignQuestions.find(question => question.id === "RecruiterName");
  const recruiterPhoneNumberQuestion = campaignQuestions.find(question => question.id === "RecruiterPhoneNumber");
  const recruiterEmailQuestion = campaignQuestions.find(question => question.id === "RecruiterEmail");
  const linkQuestion = campaignQuestions.find(question => question.id === "Link");
  const voiceGenderQuestion = campaignQuestions.find(question => question.id === "VoiceGender");
  const voiceQuestion = campaignQuestions.find(question => question.id === "Voice");
  const emailTemplateQuestion = campaignQuestions.find(question => question.id === "EmailTemplate");
  const smsTemplateQuestion = campaignQuestions.find(question => question.id === "SMSTemplate");
  const testNameQuestion = campaignQuestions.find(question => question.id === "TestName");
  const testPhoneNumberQuestion = campaignQuestions.find(question => question.id === "TestPhoneNumber");
  const clientNameQuestion = campaignQuestions.find(question => question.id === "ClientName");
  const atsCrmQuestion = campaignQuestions.find(question => question.id === "atscrm");
  const jobTemplateQuestion = campaignQuestions.find(question => question.id === "jobTemplate");

  type FormData = {
    [key: string]: string | string[];
  };
  const [campaignFormData, setFormData] = useState<any>({ LLM: 'Synthflow', });
  useEffect(() => {
    // Your logic here to handle the changes in campaignFormData
    console.log('campaignFormData changed:', campaignFormData);
  }, [campaignFormData]); // Dependency array containing campaignFormData

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const { value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [id]: value }));
    if (['JobTitle', 'City', 'State', 'ZipCode', 'JobDescription'].includes(id)) {
      // Update JobDivaData only for specified fields
      setJobDivaData((prevData: any) => ({ ...prevData, [id]: value }));
    }
  };
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>, id: string) => {
    const { value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [id]: value }));
    setJobDivaData((prevData: any) => ({ ...prevData, [id]: value }));
  };
  const [jobType, setJobType] = useState<string>('Full Time');

  const handleJobTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setJobType(value); // Update the jobType state

    // Update the campaignFormData with id "JobType" and the selected value
    setFormData((prevData: any) => ({ ...prevData, JobType: value }));
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, id: string) => {
    const { value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [id]: value }));
  };
  const [remoteHybrid, setRemoteHybrid] = useState('');

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const { value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [id]: value }));
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const { value, checked } = e.target;
    setFormData((prevData: any) => {
      // Get the existing array of selected values or initialize it as an empty array
      const selectedValues = prevData[id] || [];

      // Update the array based on whether the checkbox is checked or unchecked
      const updatedValues = checked
        ? [...selectedValues, value] // Add the value if checkbox is checked
        : selectedValues.filter((val: any) => val !== value); // Remove the value if checkbox is unchecked

      // Update the form data with the new array of selected values
      return { ...prevData, [id]: updatedValues };
    });
  };

  const [requiredSkills, setRequiredSkills] = useState<string[]>([]);
  const [desiredSkills, setDesiredSkills] = useState<string[]>([]);

  const [requiredskillInput, setRequiredSkillInput] = useState<string>('');
  const [desiredSkillInput, setDesiredSkillInput] = useState<string>('');

  const [industry, setIndustry] = useState<string[]>([]);
  const [industryInput, setIndustryInput] = useState<string>('');


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && requiredskillInput.trim() !== '') {
      setRequiredSkills((prevSkills) => [...prevSkills, requiredskillInput.trim()]);
      setRequiredSkillInput('');
      setFormData((prevData: any) => ({
        ...prevData,
        RequiredSkills: Array.isArray(prevData.RequiredSkills) ? [...prevData.RequiredSkills, requiredskillInput.trim()] : [requiredskillInput.trim()]
      }));
    }
  };
  const handleSkillRemove = (index: number) => {
    setRequiredSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
  };
  const handleKeyDownDesired = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && desiredSkillInput.trim() !== '') {
      setDesiredSkills((prevSkills) => [...prevSkills, desiredSkillInput.trim()]);
      setDesiredSkillInput('');
      setFormData((prevData: any) => ({
        ...prevData,
        DesiredSkills: Array.isArray(prevData.DesiredSkills) ? [...prevData.DesiredSkills, desiredSkillInput.trim()] : [desiredSkillInput.trim()]
      }));
    }
  };
  const handleDesiredSkillRemove = (index: number) => {
    setDesiredSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
  };

  const handleKeyDownIndustry = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && industryInput.trim() !== '') {
      setIndustry((prevIndustry) => [...prevIndustry, industryInput.trim()]);
      setIndustryInput('');
      setFormData((prevData: any) => ({
        ...prevData,
        Industry: Array.isArray(prevData.Industry) ? [...prevData.Industry, industryInput.trim()] : [industryInput.trim()]
      }));
    }
  };
  const handleIndustrylRemove = (index: number) => {
    setIndustry((prevIndustry) => prevIndustry.filter((_, i) => i !== index));
  };
  const [csvType, setCsvType] = useState("PlainCSV");
  const [fileName, setFileName] = useState("");
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the selected file
    if (!file) return;
    if (file) {
      setFileName(file.name); // Update the state with the file name
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      if (!event.target) return;
      const text = event.target.result as string;

      // Split the text by line breaks to get rows
      const rows = text.split(/\r?\n/).slice(1, -1);


      // Parse the CSV data based on the selected csvType
      let parsedData: CsvRow[] | undefined;
      if (csvType === "PlainCSV") {
        parsedData = parsePlainCSV(rows);
      } else if (csvType === "JDCSV") {
        parsedData = parseJDCSV(rows);
      }

      // Set the parsed data in the campaignFormData state
      setFormData((prevData: any) => ({
        ...prevData,
        csvFile: parsedData // Assuming you want to store the parsed data under the "csvFile" ID
      }));
    };
    reader.readAsText(file);
  };

  const parsePlainCSV = (rows: string[]) => {
    // Parse the PlainCSV format where the first column is for Name and the second column is for Phone
    return rows.map(row => {
      const [name, phone] = row.split(',');
      return { Name: name, Phone: phone };
    });
  };

  const parseJDCSV = (rows: string[]) => {
    // Parse the JDCSV format where the first column is Name and the fifth column is Phone
    return rows.map(row => {
      const columns = row.split(',');
      const name = columns[0];
      const phone = columns[4];
      return { Name: name, Phone: phone };
    });
  };



  // Function to handle the dropdown selection change
  const handleCsvChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCsvType(e.target.value);
    // You can perform additional actions based on the selected value if needed
  };
  const [jobDivaData, setJobDivaData] = useState({ City: "", JobTitle: "", JobType: "", State: "", ZipCode: "", desired_skills: "", JobDescription: "", required_skills: "", HourlyRate: "" });
  const [jobDivaID, setJobDivaID] = useState("");
  const [loading, setLoading] = useState(false);
  const handleFetchClick = async () => {
    setLoading(true);
    try {
      const searchValue = jobDivaID; // Define the search value '11766307'
      const result = await searchJob(searchValue); // Call the searchJob function
      console.log('Search result:', result); // Log the result to the console
      if (result.JobType === "Full Time/Contract") {
        result.JobType = "Contract";
    }
      setJobDivaData(result)
      console.log("Hello", jobDivaData)
      const desired_skills: string = result.desired_skills;
      const desired_skills_list: string[] = desired_skills.split(",").map(skill => skill.trim());
      const required_skills: string = result.required_skills;
      const required_skills_list: string[] = required_skills.split(",").map(skill => skill.trim());
      setRequiredSkills(required_skills_list)
      setDesiredSkills(desired_skills_list)
      setJobType(result.JobType)
      setFormData((prevData: any) => ({
        ...prevData,
        RequiredSkills: required_skills_list,
        DesiredSkills: desired_skills_list,
        JobTitle: result.JobTitle,
        City: result.City,
        State: result.State,
        ZipCode: result.ZipCode,
        HourlyRate: result.HourlyRate,
        JobType: result.JobType
      }));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching job:', error);
      setLoading(false);
    }
  };
  useEffect(() => {
    // Your logic here to handle the changes in campaignFormData
    console.log('campaignFormData changed:', campaignFormData);
  }, [jobDivaID]);
  const handleJobDivaIDChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const inputValue = e.target.value;
    setJobDivaID(inputValue);
    console.log(inputValue, jobDivaID)
    setFormData((prevData: any) => ({ ...prevData, [id]: inputValue })); // Update jobDivaID
  };
  const editFormData = (formData: any) => {
    // Create a copy of the original form data
    const editedFormData = { ...formData };

    // Check for duplicate keys
    const uniqueKeys = new Set(Object.keys(editedFormData));
    if (uniqueKeys.size !== Object.keys(editedFormData).length) {
      console.error('Duplicate keys detected in form data.');
      return formData; // Return original form data without any changes
    }

    // Check the value of JobType and remove keys accordingly
    const jobType = editedFormData.JobType;
    if (jobType === 'Fulltime') {
      delete editedFormData.Duration;
      delete editedFormData.HourlyRate;
    } else if (jobType === 'Contract') {
      delete editedFormData.Salary;
    }

    return editedFormData;
  };
  const [inputs, setInputs] = useState({
    // Assuming these are your input fields
    input1: '',
    input2: '',
    input3: '',
    select1: '',
    select2: '',
  });

  const handleNewJobClick = () => {
    // Clear all input fields
    setJobDivaData({ City: "", JobTitle: "", JobType: "", State: "", ZipCode: "", desired_skills: "", JobDescription: "", required_skills: "", HourlyRate: "" })
    setRequiredSkills([])
    setDesiredSkills([])
  };

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[25px] box-border tracking-[normal]">
      <GroupComponent />
      <main className="self-stretch flex flex-col items-start justify-start max-w-full">
        <section className="self-stretch bg-white box-border flex flex-col items-start justify-start py-5 pr-[51px] pl-[49px] gap-[8px] max-w-full text-left text-lg text-gray-100 font-button-button border-[0.5px] border-solid border-gainsboro-100 mq1275:pl-6 mq1275:pr-[25px] mq1275:box-border">
          <div className="w-full self-stretch flex flex-row flex-wrap items-end justify-start py-0 pr-px pl-0 box-border gap-[20px] max-w-full text-left text-lg text-gray-100 font-button-button mq1275:pl-6 mq1275:pr-[25px] mq1275:box-border">
            <div className="w-1/5 flex flex-col flex-wrap items-start justify-start gap-[10px] max-w-full">
              <b className="relative leading-[25.27px] capitalize">{atsCrmQuestion?.label}  {/* Red star icon */}</b>
              <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] whitespace-nowrap text-sm border-[0.2px] border-solid border-gray-100">
                <select
                  className="flex-1 relative leading-[25.27px]  text-gray-100 text-left bg-transparent appearance-none outline-none border-none"
                  onChange={(e) => handleSelectChange(e, atsCrmQuestion?.id || "")} // Handle selection change
                >
                  <option value="" disabled selected hidden>Select </option>
                  <option className="text-lg" value="JobDiva">JobDiva</option>
                  <option className="text-lg" value="option 2">option 2</option>
                  <option className="text-lg" value="option 3">option 3</option>
                </select>
                <div className="relative z-10">
                  <div
                    className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
                    onClick={handleDropdownClick} // Handle click on arrow image
                  >
                    <img
                      className="h-[6.6px] w-[12.1px] relative cursor-pointer"
                      alt=""
                      src="/vector-5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[163px] flex flex-col items-start justify-start gap-[10px] min-w-[106px]">
              <b className="relative leading-[25.27px] capitalize">{JobIDQuestion?.label}</b>
              <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 border-[0.2px] border-solid border-gray-100">
                <input
                  className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[86px]"
                  placeholder={JobIDQuestion?.label}
                  type="text"
                  onChange={(e) => handleJobDivaIDChange(e, JobIDQuestion?.id || "")}
                  tabIndex={3}
                  
                // value={inputs.input1}
                />
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] gap-[50px] flex flex-row items-end justify-start" onClick={handleFetchClick}>
              <div className="h-[51px] rounded-6xs bg-gray-100 flex flex-row items-center justify-center py-[14px] px-[21px] box-border whitespace-nowrap">
                <b className="relative text-base tracking-[1.75px] leading-[22.41px] font-button-button text-white text-left">
                  FETCH
                </b>
                {/* Display loader if loading is true */}
              </div>
            </button>
            {loading &&
              <LoadingSpinner />}

            <div className="w-1/4 flex flex-col items-start justify-start gap-[10px] max-w-full">
              <b className="relative leading-[25.27px] capitalize">Job Template
              </b>
              <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] whitespace-nowrap text-sm border-[0.2px] border-solid border-gray-100">
                <select
                  className="flex-1 relative leading-[25.27px]  text-gray-100 text-left bg-transparent appearance-none outline-none border-none"
                  onChange={(e) => handleSelectChange(e, jobTemplateQuestion?.id || "")} // Handle selection change
                >
                  <option value="" disabled selected hidden>Select </option>
                  <option className="text-lg" value="FullstackEngineer">Fullstack Engineer</option>
                  <option className="text-lg" value="DataScientist">Data Scientist</option>
                  <option className="text-lg" value="DevOpsEngineer">DevOps Engineer</option>
                </select>
                <div className="relative z-10">
                  <div
                    className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
                    onClick={handleDropdownClick} // Handle click on arrow image
                  >
                    <img
                      className="h-[6.6px] w-[12.1px] relative cursor-pointer"
                      alt=""
                      src="/vector-5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end"> {/* This div will push the button to the right corner */}
              <div
                className="w-[143px] h-[51px] flex flex-col items-start justify-end py-0 pr-3 pl-0 box-border"

              >
                {/* <button
                  className="cursor-pointer h-[51px]  [border:none] p-2.5 bg-orange-500 self-stretch rounded-8xs flex flex-row items-center justify-center z-[1] hover:bg-orange-400"
                  onClick={handleNewJobClick}

                >
                  <b className="relative text-sm tracking-[1.75px] leading-[22.41px] font-button-button text-white text-left">
                    +New Job
                  </b>
                </button> */}
              </div>
            </div>
          </div>
          <div className="w-full self-stretch flex flex-row flex-wrap items-end justify-start py-0 pr-px pl-0 box-border gap-[20px] max-w-full text-left text-lg text-gray-100 font-button-button mq1275:pl-6 mq1275:pr-[25px] mq1275:box-border">

            <div className="w-1/5 flex flex-wrap flex-col items-start justify-start gap-[10px] max-w-full">
              <b className="relative leading-[25.27px] capitalize">{jobTitleQuestion?.label}
                <span className="text-red-500">*</span></b>
              <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100">
                <input
                  className="w-full [border:none] [outline:none] font-button-button text-sm h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block max-w-full"
                  placeholder={jobTitleQuestion?.label}
                  type="text"
                  value={jobDivaData.JobTitle}
                  onChange={(e) => handleInputChange(e, jobTitleQuestion?.id || "")}
                  tabIndex={2}
                  style={{ backgroundColor: jobDivaData.JobTitle ? 'transparent' : 'lightyellow' }}
                />

              </div>
            </div>

            <div className="w-1/4 flex flex-col items-start justify-start gap-[10px] max-w-full">
              <b className="relative leading-[25.27px] capitalize">Job Type
                <span className="text-red-500">*</span>
              </b>
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[10px] max-w-full text-base text-darkslategray-200 mq900:flex-wrap">
                <div className="flex flex-row items-center justify-start gap-[5.81px]">
                  <input
                    className="border-darkslategray-200 accent-darkslategray-200 cursor-pointer m-0 h-[23.3px] w-[23.3px] flex flex-row items-center justify-center"
                    checked={jobType === 'Full Time'}
                    onChange={handleJobTypeChange}
                    value="Full Time"
                    type="radio"
                    tabIndex={4}
                  />
                  <div className="relative leading-[25.27px] capitalize font-medium">
                    Fulltime
                  </div>
                  <div className="flex-1 rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 min-w-[75px] border-[0.2px] border-solid border-gray-100">
                    <input
                      className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[180px]"
                      placeholder={salaryQuestion?.label}
                      type="text"
                      onChange={(e) => handleInputChange(e, salaryQuestion?.id || "")}
                      tabIndex={5}
                      disabled={jobType !== 'Full Time'} // Disable if jobType is not 'Full Time'
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-row  items-start justify-center min-w-[224px] max-w-full text-gray-200">
                  <div className="flex-1 flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[5.81px] items-center max-w-full mq450:flex-wrap">
                    <div className="flex flex-row items-center justify-center gap-[10px]">
                      <input
                        className="cursor-pointer m-0 h-[23.3px] w-[23.3px] justify-center rounded-[58.14px] bg-white box-border border-[2.3px] border-solid border-gray-200 gap-[10px]"
                        checked={jobType === 'Contract'}
                        onChange={handleJobTypeChange}
                        value="Contract"
                        type="radio"
                        tabIndex={6}
                      />
                      <div className="relative leading-[25.27px] capitalize font-medium">
                        Contract
                      </div>
                    </div>
                    <>
                      <div className="flex-1 rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5  min-w-[150px] w-[120px] border-[0.2px] border-solid border-gray-100 gap-[10px]">
                        <input
                          className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block "
                          placeholder={hourlyRateQuestion?.label}
                          type="text"
                          onChange={(e) => handleInputChange(e, hourlyRateQuestion?.id || "")}
                          value={jobDivaData.HourlyRate}
                          tabIndex={7}
                          disabled={jobType !== 'Contract'} // Disable if jobType is not 'Contract'
                        />
                      </div>
                      <div className="flex-1 rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 w-[120px] min-w-[150px] text-sm text-gray-100 border-[0.2px] border-solid border-gray-100">
                        <input
                          className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[58px]"
                          placeholder={durationQuestion?.label}
                          type="text"
                          onChange={(e) => handleInputChange(e, durationQuestion?.id || "")}
                          tabIndex={8}
                          disabled={jobType !== 'Contract'} // Disable if jobType is not 'Contract'
                        />
                      </div>
                    </>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div className="self-stretch flex flex-row flex-wrap items-end justify-start py-0 pr-0.5 pl-0 box-border gap-[20px] max-w-full text-left text-lg text-gray-100 font-button-button">
            <div className="w-1/2 flex flex-col items-start justify-start gap-[15px] max-w-full">
              <b className="relative leading-[25.27px] capitalize">Job Location
                <span className="text-red-500">*</span></b>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[10px] mq900:flex-wrap">
                <div className="flex-1 flex flex-row items-center justify-start w-3/10">
                  <div className="flex-1 rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 border-[0.2px] border-solid border-gray-100">
                    <input
                      className="w-full [border:none] [outline:none] font-button-button text-sm h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[171px]"
                      placeholder={cityQuestion?.label}
                      value={jobDivaData.City}
                      type="text"
                      onChange={(e) => handleInputChange(e, cityQuestion?.id || "")}
                      style={{ backgroundColor: jobDivaData.City ? 'transparent' : 'lightyellow' }}
                      tabIndex={9}
                    />
                  </div>
                </div>
                <div className="flex-[0.933] rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 w-3/10 border-[0.2px] border-solid border-gray-100 mq450:flex-1">
                  <input
                    className="w-full [border:none] [outline:none] font-button-button text-sm h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block "
                    placeholder={stateQuestion?.label}
                    type="text"
                    value={jobDivaData.State}
                    onChange={(e) => handleInputChange(e, stateQuestion?.id || "")}
                    style={{ backgroundColor: jobDivaData.State ? 'transparent' : 'lightyellow' }}
                    tabIndex={10}
                  />
                </div>
                <div className="flex-[0.933] rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 w-3/10 border-[0.2px] border-solid border-gray-100 mq450:flex-1">
                  <input
                    className="w-full [border:none] [outline:none] font-button-button text-sm h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block "
                    placeholder={zipCodeQuestion?.label}
                    type="text"
                    value={jobDivaData.ZipCode}
                    onChange={(e) => handleInputChange(e, zipCodeQuestion?.id || "")}
                    style={{ backgroundColor: jobDivaData.ZipCode ? 'transparent' : 'lightyellow' }}
                    tabIndex={11}
                  />
                </div>
              </div>
            </div>
            <div className="w-1/7 flex flex-col items-start justify-start gap-[10px] ">
              <b className="relative leading-[25.27px] capitalize">Seniority level</b>
              <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] whitespace-nowrap text-sm border-[0.2px] border-solid border-gray-100">
                <select
                  className="flex-1 relative leading-[25.27px]  text-gray-100 text-left bg-transparent appearance-none outline-none border-none"
                  onChange={(e) => handleSelectChange(e, seniorityLevelQuestion?.id || "")} // Handle selection change
                >
                  <option value="" disabled selected hidden>Select </option>
                  <option className="text-lg" value="High">High</option>
                  <option className="text-lg" value="Mid">Mid</option>
                  <option className="text-lg" value="Low">Low</option>
                </select>
                <div className="relative z-10">
                  <div
                    className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
                    onClick={handleDropdownClick} // Handle click on arrow image
                  >
                    <img
                      className="h-[6.6px] w-[12.1px] relative cursor-pointer"
                      alt=""
                      src="/vector-5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/7 flex flex-row items-center justify-start gap-[30px] min-w-[178px] min-h-[46px] text-base text-darkslategray-200">
              <label className="flex flex-row items-center justify-start gap-[10px]">
                <input
                  type="checkbox"
                  name="remoteOrHybrid"
                  className="h-[23px] w-[23px] relative"
                  value="Remote"
                  onChange={(e) => handleCheckboxChange(e, remoteHybridQuestion?.id || "")}
                  tabIndex={12}
                />
                <div className="relative leading-[25.27px] capitalize font-medium">
                  Remote
                </div>
              </label>
              <label className="flex flex-row items-center justify-start gap-[10px]">
                <input
                  type="checkbox"
                  name="remoteOrHybrid"
                  className="h-[23px] w-[23px] relative"
                  value="Hybrid"
                  onChange={(e) => handleCheckboxChange(e, remoteHybridQuestion?.id || "")}
                  tabIndex={13}
                />

                <div className="relative leading-[25.27px] capitalize font-medium">Hybrid</div>
              </label>
            </div>
            <div className="w-1/6 flex flex-col items-start justify-start gap-[10px] min-w-[178px]">
              <b className="relative leading-[25.27px] capitalize">LLM<span className="text-red-500">*</span></b>
              <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] whitespace-nowrap text-sm border-[0.2px] border-solid border-gray-100">

                <select
                  className="flex-1 relative leading-[25.27px]  text-gray-100 text-left bg-transparent appearance-none outline-none border-none"
                  onChange={(e) => handleSelectChange(e, llmQuestion?.id || "")}
                >
                  <option value="" disabled selected hidden>Select LLM</option>
                  <option value="Synthflow" className="text-lg" selected>Synthflow</option>
                  <option value="Vodex" className="text-lg">Vodex</option>
                  {/* <option value="Vocode" className="text-lg">VoCode</option> */}

                </select>
                <div className="relative z-10">
                  <div
                    className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
                    onClick={handleDropdownClick} // Handle click on arrow image
                  >
                    <img
                      className="h-[6.6px] w-[12.1px] relative cursor-pointer"
                      alt=""
                      src="/vector-5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-start max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full">
              <b className="relative leading-[25.27px] capitalize">
                Job Description
                <span className="text-red-500">*</span>
              </b>
              <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-start justify-center p-2.5 min-h-[222px] max-w-full text-sm border-[0.2px] border-solid border-gray-100" style={{ wordWrap: 'break-word' }}>
                <div className="flex-1 relative leading-[25.27px]">
                  <textarea
                    className="block w-full [border:none] [outline:none] font-button-button text-sm relative leading-[25.27px] text-gray-100 text-left min-w-[171px] resize-none"
                    placeholder={jobDescriptionQuestion?.label}
                    value={jobDivaData.JobDescription}
                    rows={10} // Set the number of visible lines
                    style={{ backgroundColor: jobDivaData.JobDescription ? 'transparent' : 'lightyellow' }}
                    onChange={(e) => handleTextareaChange(e, jobDescriptionQuestion?.id || "")} // Use the new function
                  />
                </div>
              </div>


            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-start max-w-full text-left text-lg text-gray-100 font-button-button">
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full">
              <b className="relative leading-[25.27px] capitalize">Required Skills
                <span className="text-red-500">*</span></b>
              <div className="self-stretch rounded-[5.26px] bg-whitesmoke-300 box-border overflow-hidden flex flex-row items-start justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100" style={{ backgroundColor: requiredSkills ? 'transparent' : 'lightyellow' }}>
                <div className="flex-1 flex flex-row items-center justify-start gap-[5.81px] max-w-full mq450:flex-wrap flex-wrap ">
                  {requiredSkills.map((skill, index) => (
                    <div key={index} className="flex flex-row items-center gap-[2.91px] rounded-[5.26px] bg-white mb-2.5">
                      <div className="relative text-sm leading-[15.27px] font-button-button text-gray-100 text-left">{skill}</div>
                      <img
                        className="h-[18.1px] w-[18.1px] cursor-pointer"
                        alt=""
                        src="/icbaselineclose.svg"
                        onClick={() => handleSkillRemove(index)}
                      />
                    </div>
                  ))}
                  <input
                    className="w-[calc(100%_-_38.1px)] [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[15.27px] text-gray-100 text-left inline-block min-w-[10px]"
                    placeholder="Type a skill"
                    type="text"
                    value={requiredskillInput}
                    onChange={(e) => setRequiredSkillInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    tabIndex={14}
                  />
                </div>
              </div>

            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-start max-w-full text-left text-lg text-gray-100 font-button-button">
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full">
              <b className="relative leading-[25.27px] capitalize">Desired Skills</b>
              <div className="self-stretch rounded-[5.26px] bg-whitesmoke-300 box-border overflow-hidden flex flex-row items-start justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100">
                <div className="flex-1 flex flex-row items-center justify-start gap-[5.81px] max-w-full mq450:flex-wrap flex-wrap ">
                  {desiredSkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-[2.91px] rounded-[5.26px] bg-white">
                      <div className="relative text-sm leading-[15.27px] font-button-button text-gray-100 text-left ">{skill}</div>
                      <img
                        className="h-[18.1px] w-[18.1px] cursor-pointer"
                        alt=""
                        src="/icbaselineclose.svg"
                        onClick={() => handleDesiredSkillRemove(index)}
                      />
                    </div>
                  ))}
                  <input
                    className="w-[calc(100%_-_38.1px)] [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[10px]"
                    placeholder="Type a skill"
                    type="text"
                    value={desiredSkillInput}
                    onChange={(e) => setDesiredSkillInput(e.target.value)}
                    onKeyDown={handleKeyDownDesired}
                    tabIndex={15}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="self-stretch flex flex-row items-end justify-start max-w-full text-left text-lg text-gray-100 font-button-button">
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full">
              <b className="relative leading-[25.27px] capitalize">Industry Experience </b>
              <div className="self-stretch rounded-[5.26px] bg-whitesmoke-300 box-border overflow-hidden flex flex-row items-start justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100">
                <div className="flex-1 flex flex-row items-center justify-start gap-[5.81px] max-w-full mq450:flex-wrap ">
                  {industry.map((ind, index) => (
                    <div key={index} className="flex items-center gap-[2.91px] rounded-[5.26px] bg-white">
                      <div className="relative text-sm leading-[25.27px] font-button-button text-gray-100 text-left ">{ind}</div>
                      <img
                        className="h-[18.1px] w-[18.1px] cursor-pointer"
                        alt=""
                        src="/icbaselineclose.svg"
                        onClick={() => handleIndustrylRemove(index)}
                      />
                    </div>
                  ))}
                  <input
                    className="w-[calc(100%_-_38.1px)] [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[10px]"
                    placeholder="Type a industry"
                    type="text"
                    value={industryInput}
                    onChange={(e) => setIndustryInput(e.target.value)}
                    onKeyDown={handleKeyDownIndustry}
                    tabIndex={16}
                  />
                </div>
              </div>
            </div>
          </div>

        </section>
        <section className="self-stretch bg-white box-border flex flex-col items-start justify-start py-2.5 pr-[51px] pl-[49px] max-w-full text-left text-lg text-gray-100 font-button-button border-[0.5px] border-solid border-gainsboro-100 mq1275:pl-6 mq1275:pr-[25px] mq1275:box-border">
          <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[20px] max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] w-1/3 max-w-full">
              <b className="relative leading-[25.27px] capitalize">{recruiterNameQuestion?.label}<span className="text-red-500">*</span></b>
              <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100">
                <input
                  className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] capitalize text-gray-100 text-left inline-block min-w-[250px] max-w-full"
                  placeholder={recruiterNameQuestion?.label}
                  type="text"
                  onChange={(e) => handleInputChange(e, recruiterNameQuestion?.id || "")}
                  tabIndex={17}
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] w-1/3 max-w-full">
              <b className="relative leading-[25.27px] capitalize">{recruiterPhoneNumberQuestion?.label}<span className="text-red-500">*</span></b>
              <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100">
                <input
                  className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] capitalize text-gray-100 text-left inline-block min-w-[250px] max-w-full"
                  placeholder={recruiterPhoneNumberQuestion?.label}
                  type="text"
                  onChange={(e) => handleInputChange(e, recruiterPhoneNumberQuestion?.id || "")}
                  tabIndex={18}
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] w-1/3 max-w-full">
              <b className="relative leading-[25.27px] capitalize">
                {recruiterEmailQuestion?.label}
              </b>
              <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100">
                <input
                  className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[250px] max-w-full"
                  placeholder={recruiterEmailQuestion?.label}
                  type="text"
                  onChange={(e) => handleInputChange(e, recruiterEmailQuestion?.id || "")}
                  tabIndex={19}
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[330px] max-w-full">
              <b className="relative leading-[25.27px] capitalize">{linkQuestion?.label}</b>
              <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100">
                <input
                  className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] capitalize text-gray-100 text-left inline-block min-w-[250px] max-w-full"
                  placeholder={linkQuestion?.label}
                  type="text"
                  onChange={(e) => handleInputChange(e, linkQuestion?.id || "")}
                  tabIndex={20}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch bg-white box-border flex flex-col items-start justify-start py-2.5 pr-[51px] pl-[49px] max-w-full text-left text-lg text-gray-100 font-button-button border-[0.5px] border-solid border-gainsboro-100 mq1275:pl-6 mq1275:pr-[25px] mq1275:box-border">
          <div className="  self-stretch flex flex-row items-end justify-start max-w-full">
            <div className=" flex-1 flex flex-row flex-wrap items-end justify-start gap-[20px] max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] w-1/5 max-w-full">
                <b className="relative leading-[25.27px] capitalize">
                  Voice gender
                </b>
                <div className="h-[46px] flex flex-row items-start justify-start gap-[10px] text-base text-gray-200">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[5.81px]">
                    <input
                      className="cursor-pointer m-0 h-[23.3px] w-[23.3px] rounded-[58.14px] bg-white box-border border-[2.3px] border-solid border-gray-200"
                      type="radio"
                      name="radioGroup-1"
                      value="Male" // Set value attribute to "Male"
                      onChange={(e) => handleRadioChange(e, voiceGenderQuestion?.id || "")}
                      tabIndex={21}
                    />
                    <div className="relative leading-[25.27px] capitalize font-medium">
                      Male
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[5.81px]">
                    <input
                      className="cursor-pointer m-0 h-[23.3px] w-[23.3px] rounded-[58.14px] bg-white box-border border-[2.3px] border-solid border-gray-200"
                      type="radio"
                      name="radioGroup-1"
                      value="Female" // Set value attribute to "Female"
                      onChange={(e) => handleRadioChange(e, voiceGenderQuestion?.id || "")}
                      tabIndex={22}
                    />
                    <div className="relative leading-[25.27px] capitalize font-medium">
                      Female
                    </div>
                  </div>

                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] w-1/5 max-w-full">
                <b className="relative leading-[25.27px] capitalize">TTS Provider</b>
                <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] max-w-full whitespace-nowrap text-sm border-[0.2px] border-solid border-gray-100">
                  <select
                    className="flex-1 relative leading-[25.27px]  text-gray-100 text-left bg-transparent appearance-none outline-none border-none"
                    onChange={(e) => handleSelectChange(e, voiceQuestion?.id || "")} // Handle selection change
                    tabIndex={23}
                  >
                    <option value="" disabled selected hidden>Select</option>
                    <option className="text-lg" value="11labs">11labs</option>
                    <option className="text-lg" value="Deepgram">Deepgram</option>
                  </select>
                  <div className="relative z-10">
                    <div
                      className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
                      onClick={handleDropdownClick} // Handle click on arrow image
                    >
                      <img
                        className="h-[6.6px] w-[12.1px] relative cursor-pointer"
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] w-1/5 max-w-full">
                <b className="relative leading-[25.27px] capitalize">Available Voice</b>
                <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] max-w-full whitespace-nowrap text-sm border-[0.2px] border-solid border-gray-100">
                  <select
                    className="flex-1 relative leading-[25.27px]  text-gray-100 text-left bg-transparent appearance-none outline-none border-none"
                    onChange={(e) => handleSelectChange(e, voiceQuestion?.id || "")} // Handle selection change
                    tabIndex={23}
                  >
                    <option value="" disabled selected hidden>Select</option>
                    <option className="text-lg" value="Voice1">Voice1</option>
                    <option className="text-lg" value="Voice2">Voice2</option>
                    <option className="text-lg" value="Voice3">Voice3</option>
                  </select>
                  <div className="relative z-10">
                    <div
                      className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
                      onClick={handleDropdownClick} // Handle click on arrow image
                    >
                      <img
                        className="h-[6.6px] w-[12.1px] relative cursor-pointer"
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] w-1/5 max-w-full">
                <b className="relative leading-[25.27px] capitalize">
                  Email Template
                </b>
                <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] max-w-full whitespace-nowrap text-sm border-[0.2px] border-solid border-gray-100">
                  <select
                    className="flex-1 relative leading-[25.27px]  text-gray-100 text-left bg-transparent appearance-none outline-none border-none"
                    onChange={(e) => handleSelectChange(e, emailTemplateQuestion?.id || "")} // Handle selection change
                  >
                    <option value="" disabled selected hidden>Select</option>
                    <option className="text-lg" value="emailTemplate1">Email Template 1</option>
                    <option className="text-lg" value="emailTemplate2">Email Template 2</option>
                    <option className="text-lg" value="emailTemplate3">Email Template 3</option>
                  </select>
                  <div className="relative z-10">
                    <div
                      className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
                      onClick={handleDropdownClick} // Handle click on arrow image
                    >
                      <img
                        className="h-[6.6px] w-[12.1px] relative cursor-pointer"
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] w-1/5 max-w-full">
                <b className="relative leading-[25.27px] capitalize">
                  SMS Template
                </b>
                <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] max-w-full whitespace-nowrap text-sm border-[0.2px] border-solid border-gray-100">
                  <select
                    className="flex-1 relative leading-[25.27px]  text-gray-100 text-left bg-transparent appearance-none outline-none border-none"
                    onChange={(e) => handleSelectChange(e, smsTemplateQuestion?.id || "")} // Handle selection change
                  >
                    <option value="" disabled selected hidden>Select</option>
                    <option className="text-lg" value="smsTemplateQuestion1">SMS Template 1</option>
                    <option className="text-lg" value="smsTemplate2">SMS Template 2</option>
                    <option className="text-lg" value="smsTemplate3">SMS Template 3</option>
                  </select>
                  <div className="relative z-10">
                    <div
                      className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
                      onClick={handleDropdownClick} // Handle click on arrow image
                    >
                      <img
                        className="h-[6.6px] w-[12.1px] relative cursor-pointer"
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch bg-white box-border flex flex-col items-start justify-start py-2.5 pr-[51px] pl-[49px] max-w-full border-[0.5px] border-solid border-gainsboro-100 mq1275:pl-6 mq1275:pr-[25px] mq1275:box-border">
          <footer className="self-stretch flex flex-row flex-wrap items-end justify-start py-0 pr-px pl-0 box-border gap-[20px] max-w-full text-left text-lg text-gray-100 font-button-button">
            <div className="flex-1 flex flex-row items-end justify-start py-0 pr-px pl-0 box-border gap-[20px] max-w-full mq1275:min-w-full mq1600:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] w-1/8 max-w-full">
                <b className="relative leading-[25.27px] capitalize">{testNameQuestion?.label} <span className="text-red-500">*</span></b>
                <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 border-[0.2px] border-solid border-gray-100">
                  <input
                    className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block max-w-full"
                    placeholder={testNameQuestion?.label}
                    type="text"
                    onChange={(e) => handleInputChange(e, testNameQuestion?.id || "")}
                    tabIndex={23}
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] w-1/8 max-w-full">
                <b className="relative leading-[25.27px] capitalize">
                  {testPhoneNumberQuestion?.label} <span className="text-red-500">*</span>
                </b>
                <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 border-[0.2px] border-solid border-gray-100">
                  <input
                    className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block max-w-full"
                    placeholder="+12345678912"
                    type="text"
                    onChange={(e) => handleInputChange(e, testPhoneNumberQuestion?.id || "")}
                    tabIndex={24}
                  />
                </div>
              </div>
              <button
                className="cursor-pointer border-none py-[14px] px-[21px] bg-deepskyblue-100 h-[51px] rounded-6xs flex items-center justify-center box-border whitespace-nowrap hover:bg-deepskyblue-200 w-1/10"
                onClick={() => testCampaignDataEndpoint(campaignFormData)} // Call the function directly on button click
              >
                <b className="relative text-base tracking-[1.75px] leading-[22.41px] uppercase font-button-button text-white text-left">
                  test call
                </b>
              </button>
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] w-1/8 max-w-full">
                <b className="relative leading-[25.27px] capitalize">CSV Type</b>
                <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] text-sm border-[0.2px] border-solid border-gray-100">
                  <select
                    className="flex-1 relative leading-[25.27px]  text-gray-100 text-left bg-transparent appearance-none outline-none border-none"
                    onChange={handleCsvChange}
                  >
                    <option className="text-lg" value="" disabled selected hidden >Select</option>
                    <option className="text-lg" value="PlainCSV">Plain CSV</option>
                    <option className="text-lg" value="JDCSV">JD CSV</option>
                  </select>
                  <div className="relative z-10">
                    <div
                      className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
                    // onClick={handleDropdownClick} // Handle click on arrow image
                    >
                      <img
                        className="h-[6.6px] w-[12.1px] relative cursor-pointer"
                        alt=""
                        src="/vector-8.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] w-1/8 max-w-full">
                <b className="relative leading-[25.27px] capitalize">CSV File</b>
                <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] text-sm border-[0.2px] border-solid border-gray-100">
                  {/* Input element for file selection */}
                  <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileChange}
                    className="hidden" // Hide the input element
                    id="csvFileInput"
                    tabIndex={25}
                  />
                  <label htmlFor="csvFileInput" className="cursor-pointer">{fileName ? fileName : 'Upload CSV'}</label>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] w-1/8 max-w-full">
                <b className="relative leading-[25.27px] capitalize">Client name</b>
                <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] text-sm border-[0.2px] border-solid border-gray-100">
                  <select
                    className="flex-1 relative leading-[25.27px]  text-gray-100 text-left bg-transparent appearance-none outline-none border-none"
                    onChange={(e) => handleSelectChange(e, clientNameQuestion?.id || "")} // Handle selection change
                  >
                    <option value="" disabled selected hidden>Select</option>
                    <option className="text-lg" value="client1">client 1</option>
                    <option className="text-lg" value="client2">client 2</option>
                    <option className="text-lg" value="client3">client 3</option>
                  </select>
                  <div className="relative z-10">
                    <div
                      className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
                      onClick={handleDropdownClick} // Handle click on arrow image
                    >
                      <img
                        className="h-[6.6px] w-[12.1px] relative cursor-pointer"
                        alt=""
                        src="/vector-8.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="flex flex-row items-end justify-start gap-[10px]">
              <button className="cursor-pointer [border:none] py-[14.008905410766602px] px-[21px] bg-gray-100 h-[51px] rounded-6xs flex flex-row items-center justify-center box-border whitespace-nowrap hover:bg-darkslategray-100">
                <b className="relative text-base tracking-[1.75px] leading-[22.41px] font-button-button text-white text-left">
                  Run Later
                </b>
              </button>
              <button
                className="cursor-pointer border-none py-[14.008905410766602px] px-[21px] bg-deepskyblue-100 h-[51px] rounded-6xs flex items-center justify-center box-border whitespace-nowrap hover:bg-deepskyblue-200"
                onClick={() => runCampaignDataEndpoint(campaignFormData)} // Call the function directly on button click
              >
                <b className="relative text-base tracking-[1.75px] leading-[22.41px] uppercase font-button-button text-white text-left">
                  RUN NOW
                </b>
              </button>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default JobCampaign;
