import { useState } from "react";
function ContactForm({ addPerson }){
      const [username, setUsername] = useState("");
    const [Email, setEmail] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const newPerson = {
            username,
            Email,
        };

        console.log(newPerson);
        // setPeople(people.push(newPerson));

        addPerson(newPerson);
        // console.log(people);

        setUsername("");
        setEmail("");

    }

    return(
 <div style={{ textAlign: "center", marginTop: "40px" }}>
            <hr style={{ margin: "30px 0" }} />
            <h1>Contact Manager App </h1>

            <h2>Add a Person</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={username}
                    onChange={(e) => setUsername(e.target.value)} />

                <input type="text" placeholder="Email" value={Email} style={{ marginLeft: "10px" }}
                    onChange={(e) => setEmail(e.target.value)}

                />
                <button type="submit" style={{ marginLeft: "10px" }}>
                    Add Person
                </button>
            </form>

        </div>    );
}
export default ContactForm;