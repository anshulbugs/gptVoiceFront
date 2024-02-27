import React, { FunctionComponent, useState } from "react";
import GroupComponent from "../components/GroupComponent";
import NestedFrames from "../components/NestedFrames";

const Company: FunctionComponent = () => {
  const [qaPairs, setQAPairs] = useState<{ question: string; answer: string }[]>([
    { question: "", answer: "" }
  ]);

  const addQuestion = () => {
    setQAPairs([...qaPairs, { question: "", answer: "" }]);
  };

  const handleQuestionChange = (index: number, value: string) => {
    const newQAPairs = [...qaPairs];
    newQAPairs[index].question = value;
    setQAPairs(newQAPairs);
  };

  const handleAnswerChange = (index: number, value: string) => {
    const newQAPairs = [...qaPairs];
    newQAPairs[index].answer = value;
    setQAPairs(newQAPairs);
  };

  const deleteQuestion = (index: number) => {
    const newQAPairs = [...qaPairs];
    newQAPairs.splice(index, 1);
    setQAPairs(newQAPairs);
  };

  return (
    <div className="w-full relative bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border tracking-[normal]">
      <GroupComponent
        rowOfNestedInteractiveBroWidth="unset"
        logoutAlignSelf="unset"
      />
      <main className="self-stretch flex flex-col items-end justify-start gap-[14px] max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-lg text-gray-100 font-button-button">
          <div className="self-stretch bg-white box-border flex flex-col items-start justify-start py-5 pr-[51px] pl-[49px] gap-[20px] max-w-full border-[0.5px] border-solid border-gainsboro-100 mq1275:pl-6 mq1275:pr-[25px] mq1275:box-border">
            <div className="self-stretch flex flex-row flex-wrap items-end justify-start py-0 pr-px pl-0 box-border gap-[20px] max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start min-w-[1053px] max-w-full mq1275:min-w-full">
                <div className="w-[461px] flex flex-col items-start justify-start gap-[10px] max-w-full">
                  <b className="relative leading-[25.27px] capitalize">
                    Company Details
                  </b>
                  {/* <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] max-w-full text-sm border-[0.2px] border-solid border-gray-100">
                    <div className="flex-1 relative leading-[25.27px] inline-block max-w-[calc(100%_-_25px)]">
                      Company
                    </div>
                    <img
                      className="h-3 w-[22px] relative"
                      alt=""
                      src="/vector-5.svg"
                    />
                  </div> */}
                </div>
              </div>
              <button
                className="cursor-pointer [border:none] py-3 px-5 bg-forestgreen-100 rounded-6xs flex flex-row items-center justify-center whitespace-nowrap hover:bg-limegreen"
                onClick={addQuestion}
              >
                <b className="relative text-base tracking-[1.75px] leading-[22.41px] font-button-button text-white text-left">
                  New Question
                </b>
              </button>
            </div>
            {qaPairs.map((pair, index) => (
              <div key={index} className="self-stretch rounded-3xs bg-whitesmoke-200 flex flex-col items-start justify-start p-2.5 box-border gap-[12px] max-w-full text-left text-lg text-gray-100 font-button-button">
                <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                  <div className="w-[1744px] flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-full">
                    <b className="w-[120px] relative leading-[25.27px] capitalize inline-block shrink-0">
                      Question
                    </b>
                    <input
                      type="text"
                      className="flex-1 rounded-[5.26px] bg-white box-border overflow-hidden flex flex-row items-center justify-center p-2.5 min-w-[1049px] max-w-full text-sm border-[0.2px] border-solid border-gray-100 mq1275:min-w-full"
                      value={pair.question}
                      onChange={(e) => handleQuestionChange(index, e.target.value)}
                    />
                    <button
                      className="cursor-pointer h-9 w-9 rounded-3xs bg-red flex flex-row items-center justify-center py-[5px] px-[11px] box-border text-right text-white"
                      onClick={() => deleteQuestion(index)}
                    >
                      <b className="h-[27px] relative tracking-[0.33px] flex items-center">
                        X
                      </b>
                    </button>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start max-w-[97%]">


                  <div className="w-[1744px] flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-full">
                    <b className="w-[120px] relative leading-[25.27px] capitalize inline-block shrink-0">
                      Answer
                    </b>
                    <input
                      type="text"
                      className="flex-1 rounded-[5.26px] bg-white box-border overflow-hidden flex flex-row items-center justify-center p-2.5 min-w-[1049px] max-w-full text-sm border-[0.2px] border-solid border-gray-100 mq1275:min-w-full"
                      value={pair.answer}
                      onChange={(e) => handleAnswerChange(index, e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="w-[392px] flex flex-row items-start justify-start py-0 px-[50px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex-1 flex flex-row items-start justify-start gap-[6px]">
            <button className="cursor-pointer [border:none] py-[15px] pr-[45px] pl-[46px] bg-black rounded-[5.01px] flex flex-row items-center justify-center hover:bg-darkslategray-300">
              <b className="relative text-base-2 tracking-[1.25px] leading-[16.04px] font-button-button text-white text-left">
                Close
              </b>
            </button>
            <button className="cursor-pointer [border:none] p-[15px] bg-forestgreen-200 flex-1 rounded-[5.01px] flex flex-row items-center justify-center hover:bg-limegreen">
              <b className="relative text-base-2 tracking-[1.25px] leading-[16.04px] font-button-button text-white text-left">
                Save
              </b>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Company;
