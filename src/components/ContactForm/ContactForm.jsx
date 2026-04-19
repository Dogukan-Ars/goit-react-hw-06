import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !number) return;

        const newContact = {
            id: Date.now().toString(),   // basit id (ödev için yeterli)
            name,
            number,
        };

        dispatch(addContact(newContact));   // Redux'a ekliyoruz

        // Formu temizle
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handleSubmit} className={css.contactForm} >
            <input
                className={css.formItem}
                type="text"
                placeholder="İsim"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                className={css.formItem}
                type="tel"
                placeholder="Telefon Numarası"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
            />
            <button type="submit" className={css.formButton}>
                Ekle
            </button>
        </form >
    );
};

export default ContactForm;