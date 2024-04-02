import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  useGridApiRef,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Dropdown from "@/app/common/dropdown";

export default function DataGridPage() {
  const [personalInfo, setPersonalInfo] = useState([]);
  const [loading, setLoading] = useState<boolean | undefined>(true);
  const InutTopicsOptions = [
    {
      label: "Default",
      value: "Default",
    },
    {
      label: "Communication",
      value: "Communication",
    },
  ];
  const [inputTopics, setInputTopics] = useState(InutTopicsOptions[0].label);
  const BaseURL = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    (async () => {
      try {
        const getFetch = await fetch(`${BaseURL}`);

        const response = await getFetch.json();

        setPersonalInfo(response);
        setLoading(false);
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

  const apiRef = useGridApiRef();

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      minWidth: 120,
      width: 130,
      renderCell: (row) => <CountButton id={row.id} />,
    },
    { field: "name", headerName: "Name", width: 150, resizable: false },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
      valueGetter: (value: string, row: any) => {
        const phoneNumberOne: string[] = value?.split("x") ?? value;

        return phoneNumberOne[0];
      },
      valueFormatter: (value: string) => {
        return value.split("").filter(Number).join("");
      },
    },
    {
      field: "website",
      headerName: "Website URL",
      width: 125,
      minWidth: 150,
      maxWidth: 200,
      hideable: false,
      renderHeader: () => (
        <p>
          {"Website URL"}
          <span role="img" aria-label="enjoy">
            🎂
          </span>
        </p>
      ),
    },

    {
      field: "email",
      headerName: "EMAIL",
      width: 125,
      description:
        "The identification used by the person with access to the online service",
    },
  ];

  const handleDropdownChange = (e: any) => {
    setInputTopics(e.target.value);
  };

  const columnVisibilityModel =
    inputTopics == "Default"
      ? { id: true, name: true, phone: true, website: true, email: true }
      : { id: false, name: true, phone: true, website: false, email: true };

  return (
    <div>
      <Dropdown
        value={inputTopics}
        options={InutTopicsOptions}
        handleDropdownChange={handleDropdownChange}
      />
      <div style={{ width: "100%" }}>
        <DataGrid
          rows={personalInfo}
          columns={columns}
          autoHeight
          loading={loading}
          apiRef={apiRef}
          columnVisibilityModel={columnVisibilityModel}
        />
      </div>
    </div>
  );
}
