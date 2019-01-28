import React, { Component } from "react"
//import firebase from "firebase"
// const admin = require("../../../../config/firebaseAdminconfig")


// admin.auth().signInWithEmailAndPassword(
//   credentials.email,
//   credentials.password
// ).then(user => {
//   console.log(user)
// }

// )

class SignIn extends Component {
  state = {
    email: "",
    password: ""
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
          <h5 className="to-be-added">Sign In</h5>
          <div className="to-be-added">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>

          <div className="to-be-added">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <div className="to-be-added">
            <button className="to-be-added">Login</button>
          </div>
        </form>
      </div>
    )
  }
}
export default SignIn