import Header from "../Header/Header"
import Container from "@mui/material/Container"

interface LayoutProps {
  children: string | JSX.Element | JSX.Element[]
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        {children}
      </Container>
    </>
  )
}

export default Layout
