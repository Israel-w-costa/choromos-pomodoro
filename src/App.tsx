import "./styles/theme.css"
import "./styles/global.css"

import { Container } from "./Components/Container"
import { Logo } from "./Components/Logo"
import { Menu } from "./Components/Menu"
import { CountDown } from "./Components/CountDown"
import { Input } from "./Components/Input"
import { Cycles } from "./Components/Cycles"
import { Button } from "./Components/Button"

import { PlayCircleIcon, StopCircleIcon} from "lucide-react"

function App() {

  return (
    <>
      <Container >
        <Logo />
      </Container>
      <Container >
        <Menu />
      </Container>
      <Container >
        <CountDown />
      </Container>
      <form className="form" action="">
        <div className="formRow">
          <Input 
          id="meuInput" 
          labelText="Task" 
          type="text" 
          placeholder="Digite algo" />
        </div>
        <div className="formRow">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="formRow">
         <Cycles/>
        </div>
        <div className="formRow">
           <Button icon={<PlayCircleIcon />} color='green' />
            <Button icon={<StopCircleIcon />} color='red' />
        </div>
      </form>
    </>
  )
}

export default App
