import { Grid, Container, Box } from "@mui/material";
export default function gridComponent() {
  return (
    <div>
      <Container maxWidth="md">
        {" "}
        <Grid container direction="column" justifyContent="center">
          <Grid item xs={6}>
            01
          </Grid>
          <Grid item xs={6}>
            02
          </Grid>
        </Grid>
      </Container>
      <hr />
      <Grid container spacing={4} sx={{ border: "1px solid red" }}>
        <Grid item xs={6}>
          <Box sx={{ backgroundColor: "blue" }}>Grid With spacing</Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ backgroundColor: "blue" }}>Grid With spacing</Box>
        </Grid>
      </Grid>
      <hr />
    </div>
  );
}
