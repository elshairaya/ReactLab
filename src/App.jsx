import { useState } from "react";
import ContactList from "./component/ContactList";
import ContactForm from './component/ContactForm'

function App() {
    const [people, setPeople] = useState([]);
const addPerson = (newPerson) => {
    setPeople([...people, newPerson]);
}
  return (
    <>
     <div style={{ textAlign: "center", marginTop: "50px" }}>
      <ContactForm addPerson={addPerson} />
      <ContactList people={people} />
    </div>
    </>
  )
}

export default App
