import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../Buttons';
import { getDateTimeStr } from '../../constants/DateUtils';

class Contest extends React.Component {
    render() {
        const { title, time, link, isCompleted, isIndefinite, handleButtonClick, urlKey } = this.props;
        console.log('ABCDEF', urlKey);
        return (
            <div className={classnames('d-flex', 'justify-space-between', 'align-items-center', 'contest-box')}>
                <div style={{ width: '33%' }} className="contest-title">
                    {title}
                </div>
                <div style={{ width: '33%', textAlign: 'center' }} className="contest-time">
                    {
                        isIndefinite ?
                            'Open Indefinitely'
                            :
                            getDateTimeStr(time)
                    }
                </div>
                <div style={{ width: '33%', textAlign: 'right' }}>
                    {
                        (!isCompleted) ?
                            <a href={link}>View Details</a> :
                            <span>Ended</span>

                    }
                    <Button
                        onClick={() => handleButtonClick(urlKey)}
                        text={isCompleted ? 'View Challenges' : 'Enter'}
                    />
                </div>
            </div>
        )
    }
}

Contest.propTypes = {
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    urlKey: PropTypes.string,
    isCompleted: PropTypes.bool,
    handleButtonClick: PropTypes.func.isRequired,
    isIndefinite: PropTypes.bool,
};

Contest.defaultProps = {
    key: '',
    isCompleted: false,
    isIndefinite: false,
};

export default Contest;
