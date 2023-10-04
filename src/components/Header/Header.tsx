import { Typography, Button } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Grid
      container
      xs={12}
      mt={2}
      mb={6}
      sx={{ borderBottom: 1, borderColor: "#e1e2f3" }}
    >
      <Grid xs={6} sx={{ textAlign: "start" }}>
        <Typography typography={"h5"}>Porfolio</Typography>
      </Grid>

      <Grid
        xs={6}
        container
        spacing={2}
        sx={{ alignSelf: "center", justifyContent: "end" }}
      >
        <Grid>
          <Link to={"/contact"}>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              sx={{ borderRadius: "15px" }}
            >
              Contact
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid
        xs={12}
        container
        sx={{
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Grid xs={4}>
          <Button variant="text">E-Commerce</Button>
        </Grid>
        <Grid xs={4}>
          <Button variant="text">Project </Button>
        </Grid>
        <Grid xs={4}>
          <Button variant="text">Project</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Header
