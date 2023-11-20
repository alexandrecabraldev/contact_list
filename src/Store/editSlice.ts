import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ContactEdited {
    name:string,
    phone: string,
    email: string,
    edit:boolean,
    index:number,
}

const initialState: ContactEdited={
    name:'',
    phone:'',
    email:'',
    edit:false,
    index:-1,
}

export const editSlice = createSlice({
    name: 'editSlice',
    initialState,
    reducers:{ 
        editItem: (state, action: PayloadAction<ContactEdited>)=>{
            state.name = action.payload.name;
            state.phone = action.payload.phone;
            state.email = action.payload.email;
            state.edit = action.payload.edit;
            state.index=action.payload.index;
            return state;
        },
        resetEdit:(state)=>{
            state.edit=false;
            return state;
        }  
    }
})

export const { editItem,resetEdit } = editSlice.actions;
export default editSlice.reducer;