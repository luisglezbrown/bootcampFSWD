import { useState } from "react";
import Form from "./components/Form";
import ContactList from "./components/ContactList";

export default function App() {

  const [contacts, setContacts] = useState([]);

  return (
    <div className="container">
      <Form setContacts={setContacts}/>
      <ContactList contacts={contacts} />
    </div>
  );
}