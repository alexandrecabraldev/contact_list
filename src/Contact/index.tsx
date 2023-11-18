import { useDispatch } from "react-redux"
import { Button, ButtonContainer, ContainerContact } from "./style"
import { delContact } from "../Store/contactListSlice";

export interface PropsContact {
    name:string,
    phone: number,
    email: string,
}

export function Contact(props: PropsContact){
    const dispatch = useDispatch();

    // function handleDelContact(name: string){
    //     console.log(name)
    // }
    
    return(
        <ContainerContact>
            <h3>{props.name}</h3>
            <span>{props.phone}</span>
            <span>{props.email}</span>
            <ButtonContainer>
                <Button type="button" $red onClick={()=>dispatch(delContact(props.name))}>Deletar</Button>
                <Button type="button">Editar</Button>
            </ButtonContainer>
        </ContainerContact>
    )
}