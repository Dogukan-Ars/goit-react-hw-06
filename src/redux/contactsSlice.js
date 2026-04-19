import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: []
    },
    reducers: {
        // Adding a contact
        addContact(state, action) {
            state.items.push(action.payload);
        },
        // Deleting a contact
        deleteContact(state, action) {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        }
    }
});

// Exporting the actions and selectors (used in src/components/ContactList/ContactList.jsx and src/components/Contact/Contact.jsx)
export const { addContact, deleteContact } = contactsSlice.actions;

// Selector to get the contacts from the state (used in src/components/ContactList/ContactList.jsx)
export const selectContacts = state => state.contacts.items;

// Exporting the reducer to be used in the store (used in src/redux/store.js)
export default contactsSlice.reducer;