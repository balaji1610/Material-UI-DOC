"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import InputsComponents from "@/app/inputs/inputsComponents";
import DataGridPage from "@/app/DataGrid/DataGridPage";
export default function TabsPage() {
  const [value, setValue] = useState(3);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const prepareTabs: any = {
    0: <InputsComponents />,
    3: <DataGridPage />,
  };
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Inputs" />
        <Tab label="DATA DISPLAY" />
        <Tab label="FEEDBACK" />
        <Tab label="DATAGRID" />
      </Tabs>

      <div>{prepareTabs[value]}</div>
    </Box>
  );
}
