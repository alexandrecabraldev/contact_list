import {FormInputs} from "../Form/style"
import { useForm, SubmitHandler } from "react-hook-form"
import { PropsContact } from "../Contact"
import { useDispatch } from "react-redux"
import { addContact } from "../Store/contactListSlice"

export function Form(){

    const dispatch = useDispatch()

    const {register, handleSubmit, watch}=useForm<PropsContact>()

    const onSubmit:SubmitHandler<PropsContact> = ({name,email,phone}: PropsContact)=> {

        dispatch(addContact({
            name,
            email,
            phone,
        }))
        console.log({
            name,
            email,
            phone
        })
    }

    console.log(watch('name'))
    return(
        <FormInputs onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Nome" {...register('name', {required:true})}/>
            <input type="email" placeholder="E-mail" {...register('email', {required:true})}/>
            <input type="tel" placeholder="Telefone" {...register('phone', {required:true})}/>
            <button type='submit'>Adicionar</button>
        </FormInputs>
    )
}