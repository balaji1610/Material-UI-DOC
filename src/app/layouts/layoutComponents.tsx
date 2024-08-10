import { useState } from "react";
import Dropdown from "@/app/common/dropdown";
import BoxComponent from "./layoutTags/boxComponent";
export default function LayoutComponents() {
  const [layoutTopic, setLayoutTopic] = useState<string>("Box");
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

  const prepareLayout: any = {
    Box: <BoxComponent />,
  };

  return (
    <div>
      <Dropdown
        value={layoutTopic}
        options={LayoutTopicOptions}
        handleDropdownChange={handleLayoutChange}
        label="Layout"
      />
      <div>{prepareLayout[layoutTopic]}</div>
    </div>
  );
}
