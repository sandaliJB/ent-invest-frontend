import axios from "axios";
const API_URL = "http://localhost:8080/api/user";


export const logout = async () => {
    const response = await axios.post(`${API_URL}/logout`);
    return response.data;
};