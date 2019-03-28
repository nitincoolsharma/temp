import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import classnames from 'classnames';
import { Col, Grid, Row } from 'react-bootstrap';
import Contest from '../../components/Contest';

class AllContest extends React.Component {
    handleContestButtonClick = (urlKey) => {
        const { history } = this.props;
        history.push(`/contest/challenges/${urlKey}`);
    };

    render() {
        const { contests } = this.props;
        const archived = get(contests, 'archived', []);
        const active = get(contests, 'active', []);
        return (
            <Grid>
                <Row>
                    <Col md={9} lg={9} sm={12}>
                        <div>
                            <div className={classnames('page-title', 'mt1', 'mb1')}>
                                Contests
                            </div>
                            <hr />
                            <div className={classnames('contest-type', 'mb1')}>
                                Active Contests
                            </div>
                            <div>
                                {
                                    active.length === 0 ?
                                        <div className="no-contest-found">
                                            No Active Contest Now
                                        </div> :
                                        active.map(contest => (
                                            <Contest
                                                title={contest.title}
                                                time={contest.time}
                                                key={contest.key}
                                                urlKey={contest.key}
                                                isCompleted={false}
                                                handleButtonClick={this.handleContestButtonClick}
                                                isIndefinite={contest.isIndefinite}
                                            />
                                        ))
                                }
                            </div>
                            <div className={classnames('contest-type', 'mb1', 'mt2')}>
                                Archived Contest
                            </div>
                            <div>
                                {
                                    archived.length === 0 ?
                                        <div className="no-contest-found">
                                            No Archive Contest Now
                                        </div> :
                                        archived.map(contest => (
                                            <Contest
                                                title={contest.title}
                                                isCompleted={true}
                                                time={contest.time}
                                                key={contest.key}
                                                urlKey={contest.key}
                                                handleButtonClick={this.handleContestButtonClick}
                                                isIndefinite={contest.isIndefinite}
                                            />
                                        ))
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

AllContest.propTypes = {
    contests: PropTypes.object,
    history: PropTypes.object.isRequired,
};

AllContest.defaultProps = {
    contests: {
        active: [
            {
                title: 'Project Euler',
                time: null,
                isIndefinite: true,
                key: '',
            },
        ],
        archived: [
            {
                title: 'Find Google',
                time: 1548513237915,
                key: 'find-google',
            },
            {
                title: 'Find Google',
                time: 1548513237915,
                key: 'find-google',
            },
            {
                title: 'Find Facebook',
                time: 1548513247563,
                key: 'find-google',
            },
        ],
    },
};

export default AllContest;
