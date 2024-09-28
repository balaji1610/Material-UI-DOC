"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Divider from "@mui/material/Divider";
import InputsComponents from "@/app/inputs/inputsComponents";
import DataGridPage from "@/app/DataGrid/DataGridPage";
import Layouts from "@/app/layouts/layoutComponents";
export default function TabsPage() {
  const [value, setValue] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const prepareTabs: { [key: number]: React.ReactElement } = {
    0: <Layouts />,
    1: <InputsComponents />,
    3: <DataGridPage />,
  };

  const labels = ["Layout", "Inputs", "DATA DISPLAY", "FEEDBACK", "DATAGRID"];

  return (
    <>
      {" "}
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered>
          {labels.map((el) => {
            return <Tab label={el} key={el} />;
          })}
        </Tabs>
        <Divider></Divider>
        <div>{prepareTabs[value]}</div>
      </Box>
    </>
  );
}
