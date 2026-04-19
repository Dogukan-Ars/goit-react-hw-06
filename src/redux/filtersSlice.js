import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',           // ← Ödevde istenen isim bu
    initialState: {
        name: "",                // ← Ödevde istenen alan bu
    },
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload;
        },
    },
});

export const { changeFilter } = filtersSlice.actions;

export const selectNameFilter = (state) => state.filters.name;

export default filtersSlice.reducer;