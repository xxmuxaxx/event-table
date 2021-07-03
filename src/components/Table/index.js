import React from "react";

import { DataGrid } from "@material-ui/data-grid";

const Table = ({
  cols,
  rows,
  page,
  pageSize,
  rowCount,
  loading,
  handlePageChange,
  handlePageSizeChange,
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
        onPageSizeChange={handlePageSizeChange}
        isRowSelectable={isRowSelectable}
        paginationMode="server"
        loading={loading}
      ></DataGrid>
    </div>
  );
};

export default Table;
