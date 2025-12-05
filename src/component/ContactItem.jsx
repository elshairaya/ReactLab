import "./css/ContactItem.css"
function ContactItem({ person, index, deletePerson }) {
  return (
    <li className="contact-item">
      <span>
        {index + 1}. <strong>{person.username}</strong> - {person.Email}
      </span>

      <button
        className="delete-btn"
        onClick={() => deletePerson(person.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default ContactItem;