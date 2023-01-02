import PropTypes from 'prop-types';
import { Input, Title } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <div>
    <Title>Find contacts by name</Title>
    <Input type="text" name="filter" value={value} onChange={onChange} />
  </div>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
