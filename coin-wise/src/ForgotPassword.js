// ForgotPassword.js
import React, { Component } from 'react';
import './ForgotPassword.css'; 
import Navbar from './Navbar'; 

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      error: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Add your ForgotPassword logic here
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, error: '' });
  };

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="container">
          <div className="form-container">
            <h2>Forgot Password</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <button type="submit">Reset Password</button>
            </form>
            {this.state.error && <p className="error-message">{this.state.error}</p>}
            <i>A link to reset your password will be sent to your email.</i>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
