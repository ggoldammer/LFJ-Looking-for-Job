import React from "react";

class SignIn extends Component {
  state = {

  }
  render() {
    return (
      <div className="container">
        <form onSubmit={} className="to-be-added">
          <h5 className="to-be-added">Sign In</h5>
          <div className="to-be-added">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={}/>
          </div>

          <div className="to-be-added">
              <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={}/>
          </div>

          <div className="to-be-added">
            <button className="to-be-added">Login</button>
          </div>
        </form>
      </div>
    )
  }
}