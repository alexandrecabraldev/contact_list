import { Header } from "./Header";
import { Form } from "./Form";
import { ContainerApp } from "./Container/ContainerApp";
import { Contact } from "./Contact";

function App() {


  return (

    <>
      <Header/>
      <ContainerApp>
        <Form/>
        <Contact/>
        <Contact/>
        <Contact/>
      </ContainerApp>
    </>
  
  )
}

export default App
