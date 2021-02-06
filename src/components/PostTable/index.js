import React from "react";
import { DataGrid } from "@material-ui/data-grid";

const COLUMNS = [
  { field: "title", headerName: "Title", width: 300 },
  {
    field: "url",
    headerName: "Url",
    width: 200,
    sortable: false,
    filterable: false,
  },
  {
    field: "created_at",
    headerName: "Created At",
    width: 200,
    sortable: false,
  },
  { field: "author", headerName: "Author", width: 200, filterable: false },
];

const PostTable = ({ posts: rows }) => {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid rows={rows} columns={COLUMNS} pageSize="20" checkboxSelection />
    </div>
  );
};

export default PostTable;
