import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
export default function DataGridPage() {
  const [personalInfo, setPersonalInfo] = useState([]);

  const BaseURL = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    (async () => {
      try {
        const getFetch = await fetch(`${BaseURL}`);

        const response = await getFetch.json();

        setPersonalInfo(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  const CountButton = ({ id }: any) => {
    const [count, setCount] = useState(id);

    return (
      <button onClick={() => setCount((prev: any) => prev + 1)}>
        {count} click(s)
      </button>
    );
  };
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      renderCell: (row) => <CountButton id={row.id} />,
    },
    { field: "name", headerName: "Name", width: 150 },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
      valueGetter: (value: string, row: any) => {
        const phoneNumberOne: string[] = value?.split("x") ?? value;

        return phoneNumberOne[0];
      },
    },
    { field: "website", headerName: "Website URL", width: 150 },
    {
      field: "email",
      headerName: "EMAIL",
      width: 150,
    },
  ];

  console.log(personalInfo, "personalInfo");
  return (
    <div>
      {" "}
      <div style={{ width: "100%" }}>
        <DataGrid rows={personalInfo} columns={columns} autoHeight />
      </div>
    </div>
  );
}
