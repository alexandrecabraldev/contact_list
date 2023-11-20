import { Header } from "./Header";
import { Form } from "./Form";
import { ContainerApp } from "./Container/ContainerApp";
import { Contact } from "./Contact";
import { useSelector } from "react-redux";
import { RootState } from "./Store/store";

function App() {

  const contactList = useSelector((state:RootState)=> state.contactList)

  return (

    <>
      <Header/>
      <ContainerApp>
        <Form/>

        {
          contactList.map((item,index)=>{
            return (
              <Contact 
                key={item.email}
                index={index}
                name={item.name}
                phone={item.phone}
                email={item.email}
              />
            )
          })
        }
      </ContainerApp>
    </>
  
  )
}

export default App
