import React from 'react';
import { withRouter } from 'react-router-dom';
import signupCSS from '../../stylesheets/signup.css';
import signUpImage from '../../images/signup-image.png'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({ errors: nextProps.errors })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-page">
        <div className="signup-nav">
          <span>Whoop</span>
        </div>
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="login-form">
              <p>Sign Up for Whoop</p>
              <p>Connect with great local business</p>
              <p>
                By continuing, you agree to Whoop's Terms of Service and
                acknowledge Whoop's Privacy Policy
              </p>
              <br />
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("handle")}
                placeholder="Username"
              />
              <br />
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <br />
              <input
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="Confirm Password"
              />
              <br />
              <input type="submit" value="Submit" />
              {this.renderErrors()}
            </div>
          </form>
          <img className="form-image" src={signUpImage} />
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);