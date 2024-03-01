import React, { FunctionComponent, useState, useEffect } from "react";
import { CustomSpinner } from "./shared-components/Spinner";
import {
  getClients,manageClients
} from "../services/clients.services";
const ClientProfileComponent: FunctionComponent = () => {
  const [clients, setClients] = useState<{ id: string; client_data: string ;client_name: string }[]>([
    { id: "", client_data: "",client_name: ""}]);
  const [clientsApi, setClientsApi] = useState<{ id: string; client_data: string ;client_name: string }[]>([
    { id: "", client_data: "",client_name: ""}
  ]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  interface client {
    id: string;
    client_data: string;
    client_name: string;

  }
  async function gettingClients() {
    try {
      setIsSpinnerVisible(true);
      // Get rules
      const clientsData = await getClients();
      setIsSpinnerVisible(false);
      const clients: client[] = clientsData.clients;
      console.log('clients:', clients);
      console.log('clients:', typeof(clients));
      setClientsApi(clients)
      
      const formattedClients = clients.map(client => ({ client: client.client_data }));
        setClients(clients);

    } catch (error) {
      console.error('Error:', error);
      setIsSpinnerVisible(false);
    }
  }
  useEffect(() => {
    gettingClients();
  }, []);
  useEffect(() => {
    console.log('clientsApi:', clientsApi);
  }, clientsApi);
  useEffect(() => {
    console.log('clients:', clients);
  }, clients);

  interface VariableRule {
    client_data: string;
    client_name:string
}
  function getIdsWithMissingRules(clientsApi: client[], variableRules: VariableRule[]): string[] {
    const missingRulesIds: string[] = [];
    
    clientsApi.forEach(apiClient => {
        const apiClientText = apiClient.client_data;
        const isRuleMissing = !variableRules.some(variableRule => variableRule.client_data === apiClientText);
        
        if (isRuleMissing) {
            missingRulesIds.push(apiClient.id);
        }
    });
    
    return missingRulesIds;
}
const missingIds: string[] = getIdsWithMissingRules(clientsApi, clients);
useEffect(() => {
  console.log("Missing IDs:", missingIds);
}, missingIds);

function findExtraText(variableRules: VariableRule[], clientsApi: client[]): string[] {
  const extraText: string[] = [];
  
  variableRules.forEach(variableRule => {
      const variableRuleText = variableRule.client_data;
      const isTextExtra = !clientsApi.some(apiRule => apiRule.client_data === variableRuleText);
      
      if (isTextExtra) {
          extraText.push(variableRuleText);
      }
  });
  
  return extraText;
}
const extraRules: string[] = findExtraText( clients,clientsApi);
useEffect(() => {
  console.log("extraRules:", extraRules);
}, extraRules);
  const addRule = () => {
    // setClients([...clients, { client: "" }]);
  };

  const handleRuleChange = (index: number, value: string) => {
    // const newClients = [...clients];
    // newClients[index].client = value;
    // setClients(newClients);
    // console.log("here",clients)
    // const extraClients: string[] = getIdsWithMissingRules(clientsApi, clients);
    // console.log("extraClients:", extraClients);
  };



  const deleteRule = (index: number) => {
    const newRules = [...clients];
    newRules.splice(index, 1);
    setClients(newRules);
  };

  function onSave(callback: () => void) {
    const missingIds = getIdsWithMissingRules(clientsApi, clients);
    
    if (missingIds.length > 0) {
        manageClients('DELETE', {"rule_ids": missingIds});
    }

    const extraRules: string[] = findExtraText(clients, clientsApi);
    if (extraRules.length > 0) {
        manageClients('POST', {"rule_texts": extraRules});
    }
    
    // Call the callback function after both operations have finished
    callback();
}
const [isEditing, setIsEditing] = useState(false);
const toggleEditing = () => {
    setIsEditing(prevState => !prevState); // Toggle editing mode
  };
  return (



    <div className="self-stretch bg-white box-border flex flex-col items-end justify-start py-5 pr-[49px] pl-[51px] gap-[20px] max-w-full border-[0.5px] border-solid border-gainsboro mq1275:pl-[25px] mq1275:pr-6 mq1275:box-border">
      <CustomSpinner isVisible={isSpinnerVisible} />


      <button
        className="cursor-pointer [border:none] py-3 px-5 bg-forestgreen-100 rounded-6xs flex flex-row items-center justify-center whitespace-nowrap hover:bg-limegreen"
        onClick={addRule}
      >
        <b className="relative text-base tracking-[1.75px] leading-[22.41px] font-button-button text-white text-left">
          Add Client
        </b>
      </button>

      {clients.slice(currentPage * 1, currentPage * 1 + 1).map((client, index) => (
        <div key={index} className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-start p-2.5 box-border gap-[12px] max-w-full text-left text-lg text-black-100 font-button-button">
          <div className="self-stretch flex flex-col items-center justify-start max-w-full">
            <div className="w-[1744px] flex flex-col flex-wrap items-center justify-start gap-[10px] max-w-full">
              <b className="min-w-[200px] max-full relative leading-[25.27px] capitalize inline-block shrink-0">
              {client.client_name}
              </b>
              <textarea
                
                className="flex-1 rounded-[5.26px] bg-whitesmoke-100 box-border w-full overflow-auto flex flex-row items-center justify-center p-2.5 min-w-[1200px] max-w-full border-[0.2px] border-solid border-gray-100 mq1275:min-w-full text-xl  !important"
                style={{ fontSize: "1rem" }}
                value={client.client_data}
                rows={40}
                onChange={(e) => handleRuleChange(index, e.target.value)}
              />
              <div className="flex flex-row justify-between w-full">
              
              <button
                className="cursor-pointer h-9 w-50 rounded-3xs bg-green flex flex-row items-center justify-center py-[5px] px-[11px] box-border text-right text-white"
                onClick={() => toggleEditing}
              >
                <b className="h-[37px] relative tracking-[0.33px] flex items-center">
                  Edit Client
                </b>
              </button>
              <button
                className="cursor-pointer h-9 w-50 rounded-3xs bg-red flex flex-row items-center justify-center py-[5px] px-[11px] box-border text-right text-white"
                onClick={() => deleteRule(index)}
              >
                <b className="h-[37px] relative tracking-[0.33px] flex items-center">
                  Delete Client
                </b>
              </button>
              </div>
            </div>
          </div>

        </div>
      ))}
      
      <div className="w-[292px] flex flex-row items-start justify-start gap-[6px]">
      <button
          className="[border:none] py-[10px] px-[16px] bg-black h-[47.1px] flex-1 rounded-[5.01px] flex flex-row items-center justify-center box-border hover:bg-darkslategray-300"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          <b className="relative text-base-2 tracking-[1.25px] leading-[16.04px] font-button-button text-white text-left">
            Previous
          </b>
        </button>
        <button
          className="[border:none] py-[10px] px-[16px] bg-black h-[47.1px] flex-1 rounded-[5.01px] flex flex-row items-center justify-center box-border hover:bg-darkslategray-300"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(clients.length / 1) - 1}
        >
          <b className="relative text-base-2 tracking-[1.25px] leading-[16.04px] font-button-button text-white text-left">
            Next
          </b>
        </button>
        
        <button className="cursor-pointer [border:none] py-[10px] px-[16px] bg-forestgreen-200 h-[47.1px] flex-1 rounded-[5.01px] flex flex-row items-center justify-center box-border hover:bg-limegreen" onClick={() => onSave(() => {
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

export default ClientProfileComponent;
