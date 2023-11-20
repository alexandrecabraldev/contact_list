import { useSelector } from "react-redux";
import { HeaderContainer } from "./style";
import { RootState } from "../Store/store";

export function Header(){
    const listContact = useSelector((state: RootState)=>state.contactList)
    return (
        <HeaderContainer>
            <h1>Agenda de contatos</h1>
            <h2>{listContact.length} contatos na agenda</h2>
        </HeaderContainer>
    );
}