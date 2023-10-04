import Grid from "@mui/material/Unstable_Grid2"
import { Typography } from "@mui/material"
import { useState, useRef } from "react"
import { Slide, Zoom } from "@mui/material"
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel"

const Home = () => {
  const ref = useRef(1000)
  const refTitle = useRef(500)

  const [translationText, setTranslationText] = useState(false)
  const [translationTitle, setTranslationTitle] = useState(false)

  setTimeout(() => {
    setTranslationText(true)
  }, ref.current)

  setTimeout(() => {
    setTranslationTitle(true)
  }, refTitle.current)

  return (
    <Grid container>
      <Grid xs={12} md={4}>
        <Slide
          in={translationTitle}
          direction="up"
          style={{ transitionDuration: "500ms" }}
        >
          <Typography variant="h2">Gabriel Andres</Typography>
        </Slide>
        <Slide
          in={translationText}
          direction="right"
          style={{ transitionDuration: "800ms" }}
        >
          <Typography variant="h6">Software Developer</Typography>
        </Slide>
        <Slide
          in={translationText}
          direction="right"
          style={{ transitionDuration: "200ms" }}
        >
          <Typography variant="body2">
            Two years of experience in Web development using JavaScript as main
            stack. Self-taught, objective oriented and a great teammate.
          </Typography>
        </Slide>
      </Grid>
      <Grid xs={12} md={8}>
        <Zoom in={translationTitle}>
          <img
            src="/assets/images/image1.png"
            alt="Web development"
            style={{ width: "90%", maxWidth: "550px" }}
          />
        </Zoom>
      </Grid>
      <Slide in={translationTitle} direction="up">
        <Grid container justifyContent={"center"} xs={12}>
          <HomeCarousel />
        </Grid>
      </Slide>
    </Grid>
  )
}

export default Home
