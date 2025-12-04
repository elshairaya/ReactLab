import React from 'react';

const ContactList = ({ people }) => {
  return (
    <div>
      <ul>
        {people.map((person) => {
          return (
          <li>
           Name: <strong>{person.username}</strong>, Email: {person.Email}
          </li>
        );
        })}
      </ul>
    </div>
  );
}

export default ContactList;