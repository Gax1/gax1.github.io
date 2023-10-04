import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  MobileStepper,
  Typography,
} from "@mui/material"
import { carouselData } from "../../static/data/carouselData"
import { useEffect, useState } from "react"

const HomeCarousel = () => {
  const [steps, setSteps] = useState(0)
  const [dataDisplay, setDataDisplay] = useState(carouselData.slice(0, 3))
  const [selectedItem, setSelectedItem] = useState(3)

  useEffect(() => {
    if (steps === 0) {
      setDataDisplay(carouselData.slice(0, 3))
    }
    if (steps === 1) {
      setDataDisplay(carouselData.slice(3, 6))
    }
    if (steps === 2) {
      setDataDisplay(carouselData.slice(6, 9))
    }
  }, [steps])

  const handleNext = () => {
    setSteps((steps) => steps + 1)
    setSelectedItem(3)
  }

  const handleBack = () => {
    setSteps((steps) => steps - 1)
    setSelectedItem(3)
  }

  const onCardClick = (event: React.MouseEvent<HTMLElement>) => {
    const cardIndex = event.currentTarget.id
    if (selectedItem === +cardIndex) {
      return setSelectedItem(3)
    }

    setSelectedItem(+cardIndex)
  }

  return (
    <Card variant="elevation" style={{ border: "none", boxShadow: "none" }}>
      <Grid container justifyContent={"space-around"}>
        {dataDisplay.map((data, i) => (
          <Grid key={i} width={300} justifyContent={"center"}>
            <CardActionArea id={`${i}`} onClick={(event) => onCardClick(event)}>
              {i !== selectedItem && (
                <>
                  <CardContent
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <CardMedia
                      component="img"
                      alt={data.alt}
                      image={data.img}
                      sx={{ maxWidth: 100, maxHeight: 100 }}
                    />
                  </CardContent>
                  <Typography variant="h6" p={1}>
                    {data.title}
                  </Typography>
                </>
              )}
              {i === selectedItem && (
                <>
                  <Typography variant="h5" p={1}>
                    {data.title}
                  </Typography>
                  <Typography variant="body1" p={1}>
                    {data.description}
                  </Typography>
                </>
              )}
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
      <MobileStepper
        sx={{ maxWidth: "100%", flexGrow: 1 }}
        variant="dots"
        position="static"
        steps={3}
        activeStep={steps}
        nextButton={
          <Button onClick={handleNext} disabled={steps === 2}>
            Next <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button onClick={handleBack} disabled={steps === 0}>
            <KeyboardArrowLeft /> Back
          </Button>
        }
      />
    </Card>
  )
}
export default HomeCarousel
