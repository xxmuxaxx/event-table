import axios from "axios";
import { URL } from "../constants";

const instance = axios.create({ baseURL: `${URL}/events/` });

const eventsApi = {
  getEventsPage: async (page) => {
    const response = await instance.get(`?_page=${page}&_limit=10`);
    return {
      events: response.data,
      total: Number(response.headers["x-total-count"]),
    };
  },
  getDetailById: async (id) => {
    const response = await instance.get(`?id=${id}&detail`);
    return response.data;
  },
};

export default eventsApi;
