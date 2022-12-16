import { Box, Contact, Button } from './ContactList.styled';

import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <Box>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id}>
          {name}: {number}
          <Button type="button" onClick={() => onDelete(id)}>
            X
          </Button>
        </Contact>
      ))}
    </Box>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
