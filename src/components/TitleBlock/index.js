import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

const TitleBlock = ({ img }) => (
    <div style={{ backgroundImage: `url(${img})` }} className="block-div">
        <div className="center-block">
        </div>
    </div>
);

TitleBlock.propTypes = {
    img: PropTypes.string.isRequired,
};

TitleBlock.defaultProps = {
    description: '',
};

export default TitleBlock;