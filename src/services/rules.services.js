import axios from 'axios';
import { GET_RULES_API_URL } from "../router/api.routes";
import { EDIT_RULES_API_URL } from "../router/api.routes";


// Function to get rules
export async function getRules() {
  try {
    const response = await axios.get(GET_RULES_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error getting rules:', error);
    throw error;
  }
}

// Function to manage rules (add or delete)
export async function manageRules(method, data) {
  try {
    let response;
    if (method === 'POST') {
      response = await axios.post(EDIT_RULES_API_URL, data);
    } else if (method === 'DELETE') {
      response = await axios.delete(EDIT_RULES_API_URL, { data });
    }
    return response.data;
  } catch (error) {
    console.error('Error managing rules:', error);
    throw error;
  }
}