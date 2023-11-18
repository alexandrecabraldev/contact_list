import { Button, ButtonContainer, ContainerContact } from "./style"

export interface PropsContact {
    name:string,
    phone: number,
    email: string,
}

export function Contact(props: PropsContact){
    return(
        <ContainerContact>
            <h3>{props.name}</h3>
            <span>{props.phone}</span>
            <span>{props.email}</span>
            <ButtonContainer>
                <Button type="button" red>Deletar</Button>
                <Button type="button">Editar</Button>
            </ButtonContainer>
        </ContainerContact>
    )
}