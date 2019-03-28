import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import LoginButton from '../components/Buttons/LoginButton';
import LeaderBoard from '../components/LeaderBoard';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Grid>
                    <Row>
                        <Col sm={12} md={9} lg={9}>
                            <LeaderBoard />
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

export default Home;