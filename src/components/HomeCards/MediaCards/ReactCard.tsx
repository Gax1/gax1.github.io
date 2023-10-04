import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia/CardMedia"
import { Typography } from "@mui/material"

const ReactCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="React-Redux logo"
        image="src\static\images\react.jpg"
      />
      <CardContent>
        <Typography color="text.secondary"></Typography>
      </CardContent>
    </Card>
  )
}

export default ReactCard
