import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const LoginButton = ({ text, type, ...props }) => (
    <Button
        type={type}
        {...props}
    >
        {text}
    </Button>
);

LoginButton.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
};

LoginButton.defaultProps = {
    text: '',
    type: 'button',
};

export default LoginButton;
