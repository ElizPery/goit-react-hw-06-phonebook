import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, setFilter } from "./actions";

const defaultContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const defaultFilter = '';
    
export const contactsReducer = createReducer(defaultContacts, (builder) => {
    builder
        .addCase(addContact, (state, action) => ([action.payload, ...state]))
        .addCase(deleteContact, (state, action) => {
            return state.filter(contact => contact.id !== action.payload)
        })
})

export const filterReducer = createReducer(defaultFilter, (builder) => {
    builder
        .addCase(setFilter, (state, action) => (action.payload))
})