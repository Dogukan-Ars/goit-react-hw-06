import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css'

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);

    // Filter contacts based on the search query
    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className={css.contactListContainer}>
            <h2 className={css.contactListTitle}>İletişim Listesi</h2>

            {filteredContacts.length === 0 ? (
                <p>Henüz kişi eklenmedi veya arama sonucu boş.</p>
            ) : (
                <ul className={css.contactList}>
                    {filteredContacts.map((contact) => (
                        <Contact
                            key={contact.id}
                            id={contact.id}
                            name={contact.name}
                            number={contact.number}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ContactList;