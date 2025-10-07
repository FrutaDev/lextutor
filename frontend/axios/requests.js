import API from "./url.js";

export async function fetchData(endpoint, options = {}) {
    try {
        const response = await API.get(`/${endpoint}`, options);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

export const postData = async (endpoint, data, options = {}) => {
    try {
        const response = await API.post(`/${endpoint}`, data, options);
        return response.data;
    } catch (error) {
        console.error("Error posting data:", error);
        throw error;
    }
}

export const fetchOne = async (endpoint, id, options = {}) => {
    try {
        const response = await API.get(`/${endpoint}/${id}`, options);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }  
}

export const fetchMany = async (endpoint, id, options = {}) => {
    try {
        const response = await API.get(`/${endpoint}/${id}`, options);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }  
}
