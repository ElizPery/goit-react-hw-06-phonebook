import { createAction, nanoid } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/AddContact", (name, number) => {
    return {
        payload: {
            name,
            number,
            id: nanoid(),
        }
    }
});

export const deleteContact = createAction("contacts/DeleteContact");
export const setFilter = createAction("filter/SetFilter")
