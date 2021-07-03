import axios from "axios";
import { URL } from "../constants";

const instance = axios.create({ baseURL: URL });

const eventsApi = {
  getEventsPage: async (page, pageSize) => {
    const response = await instance.get(
      `/events/?_page=${page + 1}&_limit=${pageSize}`
    );
    return {
      events: response.data,
      total: Number(response.headers["x-total-count"]),
    };
  },
  getDetailById: async (id) => {
    const response = await instance.get(`/eventsDetail/?id=${id}`);
    return response.data[0];
  },
};

export default eventsApi;
