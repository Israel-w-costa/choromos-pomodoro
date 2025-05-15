import "./styles/theme.css"
import "./styles/global.css"

import { Container } from "./Components/Container"
import { Logo } from "./Components/Logo"
import { Menu } from "./Components/Menu"

function App() {

  return (
    <>
  <Container >
    <Logo/>
  </Container>
  <Container >
    <Menu/>
  </Container>
    </>
  )
}

export default App
