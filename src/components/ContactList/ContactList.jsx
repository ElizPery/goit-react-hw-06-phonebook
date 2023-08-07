import ContactListItem from "components/ContactListItem";
import css from './ContactList.module.css'
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { handleFilter } from "components/Filter/Filter";

const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const filteredContacts = handleFilter(filter, contacts);

    return <ul className={css.listOfContacts}>{filteredContacts.map(element => {
        return <ContactListItem
            key={element.id}
            id={element.id}
            name={element.name}
            number={element.number}/>
    })}</ul>
}

export default ContactList;