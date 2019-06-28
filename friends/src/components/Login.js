import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../actions';

import { TextField, PrimaryButton } from 'office-ui-fabric-react';

class Login extends Component {

    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleChange = evt => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [evt.target.name]: evt.target.value
            }
        });
    };

    handleLogin = evt => {
        evt.preventDefault();
        this.props
            .login(this.state.credentials)
            .then(() => this.props.history.push('/protected'));
    };

    render() {
        return(
            <div className="login-form">
                <form onSubmit={this.handleLogin}>
                    <TextField 
                        type="text" 
                        name="username" 
                        value={this.state.credentials.username} 
                        onChange={this.handleChange} 
                        label="Username" 
                    />
                    <TextField  
                        type="password" 
                        name="password" 
                        value={this.state.credentials.password} 
                        onChange={this.handleChange} 
                        label="Password" 
                    />
                    <div className="btn">
                        <PrimaryButton onClick={this.handleLogin}>
                            Sign In
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { login })(Login);