import React from 'react';
import css from './App.module.css';

import Title from './Title';
import Form from './Form';
import Filter from './Filter';
import ContactList from './ContactList';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // Передає пропс в компонент форми
  formSubmitHandler = (contact, id) => {
    const normalizedName = contact.name.toLowerCase();
    const contactItem = {
      id,
      name: contact.name,
      number: contact.number,
    };
    const filteredContacts = this.state.contacts.filter(
      searchContact => searchContact.name.toLowerCase() === normalizedName
    );

    if (filteredContacts.length > 0) {
      alert(`${contact.name} is already in contacts`);
    } else {
      this.setState({
        contacts: [contactItem, ...this.state.contacts],
      });
    }
  };
  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    const search = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    // console.log(search);
    return search;
  };

  renderContacts = contacts => {
    return contacts.map(contact => (
      <li className={css.contact} key={contact.id}>
        {contact.name}: {contact.number}
        <button
          className={css.deleteBtn}
          onClick={() => this.onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ));
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContact();

    return (
      <div>
        <Title>Phonebook</Title>
        <Form onSubmit={this.formSubmitHandler} />

        <h2> Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          renderContacts={this.renderContacts}
          visibleContacts={visibleContacts}
        />
      </div>
    );
  }
}
