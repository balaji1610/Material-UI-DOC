import Dropdown from "@/app/common/dropdown";
import { useState } from "react";
import Autocomplete from "@/app/inputs/inputsTags/autoComplete";
export default function InputsComponents() {
  const [inputTopics, setInputTopics] = useState<string>("");

  const InutTopicsOptions = [
    {
      label: "Autocomplete",
      value: "Autocomplete",
    },
    {
      label: "Button",
      value: "Button",
    },
    {
      label: "Button Group",
      value: "ButtonGroup",
    },
    {
      label: "Checkbox",
      value: "Checkbox",
    },
    {
      label: "Floating Action Button",
      value: "FloatingActionButton",
    },
    {
      label: "Radio Group",
      value: "RadioGroup",
    },
    {
      label: "Rating",
      value: "Rating",
    },
    {
      label: "Select",
      value: "Select",
    },
    {
      label: "Slider",
      value: "Slider",
    },
    {
      label: "Switch",
      value: "Switch",
    },
    {
      label: "Text Field",
      value: "TextField",
    },
    {
      label: "Transfer List",
      value: "TransferList",
    },
    {
      label: "Toggle Button",
      value: "ToggleButton",
    },
  ];

  const handleDropdownChange = (e: any) => {
    setInputTopics(e.target.value);
  };

  const findComponents: any = {
    Autocomplete: <Autocomplete />,
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>
        Inputs Tags
      </h1>
      <Dropdown
        value={inputTopics}
        options={InutTopicsOptions}
        handleDropdownChange={handleDropdownChange}
      />

      <div>{findComponents[inputTopics]}</div>
    </div>
  );
}
