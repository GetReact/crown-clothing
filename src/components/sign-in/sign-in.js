import React, { Component } from 'react'
import FormInput from '../form-input/form-input'
import './sign-in.scss'
import CustomButton from '../custom-button/custom-button'
import { signInWithGoogle } from '../../firebase/firebase.utils'



export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault()
        this.setState({ email: '', password: '' })
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
        // dynamic assignment instead of assigning email in one function and password in another function
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        type='email'
                        required />
                    <FormInput name='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        type='password'
                        required />
                    <div className="buttons">
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign In with Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}
