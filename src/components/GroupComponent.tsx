import { FunctionComponent, useMemo, type CSSProperties } from "react";
import JobCampaign from "../pages/JobCampaign";
import Company from "../pages/Company";
import { Link } from 'react-router-dom';
import RecruiterProfile from "../pages/RecruiterProfile";
import React, { useState, useEffect } from 'react';
export type GroupComponentType = {
  /** Style props */
  rowOfNestedInteractiveBroWidth?: CSSProperties["width"];
  logoutAlignSelf?: CSSProperties["alignSelf"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  rowOfNestedInteractiveBroWidth,
  logoutAlignSelf,
}) => {

  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Function to update the current date and time
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
      setCurrentDate(formattedDate);
      setCurrentTime(formattedTime);
    };

    // Initial update
    updateDateTime();

    // Update the date and time every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount
  const interactiveBrokerNestedFramStyle: CSSProperties = useMemo(() => {
    return {
      width: rowOfNestedInteractiveBroWidth,
    };
  }, [rowOfNestedInteractiveBroWidth]);

  const rowOfNestedInteractiveBrokStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: logoutAlignSelf,
    };
  }, [logoutAlignSelf]);

  return (
    <header className="self-stretch bg-white box-border items-center justify-start pt-[15px] pb-4 pr-[55px] pl-[60px] gap-[16px] top-[0] z-[99] sticky max-w-full text-left text-base text-darkslategray-200 font-button-button border-[0.5px] border-solid border-gainsboro-100 mq1275:pl-[30px] mq1275:pr-[27px] mq1275:box-border">
      <div className="flex flex-column">
      <div className="h-[78px] w-[1920px] relative bg-white box-border hidden max-w-full border-[0.5px] border-solid border-gainsboro-100" />
      <div className="w-[494px] flex flex-col items-start justify-start max-w-full text-9xl">
      <img
  src="https://pulse.aptask.com/assets/images/logo/ApTask-Logo.png"
  alt="ApTask Logo"
  className="m-0 relative tracking-[0.18px] leading-[47px] font-medium font-inherit whitespace-nowrap z-[1]"
/>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start gap-[10.61px] max-w-full z-[2] text-sm-8 text-gray-100">
        <div className="w-[190px] flex flex-row items-center justify-start gap-[10.08px] mq1600:hidden">
          <b className="relative leading-[23.05px] capitalize shrink-0">
            Status
          </b>
          <div className="h-[33.9px] flex-1 rounded-8xs-8 bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-start py-[10.609318733215332px] pr-4 pl-[15.913978576660156px] border-[0.2px] border-solid border-gray-100">
            <input
              className="w-full [border:none] [outline:none] font-button-button text-sm-8 bg-[transparent] h-6 flex-1 relative leading-[23.05px] text-gray-100 text-left inline-block min-w-[61px]"
              placeholder="Active"
              type="text"
            />
          </div>
        </div>
        <div className="w-[189px] flex flex-row items-center justify-start gap-[10.08px] mq1275:hidden">
          <b className="relative leading-[23.05px] capitalize shrink-0 whitespace-nowrap">
            Calls Made
          </b>
          <div className="h-[33.9px] flex-1 rounded-8xs-8 bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-start py-[10.609318733215332px] pr-4 pl-[15.913978576660156px] border-[0.2px] border-solid border-gray-100">
            <input
              className="w-full [border:none] [outline:none] font-button-button text-sm-8 bg-[transparent] h-6 flex-1 relative leading-[23.05px] text-gray-100 text-left inline-block min-w-[41px]"
              placeholder="999"
              type="text"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start gap-[10.08px] mq1275:hidden">
          <b className="relative leading-[23.05px] capitalize whitespace-nowrap">
            Calls Completed
          </b>
          <div className="h-[33.9px] w-[100px] rounded-8xs-8 bg-whitesmoke-400 box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-[10px] pr-4 pl-[15px] border-[0.2px] border-solid border-gray-100">
            <input
              className="w-full [border:none] [outline:none] font-button-button text-sm-8 bg-[transparent] h-6 flex-1 relative leading-[23.05px] text-gray-100 text-left inline-block min-w-[41px]"
              placeholder="999"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-[29px] pl-0 gap-[18px] mq1275:hidden">
        <div className="relative leading-[24px] font-medium z-[1]">Date:</div>
        <div className="relative leading-[24px] text-gray-100 z-[1]">
          {currentDate}
        </div>
      </div>
      <div className="relative leading-[24px] font-medium z-[1]">Time:</div>
      <div className="flex flex-col items-start justify-start py-0 pr-6 pl-0 text-gray-100">
        <div className="relative leading-[24px] whitespace-nowrap z-[1]">
          {currentTime}
        </div>
      </div>
      <div
        className="w-[143px] flex flex-col items-start justify-start py-0 pr-3 pl-0 box-border"
        style={interactiveBrokerNestedFramStyle}
      >
        <button
          className="cursor-pointer [border:none] p-2.5 bg-darkslategray-200 self-stretch rounded-8xs flex flex-row items-center justify-center z-[1] hover:bg-steelblue"
          style={rowOfNestedInteractiveBrokStyle}
        >
          <b className="relative text-sm tracking-[1.25px] leading-[16px] font-button-button text-white text-left">
            Logout
          </b>
        </button>
      </div>
      {/* <img
        className="h-[25px] w-[23px] relative z-[1]"
        loading="eager"
        alt=""
        src="/vector.svg"
      />
      <img
        className="h-[23.9px] w-[23.9px] relative z-[1]"
        loading="eager"
        alt=""
        src="/group-4.svg"
      /> */}
      <img
        className="h-[45px] w-[45px] relative rounded-[50%] object-cover z-[1]"
        loading="eager"
        alt=""
        src="/unsplashgrymxaqdtp8@2x.png"
      />
      </div>
      <nav className="flex items-center gap-4 text-dark mt-4">
  <Link to="/company" className="cursor-pointer bg-darkslategray-200 w-[220px] h-[50px] rounded-[5.08px] flex items-center justify-center hover:bg-deepskyblue-200 font-bold text-white">Company</Link>
  <Link to="/recruiterprofile" className="cursor-pointer bg-darkslategray-200 w-[220px] h-[50px] rounded-[5.08px] flex items-center justify-center hover:bg-deepskyblue-200 font-bold text-white">Recruiters</Link>
  <Link to="/" className="cursor-pointer bg-darkslategray-200 w-[220px] h-[50px] rounded-[5.08px] flex items-center justify-center hover:bg-deepskyblue-200 font-bold text-white">Campaign</Link>
</nav>
    </header>
  );
};

export default GroupComponent;
