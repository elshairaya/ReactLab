import ContactItem from './ContactItem';
import "./css/ContactList.css"
const ContactList = ({ people, setPeople }) => {
  const deletePerson = (id) => {
    setPeople(people.filter((p) => p.id !== id));
  };
  return (
    <div className="contact-list-box">
      <h2 className="contact-list-title">Contacts:</h2>

      {people.length === 0 ? (
        <p className="no-contacts">No contacts yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {people.map((person, index) => (
            <ContactItem
              key={person.id}
              person={person}
              index={index}
              deletePerson={deletePerson}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;