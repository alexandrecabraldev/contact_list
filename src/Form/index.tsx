import {FormInputs} from "../Form/style"
import { useForm, SubmitHandler } from "react-hook-form"
import { PropsContact } from "../Contact"
import { useDispatch, useSelector } from "react-redux"
import { addContact } from "../Store/contactListSlice"
import { useEffect } from "react"
import { RootState } from "../Store/store"

export function Form(){

    const dispatch = useDispatch()
    const edit = useSelector((state: RootState)=>state.edit)

    const {register, handleSubmit, setValue,reset, watch}=useForm<PropsContact>()

    const onSubmit:SubmitHandler<PropsContact> = ({name,email,phone}: PropsContact)=> {

        dispatch(addContact({
            name,
            email,
            phone,
            edit:false,
        }))
        console.log({
            name,
            email,
            phone,
        })

        reset();
    }
    
    useEffect(()=>{
        setValue('name',edit.name)
        setValue('email', edit.email)
        setValue('phone', edit.phone)
    },[edit])

    console.log(watch('name'))

    return(
        <FormInputs onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Nome" {...register('name', {required:true})}/>
            <input type="email" placeholder="E-mail" {...register('email', {required:true})}/>
            <input type="tel" placeholder="Telefone" {...register('phone', {required:true})}/>
            <button type='submit'>{edit.edit?'Editar':'Adicionar'}</button>
        </FormInputs>
    )
}