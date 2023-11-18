import { Button, ButtonContainer, ContainerContact } from "./style"

export function Contact(){
    return(
        <ContainerContact>
            <h3>Gian Souza</h3>
            <span>01234567899</span>
            <span>gian@email.com</span>
            <ButtonContainer>
                <Button type="button" red>Deletar</Button>
                <Button type="button">Editar</Button>
            </ButtonContainer>
        </ContainerContact>
    )
}