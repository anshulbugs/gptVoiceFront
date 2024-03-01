import React, { FunctionComponent, useState, useEffect } from "react";
import { CustomSpinner } from "./shared-components/Spinner";
import {
  getRules,manageRules
} from "../services/rules.services";
const RulesComponent: FunctionComponent = () => {
  const [rules, setRules] = useState<{ rule: string }[]>([
    { rule: "" }
  ]);
  const [rulesApi, setRulesApi] = useState<{ id: string; rule_text: string }[]>([
    { id: "", rule_text: "" }
  ]);
  
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  interface Rule {
    id: string;
    rule_text: string;
  }
  async function gettingRules() {
    try {
      setIsSpinnerVisible(true);
      // Get rules
      const rulesData = await getRules();
      setIsSpinnerVisible(false);
      const rules: Rule[] = rulesData.rules;
      console.log('Rules:', rules);
      console.log('Rules:', typeof(rules));
      setRulesApi(rules)
      
      const formattedRules = rules.map(rule => ({ rule: rule.rule_text }));
        setRules(formattedRules);

    } catch (error) {
      console.error('Error:', error);
      setIsSpinnerVisible(false);
    }
  }
  useEffect(() => {
    gettingRules();
  }, []);
  useEffect(() => {
    console.log('RulesApi:', rulesApi);
  }, rulesApi);
  useEffect(() => {
    console.log('Rules:', rules);
  }, rules);

  interface VariableRule {
    rule: string;
}
  function getIdsWithMissingRules(rulesApi: Rule[], variableRules: VariableRule[]): string[] {
    const missingRulesIds: string[] = [];
    
    rulesApi.forEach(apiRule => {
        const apiRuleText = apiRule.rule_text;
        const isRuleMissing = !variableRules.some(variableRule => variableRule.rule === apiRuleText);
        
        if (isRuleMissing) {
            missingRulesIds.push(apiRule.id);
        }
    });
    
    return missingRulesIds;
}
const missingIds: string[] = getIdsWithMissingRules(rulesApi, rules);
useEffect(() => {
  console.log("Missing IDs:", missingIds);
}, missingIds);

function findExtraText(variableRules: VariableRule[], rulesApi: Rule[]): string[] {
  const extraText: string[] = [];
  
  variableRules.forEach(variableRule => {
      const variableRuleText = variableRule.rule;
      const isTextExtra = !rulesApi.some(apiRule => apiRule.rule_text === variableRuleText);
      
      if (isTextExtra) {
          extraText.push(variableRuleText);
      }
  });
  
  return extraText;
}
const extraRules: string[] = findExtraText( rules,rulesApi);
useEffect(() => {
  console.log("extraRules:", extraRules);
}, extraRules);
  const addRule = () => {
    setRules([...rules, { rule: "" }]);
  };

  const handleRuleChange = (index: number, value: string) => {
    const newRules = [...rules];
    newRules[index].rule = value;
    setRules(newRules);
    console.log("here",rules)
    const extraRules: string[] = getIdsWithMissingRules(rulesApi, rules);
    console.log("extraRules:", extraRules);
  };



  const deleteRule = (index: number) => {
    const newRules = [...rules];
    newRules.splice(index, 1);
    setRules(newRules);
  };

  function onSave(callback: () => void) {
    const missingIds = getIdsWithMissingRules(rulesApi, rules);
    
    if (missingIds.length > 0) {
        manageRules('DELETE', {"rule_ids": missingIds});
    }

    const extraRules: string[] = findExtraText(rules, rulesApi);
    if (extraRules.length > 0) {
        manageRules('POST', {"rule_texts": extraRules});
    }
    
    // Call the callback function after both operations have finished
    callback();
}

  return (



    <div className="self-stretch bg-white box-border flex flex-col items-end justify-start py-5 pr-[49px] pl-[51px] gap-[20px] max-w-full border-[0.5px] border-solid border-gainsboro mq1275:pl-[25px] mq1275:pr-6 mq1275:box-border">
      <CustomSpinner isVisible={isSpinnerVisible} />


      <button
        className="cursor-pointer [border:none] py-3 px-5 bg-forestgreen-100 rounded-6xs flex flex-row items-center justify-center whitespace-nowrap hover:bg-limegreen"
        onClick={addRule}
      >
        <b className="relative text-base tracking-[1.75px] leading-[22.41px] font-button-button text-white text-left">
          Add Rule
        </b>
      </button>

      {rules.map((rule, index) => (
        <div key={index} className="self-stretch rounded-3xs bg-white flex flex-col items-start justify-start p-2.5 box-border gap-[12px] max-w-full text-left text-lg text-gray-100 font-button-button">
          <div className="self-stretch flex flex-row items-center justify-start max-w-full">
            <div className="w-[1744px] flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-full">
              <b className="w-[120px] relative leading-[25.27px] capitalize inline-block shrink-0">
                Rule
              </b>
              <input
                type="text"
                className="flex-1 rounded-[5.26px] bg-whitesmoke-200 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 min-w-[1049px] max-w-full text-sm border-[0.2px] border-solid border-gray-100 mq1275:min-w-full"
                value={rule.rule}
                onChange={(e) => handleRuleChange(index, e.target.value)}
              />
              <button
                className="cursor-pointer h-9 w-9 rounded-3xs bg-red flex flex-row items-center justify-center py-[5px] px-[11px] box-border text-right text-white"
                onClick={() => deleteRule(index)}
              >
                <b className="h-[27px] relative tracking-[0.33px] flex items-center">
                  X
                </b>
              </button>
            </div>
          </div>

        </div>
      ))}
      <div className="w-[292px] flex flex-row items-start justify-start gap-[6px]">
        <button className="cursor-pointer [border:none] py-[10px] px-[16px] bg-black h-[47.1px] flex-1 rounded-[5.01px] flex flex-row items-center justify-center box-border hover:bg-darkslategray-300">
          <b className="relative text-base-2 tracking-[1.25px] leading-[16.04px] font-button-button text-white text-left">
            Close
          </b>
        </button>
        <button className="cursor-pointer [border:none] py-[10px] px-[16px] bg-forestgreen-200 h-[47.1px] flex-1 rounded-[5.01px] flex flex-row items-center justify-center box-border hover:bg-limegreen" onClick={() => onSave(() => {
    // This callback function will be called after onSave has completed its operations
    // You can put your component refresh logic here
    console.log("Component refreshed after onSave operations completed.");
})} >
          <b className="relative text-base-2 tracking-[1.25px] leading-[16.04px] font-button-button text-white text-left">
            Save
          </b>
        </button>
      </div>
    </div>


  );
};

export default RulesComponent;
