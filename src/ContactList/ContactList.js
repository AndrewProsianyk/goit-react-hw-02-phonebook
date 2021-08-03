import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
    <div>
        <ul className={styles.contactList}>
            {contacts.map(contact => (
                <li
                    className={styles.listItem}
                    key={contact.id}>
                    <span className={styles.name}>{contact.name}:</span>
                    <span className={styles.number}>{contact.number}</span>
                    <button
                        className={styles.button}
                        onClick={() => onDeleteContact(contact.id)}>х</button>
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