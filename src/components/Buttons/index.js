import React from 'react';
import PropTypes from 'prop-types';
import { Button as ReactButton } from 'react-bootstrap';

const Button = ({ text, type, ...props }) => (
    <ReactButton
        type={type}
        {...props}
    >
        {text}
    </ReactButton>
);

Button.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
};

Button.defaultProps = {
    text: '',
    type: 'button',
};

export default Button;
