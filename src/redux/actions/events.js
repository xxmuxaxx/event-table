import eventsApi from "../../api/eventsApi";
import { SET_EVENTS } from "../../constants";

export const fetchEventsPage = (page) => async (dispatch) => {
  const results = await eventsApi.getResultsByUserId(page);
  dispatch(setEvents(results));
};

export const setEvents = (events) => ({
  type: SET_EVENTS,
  payload: events,
});
