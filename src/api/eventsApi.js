import axios from "axios";
import { URL } from "../constants";

const instance = axios.create({ baseURL: URL });

const eventsApi = {
  getEventsPage: async (page) => {
    const response = await instance.get(`?_page=${page}&_limit=100`);
    return response.data;
  },
  getDetailById: async (id) => {
    const response = await instance.get(`?id=${id}&detail`);
    return response.data;
  },
};

export default eventsApi;
