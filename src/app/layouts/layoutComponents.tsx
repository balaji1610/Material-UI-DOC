import { useState } from "react";
import Dropdown from "@/app/common/dropdown";
import BoxComponent from "./layoutTags/boxComponent";
import ContainerComponent from "./layoutTags/containerComponent";
import GridComponent from "./layoutTags/gridComponent";
import StackComponent from "./layoutTags/stackComponent";
import ImageListComponent from "./layoutTags/imageListComponent";
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
    Container: <ContainerComponent />,
    Grid: <GridComponent />,
    Stack: <StackComponent />,
    "Image List": <ImageListComponent />,
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
