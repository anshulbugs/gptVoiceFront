import axios from 'axios';
import { GET_COMPANY_API_URL } from "../router/api.routes";
import { EDIT_COMPANY_API_URL } from "../router/api.routes";


// Function to get rules
export async function getCompany() {
  try {
    const response = await axios.get(GET_COMPANY_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error getting Company:', error);
    throw error;
  }
}

// Function to manage rules (add or delete)
export async function manageCompany(method, data) {
  try {
    let response;
    if (method === 'POST') {
      response = await axios.post(EDIT_COMPANY_API_URL, data);
    } else if (method === 'DELETE') {
      response = await axios.delete(EDIT_COMPANY_API_URL, { data });
    }
    return response.data;
  } catch (error) {
    console.error('Error managing rules:', error);
    throw error;
  }
}