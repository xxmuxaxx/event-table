import React from "react";
import { connect } from "react-redux";

import { getEvents } from "./redux/selectors/events";
import {
  fetchDetailById,
  fetchEventsPage,
  setDetail,
  setPage,
  setPageSize,
} from "./redux/actions/events";

import Table from "./components/Table";
import DetailCard from "./components/DetailCard";
import Loader from "./components/Loader/Loader";

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

const App = ({
  eventsState,
  fetchEventsPage,
  setPage,
  fetchDetailById,
  setDetail,
}) => {
  const { page, pageSize, isLoaded, events, totalEvents, detail } = eventsState;

  const handlePageChange = ({ page }) => {
    setPage(page);
  };

  const isRowSelectable = ({ row }) => {
    if (detail.id !== row.id) {
      fetchDetailById(row.id);
    }
  };

  React.useEffect(() => {
    fetchEventsPage(page, pageSize);
  }, [fetchEventsPage, page, pageSize]);

  return (
    <div style={{ display: "flex" }}>
      {isLoaded ? (
        <>
          <Table
            cols={columns}
            rows={events}
            page={page}
            pageSize={pageSize}
            rowCount={totalEvents}
            loading={!isLoaded}
            handlePageChange={handlePageChange}
            isRowSelectable={isRowSelectable}
          ></Table>
          {detail.id && <DetailCard data={detail} />}
        </>
      ) : (
        <Loader />
      )}
    </div>
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
  fetchDetailById: (id) => dispatch(fetchDetailById(id)),
  setDetail: (detail) => dispatch(setDetail(detail)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
