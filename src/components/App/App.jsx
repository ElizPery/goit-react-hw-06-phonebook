import { ContactForm } from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

export function App() {
    
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) ?? defaultContacts;
  // });

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

 return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
}