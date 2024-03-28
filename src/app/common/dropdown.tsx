import materialTags from "@/app/common/materialTags";

interface DropdownTypes {
  value?: string;
  options?: [{ label: string; value: string }];
  handleDropdownChang?: () => void;
}

export default function dropdown(props: any) {
  const { value, options, handleDropdownChange } = props;
  const { MenuItem, Select, InputLabel } = materialTags;

  return (
    <div>
      <Select value={value} onChange={handleDropdownChange}>
        {options.map((el: any, index: number) => {
          return (
            <MenuItem key={index} value={el.value}>
              {el.label}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
}
