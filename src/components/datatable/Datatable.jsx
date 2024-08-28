import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {
  const [data, setData] = useState(userRows);
  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate("/users/test");
  };
  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        onRowClick={handleRowClick}
        sx={{
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#f5f5f5", // Light grey background on hover
            cursor: "pointer", // Change cursor to pointer
          },
        }}
      />
    </div>
  );
};

export default Datatable;
