import React,{useEffect, useState} from 'react'
import AddContactForm from './AddContactForm'

function ContactList() {
  const[contacts, setContacts] = useState([]);
  useEffect(()=>{
    
  })
    function addNewContacts(newContact) {
        setContacts((prevContacts)=>[...prevContacts, newContact]);
        
    }
  return (
    <div>
        <h1>Добавьте новый контакт</h1>
        <AddContactForm addNewContacts={addNewContacts}/>
        <h2> Список ваших контактов</h2>
        {contacts.map((contact)=>(
            <div key={contact.id}>
                
                <p>Имя:{contact.name}   телефон:{contact.tel}   почта:{contact.email}</p>
            </div>
        ))}
    </div>
  );
}

export default ContactList