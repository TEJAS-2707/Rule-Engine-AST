import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const createRule = async (ruleString) => {
    const response = await axios.post(`${API_BASE_URL}/create-rule`, { ruleString });
    return response.data;
};

export const evaluateRule = async (ruleId, data) => {
    const response = await axios.post(`${API_BASE_URL}/evaluate`, { ruleId, data });
    return response.data;
};
