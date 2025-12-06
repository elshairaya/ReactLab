import { useState } from "react";
import ContactList from "./component/ContactList";
import ContactForm from "./component/ContactForm";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]);

  const addPerson = (newPerson) => {
    setPeople([...people, newPerson]);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Contact Manager App</h1>
      <ContactForm addPerson={addPerson} people={people} />
      <ContactList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
