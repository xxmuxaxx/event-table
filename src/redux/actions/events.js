import eventsApi from "../../api/eventsApi";
import {
  SET_DETAIL,
  SET_EVENTS,
  SET_IS_LOADED,
  SET_PAGE,
  SET_PAGE_SIZE,
} from "../../constants";

export const fetchEventsPage = (page, pageSize) => async (dispatch) => {
  dispatch({ type: SET_IS_LOADED, payload: false });
  const results = await eventsApi.getEventsPage(page, pageSize);
  dispatch(setEvents(results));
};

export const fetchDetailById = (id) => async (dispatch) => {
  const results = await eventsApi.getDetailById(id);
  dispatch(setDetail(results));
};

export const setEvents = (events) => ({
  type: SET_EVENTS,
  payload: events,
});

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const setPageSize = (pageSize) => ({
  type: SET_PAGE_SIZE,
  payload: pageSize,
});

export const setDetail = (detail) => ({
  type: SET_DETAIL,
  payload: detail,
});
