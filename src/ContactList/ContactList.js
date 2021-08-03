import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
    <div>
        <ul>
            {contacts.map(contact => (
                <li key={contact.id}>
                    <span>{contact.name}</span><span>{contact.number}</span>
                    <button onClick={()=>onDeleteContact(contact.id)}>Delete</button>
                </li>
                ))}
        </ul>
    </div>
    )
}

ContactList.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
}

export default ContactList;