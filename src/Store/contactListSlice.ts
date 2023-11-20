import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Contact {
    name:string,
    phone: number,
    email: string,
    edit:boolean,
}

const user ={
    name: 'John',
    phone: 12345678900,
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

            console.log(index)
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
        editContact:(state, action:PayloadAction<Contact>)=>{
            state.map((item)=>{
                if(item.name===action.payload.name){
                    // item.name=action.payload.name
                    // item.email=action.payload.email
                    // item.phone=action.payload.phone
                    item.edit=action.payload.edit
                }
            })
            return state;
        }
    }
})

export const { addContact, delContact,editContact } = contactListSlice.actions
export default contactListSlice.reducer;