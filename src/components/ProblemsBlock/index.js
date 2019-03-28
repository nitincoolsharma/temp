import React from 'react';
import classNames from 'classnames';
import Timer from '../Timer';
import PropTypes from 'prop-types';
import './ProblemBlock.css'

const ProblemBlock = ({ problems }) => (
    <div>
        <Timer hrs={4} mins={30} secs={0} />
        <div>
            <div className={classNames('flex-center', 'table-header-div')} >
                <div className="table-problem-title">
                    Problems
                </div>
                <div className="table-problem-submission">
                    Correct/Total Submissions
                </div>
            </div>
            {
                problems.map((problem, index) => (
                    <div key={`${problem.title}-${index}`} className="flex-center">
                        <div className="problem-title-col">
                            {problem.title}
                        </div>
                        <div className="problem-submission-col">
                            {problem.correctSubmissions}/{problem.totalSubmissions}
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
);

ProblemBlock.propTypes = {
    problems: PropTypes.array,
};

ProblemBlock.defaultProps = {
    problems: [
        {
           title: 'Monkey the marshal',
           correctSubmissions: 0,
           totalSubmissions: 3,
        },
        {
            title: 'Table the Ginger',
            correctSubmissions: 0,
            totalSubmissions: 3,
        },
        {
            title: 'Use the hashmap',
            correctSubmissions: 0,
            totalSubmissions: 3,
        },
        {
            title: 'Jumping Cow',
            correctSubmissions: 0,
            totalSubmissions: 3,
        },
        {
            title: 'Table Twister',
            correctSubmissions: 0,
            totalSubmissions: 3,
        },
        {
            title: 'Damping Down',
            correctSubmissions: 0,
            totalSubmissions: 3,
        },
    ],
};

export default ProblemBlock;
