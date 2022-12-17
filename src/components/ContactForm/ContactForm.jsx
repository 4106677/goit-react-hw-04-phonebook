import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Input, Label, Button } from './ContactForm.styled';

export default function ContactForm({ onSubmit }) {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      case 'name':
        setName(e.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ name, number });
    onSubmit({ name, number });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label>Number</Label>
        <Input
          type="tel"
          name="number"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
