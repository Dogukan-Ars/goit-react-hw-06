import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

// ✅ Vite için daha güvenli storage tanımı
const storage = {
    getItem: (key) => Promise.resolve(localStorage.getItem(key)),
    setItem: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
    removeItem: (key) => Promise.resolve(localStorage.removeItem(key)),
};

import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

// Persist config
const contactsPersistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['items'],
};

// Persisted reducer
const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsReducer);

// Store
export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
});

export const persistor = persistStore(store);