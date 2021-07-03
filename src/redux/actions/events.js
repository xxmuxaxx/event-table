import eventsApi from "../../api/eventsApi";
import { SET_EVENTS, SET_IS_LOADED } from "../../constants";

export const fetchEventsPage = (page) => async (dispatch) => {
  dispatch({ type: SET_IS_LOADED, payload: false });
  const results = await eventsApi.getEventsPage(page);
  dispatch(setEvents(results));
};

export const setEvents = (events) => ({
  type: SET_EVENTS,
  payload: events,
});
