// Signup.js
import React, { Component } from 'react';
import './Signup.css'; // Import the shared styles
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = this.state;

    // Here you can implement your signup logic.
    if (password === confirmPassword) {
      // Redirect to a success page or perform other actions here.
      alert('Signup successful!');
    } else {
      this.setState({ error: 'Passwords do not match' });
    }
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
            <h2>Sign Up</h2>
            <div className="icon-container-outter">
              <div className="icon-container-inner">
                <FontAwesomeIcon icon={faUserPlus} size="10x" style={{ color: 'grey' }} />
              </div>
            </div>
            <form onSubmit={this.handleSubmit}>
              {/* Similar form structure as the login page */}
              <div className="form-group">
                <div>
                  <label htmlFor="email">Email</label>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <div>
                  <label htmlFor="password">Password</label>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <div>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                </div>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <button type="submit">Sign up</button>
            </form>
            {this.state.error && <p className="error-message">{this.state.error}</p>}
            <div className="additional-links">
              <a href="#login">Already have an account? Login</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
