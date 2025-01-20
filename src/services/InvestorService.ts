// src/services/InvestorService.ts
import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/investment";

export const addInvester = async (formData: FormData): Promise<unknown> => {
    const response = await axios.post(`${API_BASE_URL}/add`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);
    return response.data;
  };
