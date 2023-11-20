import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Contact {
    index?:number,
    name:string,
    phone: string,
    email: string,
    edit:boolean,
}

const user ={
    index: 0,
    name: 'John',
    phone: '12345678900',
    email: 'john@example.com',
    edit:false,
}
const initialState: Contact[]=[user]

export const contactListSlice = createSlice({
    name: 'contactListSlice',
    initialState,
    reducers:{
        addContact: (state, action: PayloadAction<Contact>)=>{
            const index = state.findIndex((item)=>{
                return item.edit
            })

            if(index===-1){
                return [...state,action.payload]
            }else{
                state[index].name=action.payload.name
                state[index].email=action.payload.email
                state[index].phone=action.payload.phone
                state[index].edit=false
                return state;
            }
        },

        delContact: (state, action: PayloadAction<string>)=>{
            const listFiltered = state.filter((item)=>{
                return item.name!==action.payload
            })

            return listFiltered
        },
        updateContact:(state, action:PayloadAction<Contact>)=>{
            
            if(action.payload.index !== undefined && action.payload.index>=0){
                state[action.payload.index] = action.payload
            }
            return state;
        }
    }
})

export const { addContact, delContact, updateContact } = contactListSlice.actions
export default contactListSlice.reducer;