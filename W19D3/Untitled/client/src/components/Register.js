import React from "react";
import { Mutation } from "react-apollo";
import { REGISTER_USER } from "../graphql/mutations"

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", password: ""}

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, registerUser) {
        e.preventDefault();
        registerUser({
            variables: {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
        })
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
    }

    updateCache(cache, {data}) {
        console.log(data);
        cache.writeData({
            data: { isLoggedIn: data.register.loggedIn }
        });
    }

    render() {
        return(
            <Mutation 
                mutation={REGISTER_USER}
                onCompleted={data => {
                    const { token } = data.register; 
                    localStorage.setItem("auth-token", token);
                    this.props.history.push('/');
                }}
                update={(cache, data) => this.updateCache(cache, data)}
            >
                {(registerUser) => {
                    return(
                        <form onSubmit={(e) => this.handleSubmit(e, registerUser)}>
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" value={this.state.name} onChange={this.update("name")} />
                            <label htmlFor="email">Email</label>
                            <input id="email" type="text" value={this.state.email} onChange={this.update("email")} />
                            <label htmlFor="password">Password</label>
                            <input id="password" type="text" value={this.state.password} onChange={this.update("password")} />
                            <button>Sign Up</button>
                        </form>
                    )
                }}
            </Mutation>
        )

    }
}

export default Register;