import { Box, ThemeProvider } from "@mui/material";

export default function boxComponent() {
  return (
    <div>
      <div>
        <Box
          component="h1"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItem: "center",
            color: "black",
            "&:hover": {
              color: "red",
              cursor: "pointer",
            },
          }}
        >
          <Box>Box Layout With Sx Prop</Box>
        </Box>
        {/* component="span" | "div" | 'section' | h1 | h2*/}
      </div>
      <hr />
      <div>
        <Box component="h2" bgcolor="blue" color="#ffffff" textAlign="center">
          Box With MUI System Props
        </Box>
      </div>

      <div>
        <Box
          sx={{
            "&.MuiBox-root": {
              color: "black",
              border: "1px solid black",
              display: "inline",
            },
          }}
        >
          Box With Root
        </Box>
      </div>
      <hr />
      <div>
        <ThemeProvider
          theme={{
            palette: {
              secondary: {
                main: "#9c27b0",
              },
              success: {
                light: "#4caf50",
              },
            },
          }}
        >
          {" "}
          <Box
            sx={{ color: "secondary.main", backgroundColor: "success.light" }}
          >
            Box With ThemeProvider
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
}
