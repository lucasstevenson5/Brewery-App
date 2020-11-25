import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }
    }

    updateForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="LogIn">
                <h1>Log In Page</h1>
                {this.props.error && <div>{this.props.error}</div>}
                <form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.updateForm}
                    />
                    <input
                        type="text"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.updateForm}
                    />
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

export default Login;