import React, { Component } from "react";

class SignUp extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventdefault();
        console.log(this.state)
    };
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="to-be-added">

                    <h5 className="to-be-added">Sign Up</h5>

                    <div className="to-be-added">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>

                    <div className="to-be-added">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />

                    </div>

                    <div className="to-be-added">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>

                    <div className="to-be-added">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>

                    <div className="to-be-added">

                        <button className="to-be-added">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignUp