import { useDispatch } from "react-redux"
import { Button, ButtonContainer, ContainerContact } from "./style"
import { delContact } from "../Store/contactListSlice";
import { editItem } from "../Store/editSlice";
import { editContact } from "../Store/contactListSlice";

export interface PropsContact {
    index:number,
    name:string,
    phone: number,
    email: string,
}

export function Contact(props: PropsContact){
    const dispatch = useDispatch();

    function handleEdit(){
        const editItemArgument = {
            name: props.name,
            email: props.email,
            phone: props.phone,
            edit: true,
            index:props.index,
        }
        dispatch(editItem(editItemArgument))
        dispatch(editContact(editItemArgument))
    }

    return(
        <ContainerContact>
            <h3>{props.name}</h3>
            <span>{props.phone}</span>
            <span>{props.email}</span>
            <ButtonContainer>
                <Button type="button" $red onClick={()=>dispatch(delContact(props.name))}>Deletar</Button>
                <Button type="button" onClick={handleEdit}>Editar</Button>
            </ButtonContainer>
        </ContainerContact>
    )
}