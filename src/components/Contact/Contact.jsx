import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';
import { BiTrash } from 'react-icons/bi';

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id));
    };

    return (
        <li className={css.contactItem}>
            <span className={css.contactTitle}>
                <span className={css.contactName}>{name}</span>
                <span className={css.contactNumber}>{number}</span>
            </span>
            <button onClick={handleDelete} className={css.deleteButton}>
                <BiTrash className={css.deleteIcon} />
            </button>
        </li>
    );
};

export default Contact;