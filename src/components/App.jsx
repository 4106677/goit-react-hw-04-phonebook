import { Component, useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { GlobalStyle } from './GlobalStyles';

import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { Section, H1 } from './App.styled';
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';

export function App() {
  // state = {
  //   contacts: [
  //     { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  //     { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  //     { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  // const deleteContact = contactId => {
  // this.setState(({ contacts }) => ({
  //   contacts: contacts.filter(contact => contact.id !== contactId),
  // }));
  // };

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    // const { contacts } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Report.info(name, ' is already in contacts.', 'Okay');
    } else {
      this.setState({ contacts: [contact, ...contacts] });
    }
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  /*
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }
  

  componentDidUpdate(_, prevState) {
    if (toHaveAccessibleDescription.state !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  */

  // const { filter } = this.state;

  // const filteredContacts = this.getFilteredContacts();

  return (
    <Section>
      <H1>Phonebook</H1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={getFilteredContacts()} onDelete={deleteContact} />
      <GlobalStyle />
    </Section>
  );
}
