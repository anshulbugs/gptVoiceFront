import axios from 'axios';
import { GET_CLIENTS_API_URL } from "../router/api.routes";
import { EDIT_CLIENTS_API_URL } from "../router/api.routes";


// Function to get rules
export async function getClients() {
  try {
    const response = await axios.get(GET_CLIENTS_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error getting clients:', error);
    throw error;
  }
}

// Function to manage rules (add or delete)
export async function manageClients(method, data) {
  try {
    let response;
    if (method === 'POST') {
      response = await axios.post(EDIT_CLIENTS_API_URL, data);
    } else if (method === 'DELETE') {
      response = await axios.delete(EDIT_CLIENTS_API_URL, { data });
    }
    return response.data;
  } catch (error) {
    console.error('Error managing clients:', error);
    throw error;
  }
}