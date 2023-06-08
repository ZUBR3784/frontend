import React from 'react'

function AddContactForm({addNewContacts}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const tel = e.target.tel.value;
        const email = e.target.email.value;

        addNewContacts({
            id: Date.now(),
            name,
            tel,
            email,
        });

        e.target.reset();
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Заголовок' required />
        <input type="text" name='tel' placeholder='Текс поста' required />
        <input type="text" name='email' placeholder='Текс поста' required />
        <button type='submit'>Добавить контакт</button>
    </form>
  )
}

export default AddContactForm