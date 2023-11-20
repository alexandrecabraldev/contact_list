import { configureStore } from "@reduxjs/toolkit";
import contactListSlice from "./contactListSlice"
import editSlice  from "./editSlice";

export const store = configureStore({
    reducer:{
        contactList: contactListSlice,
        edit: editSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;