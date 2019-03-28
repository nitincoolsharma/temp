import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import LoginButton from '../../components/Buttons/LoginButton';
import TitleBlock from '../../components/TitleBlock';
import ProblemBlock from '../../components/ProblemsBlock';

class ContestDetails extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Grid>
                    <Row>
                        <Col sm={12} md={9} lg={9}>
                            <div style={{ height: '20em', width: '100%' }}>
                                <TitleBlock
                                    title="Facebook HackerCup 2K19"
                                    img="/assets/images/facebook.png"
                                />
                            </div>
                            <div>
                                <ProblemBlock />
                            </div>
                        </Col>
                        <Col sm={12} md={3} lg={3}>
                            <div style={{ margin: '0 0 2em 0' }}>
                                <LoginButton
                                    text="Login With Facebook"
                                    bsStyle="primary"
                                />
                            </div>
                            <div>
                                <LoginButton
                                    text="Login With Twitter"
                                    bsStyle="info"
                                />
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </React.Fragment>
        );
    }
}

export default ContestDetails;