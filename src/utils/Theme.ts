import { createTheme } from "@mui/material"

export const Theme = createTheme({
  palette: {
    primary: {
      main: "#141414",
    },
    secondary: {
      main: "#616CD0",
    },
    info: {
      main: "#e1e2f3",
    },
    success: { main: "#f97d36" },
  },
  typography: {
    fontFamily: ["Playfair Display", "serif"].join(","),
  },
})
