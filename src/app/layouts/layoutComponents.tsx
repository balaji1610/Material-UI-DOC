import Dropdown from "@/app/common/dropdown";
import { useState } from "react";
export default function LayoutComponents() {
  const [layoutTopic, setLayoutTopic] = useState<string>("");
  const LayoutTopicOptions = [
    {
      label: "Box",
      value: "Box",
    },
    {
      label: "Container",
      value: "Container",
    },
    {
      label: "Grid",
      value: "Grid",
    },
    {
      label: "Stack",
      value: "Stack",
    },
    {
      label: "Image List",
      value: "Image List",
    },
  ];
  const handleLayoutChange = (e: any) => {
    setLayoutTopic(e.target.value);
  };
  return (
    <div>
      <Dropdown
        value={layoutTopic}
        options={LayoutTopicOptions}
        handleDropdownChange={handleLayoutChange}
        label="Layout"
      />
    </div>
  );
}
