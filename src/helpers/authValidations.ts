import {isValidEmail, isValidPassword, isValidName} from './validations'
import {isValidValues} from '../components/registrationForm/types/RegistrationFormTypes'


export const password1Check = (password1: string): isValidValues => {
    return {
        isValid: isValidPassword(password1) && password1.length > 0,
        isInvalid: !isValidPassword(password1) && password1.length > 0
    }
}

export const password2Check = (password1: string, password2: string): isValidValues => {
    return {
        isValid: password1 === password2 && password2.length > 0,
        isInvalid: password1 !== password2 && password2.length > 0,
    }
}

export const usernameCheck = (username: string): isValidValues => {
    return {
        isValid: isValidName(username) && username.length > 0,
        isInvalid: !isValidName(username)
    }
}

export const emailCheck = (email: string): isValidValues => {
    return {
        isValid: isValidEmail(email) && email.length > 0,
        isInvalid: !isValidEmail(email) && email.length > 0
    }
}
