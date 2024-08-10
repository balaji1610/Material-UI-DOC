import materialTags from "@/app/common/materialTags";

interface DropdownTypes {
  value?: string;
  options?: [{ label: string; value: string }];
  handleDropdownChang?: () => void;
}

export default function dropdown(props: any) {
  const { value, options, handleDropdownChange, label } = props;
  const { MenuItem, Select, InputLabel, FormControl } = materialTags;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>{label}</InputLabel>
        <Select value={value} onChange={handleDropdownChange} label={label}>
          {options.map((el: any, index: number) => {
            return (
              <MenuItem key={index} value={el.value}>
                {el.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
