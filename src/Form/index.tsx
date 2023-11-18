import {FormInputs} from "../Form/style"

export function Form(){
    return(
        <FormInputs>
            <input type="text" name="" id=""  placeholder="Nome"/>
            <input type="email" name="" id="" placeholder="E-mail"/>
            <input type="tel" name="" id="" placeholder="Telefone"/>
            <button type='submit'>Adicionar</button>
        </FormInputs>
    )
}