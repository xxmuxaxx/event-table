import React from "react";
import { connect } from "react-redux";

import { getEvents } from "./redux/selectors/events";
import { fetchEventsPage, setPage, setPageSize } from "./redux/actions/events";
import Table from "./components/Table";

const columns = [
  { field: "id", hide: true },
  { field: "login", headerName: "Логин", flex: 1 },
  { field: "date", headerName: "Дата события", flex: 1 },
  { field: "name", headerName: "Полное имя", flex: 1 },
  { field: "ip", headerName: "IP-адрес", flex: 1 },
  { field: "type", headerName: "Тип события", flex: 1 },
  { field: "result", headerName: "Результат События", flex: 1 },
  {
    field: "obj_name",
    headerName: "Объект, с которым произошло событие",
    flex: 1,
  },
  { field: "description", headerName: "Описание события", flex: 1 },
];

const App = ({ eventsState, fetchEventsPage, setPage, setPageSize }) => {
  const { page, pageSize, isLoaded, events, totalEvents } = eventsState;

  const handlePageChange = (params) => {
    setPage(params.page);
  };

  const handlePageSizeChange = (params) => {
    setPageSize(params.pageSize);
  };

  const isRowSelectable = (params) => {
    console.log(params);
  };

  React.useEffect(() => {
    fetchEventsPage(page, pageSize);
  }, [fetchEventsPage, page, pageSize]);

  return isLoaded ? (
    <Table
      cols={columns}
      rows={events}
      page={page}
      pageSize={pageSize}
      rowCount={totalEvents}
      loading={!isLoaded}
      handlePageChange={handlePageChange}
      handlePageSizeChange={handlePageSizeChange}
      isRowSelectable={isRowSelectable}
    ></Table>
  ) : (
    <h1>not loaded</h1>
  );
};

const mapStateToProps = (state) => ({
  eventsState: getEvents(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchEventsPage: (page, pageSize) =>
    dispatch(fetchEventsPage(page, pageSize)),
  setPage: (page) => dispatch(setPage(page)),
  setPageSize: (pageSize) => dispatch(setPageSize(pageSize)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
