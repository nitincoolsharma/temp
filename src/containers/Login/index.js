import React from 'react';
import { Button, ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = (name, e) => {
        this.setState({ [name]: e.target.value });
    };

    render() {
        const { email, password } = this.state;
        return (
            <div>
                <form>
                    <FormGroup
                        controlId="loginEmail"
                    >
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            type="email"
                            value={email}
                            placeholder="Enter Email"
                            onChange={(e) => this.handleChange('email', e)}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup
                        controlId="loginPassword"
                    >
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="password"
                            value={password}
                            placeholder="Enter Password"
                            onChange={(e) => this.handleChange('password', e)}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <Button bsStyle="primary" type="submit">Login</Button>
                </form>
            </div>
        );
    }
}

export default Login;