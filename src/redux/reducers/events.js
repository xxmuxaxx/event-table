import { SET_EVENTS } from "../../constants";

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
        events: [...action.payload],
        totalEvents: action.payload.length,
      };

    default:
      return state;
  }
};

export default events;
