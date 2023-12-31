import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const defaultContacts = {
    items: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: defaultContacts,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items = [action.payload, ...state.items]
            },
            prepare(name, number) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    }
                }
            }
        },
        deleteContact(state, action) {
            state.items = state.items.filter(contact => contact.id !== action.payload)
        }
    }
})

const persistConfig = {
  key: 'contacts',
  storage,
}

export const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer)

export const { addContact, deleteContact } = contactsSlice.actions;