import axios from 'axios';
import { GET_RECRUITER_API_URL } from "../router/api.routes";
import { EDIT_RECRUITER_API_URL } from "../router/api.routes";


// Function to get rules
export async function getRecruiter() {
  try {
    const response = await axios.get(GET_RECRUITER_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error getting rules:', error);
    throw error;
  }
}

// Function to manage rules (add or delete)
export async function manageRecruiter(method, data) {
  try {
    let response;
    if (method === 'POST') {
      response = await axios.post(EDIT_RECRUITER_API_URL, data);
    } else if (method === 'DELETE') {
      response = await axios.delete(EDIT_RECRUITER_API_URL, { data });
    }
    return response.data;
  } catch (error) {
    console.error('Error managing rules:', error);
    throw error;
  }
}