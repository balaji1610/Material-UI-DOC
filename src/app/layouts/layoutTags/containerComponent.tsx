import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
export default function containerComponent() {
  return (
    <div>
      <Container maxWidth="xs" component="section">
        <Box sx={{ bgcolor: "gray" }}>Container</Box>
      </Container>
      {/* maxWidth= | 'xs'| 'sm'| 'md'| 'lg'| 'xl' */}
      <hr />
      <Container maxWidth="xs" disableGutters={true}>
        <Box sx={{ bgcolor: "gray" }}>disableGutters with Container</Box>
      </Container>
      <hr />

      <Container fixed>
        <Box sx={{ bgcolor: "gray" }}>Fixed with Container</Box>
      </Container>
      <hr />
      <Container sx={{ border: "1px solid red" }} maxWidth="xs">
        <Box sx={{ bgcolor: "gray" }}>Container With SX</Box>
      </Container>
      <hr />

      <Container
        sx={{
          "&.MuiContainer-root": {
            border: "2px solid blue",
          },
        }}
      >
        <Box sx={{ bgcolor: "gray" }}>Container With CSS Name</Box>
      </Container>
    </div>
  );
}
