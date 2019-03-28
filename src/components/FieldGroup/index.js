import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';

const FieldGroup = ({ id, label, help, ...props }) => (
    <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
);

FieldGroup.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    help: PropTypes.string,
};

FieldGroup.defaultProps = {
    label: '',
    id: '',
    help: '',
};

export default FieldGroup;