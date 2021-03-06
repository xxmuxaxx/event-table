import {
  SET_DETAIL,
  SET_EVENTS,
  SET_IS_LOADED,
  SET_PAGE,
  SET_PAGE_SIZE,
} from "../../constants";

const initialState = {
  page: 0,
  pageSize: 100,
  isLoaded: false,
  events: [],
  totalEvents: null,
  detail: {},
};

const events = (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENTS:
      return {
        ...state,
        isLoaded: true,
        events: [...action.payload.events],
        totalEvents: action.payload.total,
      };

    case SET_IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };

    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case SET_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.payload,
      };

    case SET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    default:
      return state;
  }
};

export default events;
