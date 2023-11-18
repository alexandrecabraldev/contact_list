import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Contact {
    name:string,
    phone: number,
    email: string,
}

const user ={
    name: 'John',
    phone: 12345678900,
    email: 'john@example.com',
}
const initialState: Contact[]=[user]

export const contactListSlice = createSlice({
    name: 'contactListSlice',
    initialState,
    reducers:{
        addContact: (state, action: PayloadAction<Contact>)=>{
            return [...state,action.payload]

        },
        delContact: (state, action: PayloadAction<string>)=>{
            const listFiltered = state.filter((item)=>{
                return item.name!==action.payload
            })

            return listFiltered
        }  
    }
})

export const { addContact, delContact } = contactListSlice.actions
export default contactListSlice.reducer;