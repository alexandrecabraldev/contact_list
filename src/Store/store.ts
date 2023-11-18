import { configureStore } from "@reduxjs/toolkit";
import contactListSlice from "./contactListSlice"

export const store = configureStore({
    reducer:{
        contactList: contactListSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;