import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

export default function stackComponent() {
  return (
    <div>
      <Stack spacing={2}>
        <div className="layout__stack stack_without_direction">Stack Row 1</div>
        <div className="layout__stack stack_without_direction">Stack Row 2</div>
        <div className="layout__stack stack_without_direction">Stack Row 3</div>
      </Stack>
      <hr />
      <Stack
        direction="column"
        spacing={1}
        justifyContent="center"
        alignItems="flex-end"
        divider={<Divider orientation="vertical" flexItem />}
        height="25rem"
        border="2px solid red"
      >
        <div className="layout__stack">Stack column 1</div>
        <div className="layout__stack">Stack column 2</div>
        <div className="layout__stack">Stack column 3 </div>
      </Stack>
      <hr />
      <Stack
        spacing={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        height="25rem"
        border="2px solid gray"
      >
        <div className="layout__stack layout__row_stack">Stack Row 01</div>
        <div className="layout__stack layout__row_stack">Stack Row 02</div>
        <div className="layout__stack layout__row_stack">Stack Row 03</div>
      </Stack>
      <hr />
      <Stack spacing={3} height="15rem" border="1px solid blue">
        <Stack direction="row" justifyContent="flex-start">
          <div className="layout__stack layout_complex_stack"> 01</div>
        </Stack>
        <Stack direction="row" justifyContent="center">
          <div className="layout__stack layout_complex_stack"> 02</div>
        </Stack>
        <Stack direction="row" justifyContent="flex-end">
          <div className="layout__stack layout_complex_stack"> 03</div>
        </Stack>
      </Stack>
    </div>
  );
}
