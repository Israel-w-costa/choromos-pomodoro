import "./styles/theme.css"
import "./styles/global.css"

import { Container } from "./Components/Container"
import { Heading } from "./Components/Heading"
import { Logo } from "./Components/Logo"

function App() {

  return (
    <>
  <Container >
    <Logo/>
  </Container>
  <Container >
    <Heading>Menu</Heading>
  </Container>
    </>
  )
}

export default App
