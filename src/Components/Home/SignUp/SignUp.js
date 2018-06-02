import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './SignUp.css';
import { signUp, 
  logIn, 
  updateUserInfo, 
  confirmRegistration, 
  changePassword,
  forgotPassword,
  userSignout,
  cogToken,
  rememberDevice,
 } from '../../../Helper/Users/Users'
 
 import { NavBar } from '../NavBar/NavBar'

export class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      city: '',
    }
  }

  handleInputChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }
  
  userSignUp = (e) => {
    e.preventDefault()
    const validate = this.validateEmail();
    signUp(this.state)
    this.setState({email:'', password:'', city: ''})
  }

  validateEmail = () => {
    const {email, password, city} = this.state
    return(
      email.length === 0,
      password.length === 0,
      city.length === 0
    )
  }

  render () {
    return (
      <div className='si-su'>
        <NavBar />
        <div className='website'/> 
        <div className='forms'>
          <div className='signup-box'>
            <h1>AWC </h1>
            <button>Log in with Facebook </button>
            <button onClick={() => this.getToken()}>Log in with Google </button>              
            <form className='form' autoComplete='on'>
              <input
                name='email'
                type='email'
                onChange={this.handleInputChange}
                value={this.state.email} 
                autoComplete='on'
                placeholder='Email'
                className='email'/>
              <input
                name='password'
                onChange={this.handleInputChange}
                value={this.state.password} 
                autoComplete='on'
                type='password' 
                placeholder='Password'
                className='password'/>
              <input
                name= 'city'
                onChange={this.handleInputChange}
                value={this.state.city}  
                autoComplete='on'
                placeholder='City'
                className='city' />
              <button
                disabled={this.validateEmail()} 
                onClick={(e) => this.userSignUp(e)}
                className='signup'>Sign Up </button>
            </form>

            <div className='policy'> 
              <h3>By signing up, you agree to our Terms, Data Policy and Cookies Policy.</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return ({
    suggestedEvents: state.suggestedEvents
  });
};

export const mapDispatchToProps = dispatch => ({
  
});

SignUp.propTypes = {
  suggestedEvents: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);