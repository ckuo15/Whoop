import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import signupCSS from '../../stylesheets/signup.css';
import resetCSS from '../../stylesheets/reset.css';

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
    this.loginDemoUser = this.loginDemoUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.clearedErrors = false;
    this.clearErrors = this.clearErrors.bind(this);
  }

  loginDemoUser(e) {
    e.preventDefault();
    const user = {
      email: 'demo@gmail.com',
      password: 'hunter12'
    }
    this.props.login(user);
  };

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

  clearErrors() {
    this.setState( {errors: {} })
  };

  renderErrors() {
    return (
      <div className='errors-container'>
        <ul className='errors-ul'>
          {Object.keys(this.state.errors).map((error, i) => (
            <li key={`error-${i}`}>{this.state.errors[error]}</li>
          ))}
        </ul>
        <p onClick= {this.clearErrors} className='dismiss-link'>x</p>
      </div>
    );
  }

  render() {
    return (
      <div className="signup-page">
        <div className="signup-nav">
          <a href="/">
            <img className="icon-image" src='/static/images/whooplogo.png' />
          </a>
        </div>
        {Object.keys(this.state.errors).length === 0 ? null : this.renderErrors()}
        <div className="signup-form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="sign-up-left-side">
              <p className='signupforwhoop'>Sign Up for Whoop</p>
              <p className='connect'>Connect with great local business</p>
              <p className='agreement'>
                By continuing, you agree to Whoop's Terms of Service and
                acknowledge Whoop's Privacy Policy
              </p>
              <br />
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="Username"
                className= 'username'
              />
              <br />
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
                className='email'
              />
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
                className='password'
              />
              <br />
              <input
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="Confirm Password"
                className='password2'
              />
              <br />
              <p className='marketing'>
                You also understand that Whoop may send marketing emails about Whoop's products, services, and local events. You can unsubscribe at any time.
              </p>
              <br />
              <input className='submit' type="submit" value="Sign Up" />
              <div className='signup-demo-login'>
                <button className='demo-login-button-signup' onClick={this.loginDemoUser}>Demo Login</button>
              </div>
              <div>
                <span className='loginLink'>Already on Whoop?</span>
                <span><Link className='loginbutton' to='/login'>Log In</Link></span>
              </div>
            </div>
          </form>
          <div className='.signup-right-side'>
              <img className="form-image" src='/static/images/signup-image.png' />
          </div>
        </div>
        <div className='bottom'>
          <img className='building' src='/static/images/footer.png'/>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);