import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ renderContacts, visibleContacts }) => {
  return (
    <ul className={css.contactsList}>{renderContacts(visibleContacts)}</ul>
  );
};
export default ContactList;
