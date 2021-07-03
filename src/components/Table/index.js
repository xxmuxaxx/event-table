import React from "react";

import { DataGrid, ruRU } from "@material-ui/data-grid";

const Table = ({
  cols,
  rows,
  page,
  pageSize,
  rowCount,
  loading,
  handlePageChange,
  isRowSelectable,
}) => {
  return (
    <div style={{ height: "calc(100vh - 16px)", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={cols}
        pagination
        rowsPerPageOptions={false}
        page={page}
        pageSize={pageSize}
        rowCount={rowCount}
        onPageChange={handlePageChange}
        isRowSelectable={isRowSelectable}
        paginationMode="server"
        loading={loading}
        localeText={ruRU.props.MuiDataGrid.localeText}
      ></DataGrid>
    </div>
  );
};

export default Table;
