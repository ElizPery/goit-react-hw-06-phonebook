import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactListItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const handleDeleteContact = () => dispatch(deleteContact(id))

    return (<li className={css.listItemOfContacts}>
        <p className={css.nameOfContact}>{name}: {number}</p>
        <button className={css.deleteBtn} type='button' onClick={handleDeleteContact}>Delete</button>
    </li>)
}

export default ContactListItem;

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}