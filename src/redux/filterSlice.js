import { createSlice } from "@reduxjs/toolkit";

const defaultFilter = '';

const filterSlice = createSlice({
    name: "filter",
    initialState: defaultFilter,
    reducers: {
        setFilter(_, action) {
            return action.payload;
        }
    }
})

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;