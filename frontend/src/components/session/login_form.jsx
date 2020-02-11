import React from 'react';
import { withRouter } from 'react-router-dom';
import loginCSS from '../../stylesheets/login.css';
import resetCSS from '../../stylesheets/reset.css';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/');
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
      password: this.state.password
    };

    this.props.login(user);
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
      <div>
        <div className="login-top-header"></div>
        <div className="login-form-image-container">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <div className="login-form-container">
              <br />
              <h3>Log In to Whoop</h3>
              <p className="login-form-subheading">
                New to Whoop? <Link to="/signup">Sign up</Link>
              </p>
              <p className="login-form-legality">
                By logging in, you agree to Whoop's Terms of Service and Privacy
                Policy.
              </p>
              <div className="login-line-divider"></div>
              <input
                className="login-form-inputs"
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
              <br />
              <input
                className="login-form-inputs"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <br />
              <input className="login-form-button" type="submit" value="Log In" />
              {this.renderErrors()}
              <p className="login-sign-up">
                New to Whoop? <Link to="signup">Sign up</Link>
              </p>
            </div>
          </form>
          <div className="login-image-div">
            <img
              className="login-form-image"
              src="/static/images/signup-image.png"
              alt="Login Image"
            />
          </div>
        </div>
        <footer className="login-footer-container">
          <img className="login-footer-image" src="/static/images/city-landscape.png" alt=""/>
        </footer>
      </div>
    );
  }
}

export default withRouter(LoginForm);