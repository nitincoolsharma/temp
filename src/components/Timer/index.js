import React from 'react';
import PropTypes from 'prop-types';

const style = {
    padding: '12px',
    fontWeight: '600',
    fontSize: '14px',
    textAlign: 'center',
    background: '#f8f8f8',
    border: '1px solid #e7e7e7',
};

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hrs: props.hrs,
            mins: props.mins,
            secs: props.secs,
        };
    }

    componentDidMount() {
        this.timeInterval = setInterval(this.decrementTime, 1000);
    };

    decrementTime = () => {
        let { hrs, mins, secs } = this.state;
        secs = (secs === 0) ? 59 : secs - 1;
        if (secs === 0) {
            mins = (mins === 0) ? 59 : mins - 1;
        }
        if (mins === 0) {
            hrs = hrs - 1;
        }
        if (hrs === 0) {
            clearInterval(this.timeInterval);
        }
        this.setState({ hrs, mins, secs });
    };

    attachZero = (t) => t < 10 ? `0${t}` : t;

    render() {
        const { hrs, mins, secs } = this.state;
        return (
            <div style={style}>
                Time Remaining : {this.attachZero(hrs)}:{this.attachZero(mins)}:{this.attachZero(secs)}
            </div>
        );
    }
}

Timer.propTypes = {
    hrs: PropTypes.number,
    mins: PropTypes.number,
    secs: PropTypes.number,
};

Timer.defaultProps = {
    hrs: 0,
    mins: 0,
    secs: 0,
};

export default Timer;