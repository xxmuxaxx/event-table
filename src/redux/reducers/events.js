import { SET_EVENTS, SET_IS_LOADED } from "../../constants";

const initialState = {
  page: 1,
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

    default:
      return state;
  }
};

export default events;
