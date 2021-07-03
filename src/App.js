import React from "react";
import { connect } from "react-redux";

import { getEvents } from "./redux/selectors/events";
import { fetchEventsPage } from "./redux/actions/events";

const App = ({ eventsState, fetchEventsPage }) => {
  const { page, isLoaded } = eventsState;

  React.useEffect(() => {
    fetchEventsPage(page);
  }, [fetchEventsPage, page]);

  return isLoaded ? <h1>loaded</h1> : <h1>not loaded</h1>;
};

const mapStateToProps = (state) => ({
  eventsState: getEvents(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchEventsPage: (page) => dispatch(fetchEventsPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
