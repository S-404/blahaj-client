import React, {FC, useEffect, useState} from 'react'
import {IsValidInputsValues} from '../types/RegistrationInputTypes'
import {emailCheck, password1Check, password2Check, usernameCheck} from '../../helpers/authValidations'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'

const RegistrationInputs: FC = () => {

    const {loading, error} = useTypedSelector(state => state.auth)
    const {registration} = useActions()

    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password1, setPassword1] = useState<string>('')
    const [password2, setPassword2] = useState<string>('')

    const [isValidInputsValues, setIsValidInputsValues] = useState<IsValidInputsValues>({
        username: {isValid: false, isInvalid: false},
        email: {isValid: false, isInvalid: false},
        password1: {isValid: false, isInvalid: false},
        password2: {isValid: false, isInvalid: false},
    })

    useEffect(() => {

        setIsValidInputsValues({
            ...isValidInputsValues,
            username: usernameCheck(username),
            email: emailCheck(email),
            password1: password1Check(password1),
            password2: password2Check(password1, password2)

        })
    }, [username, password1, password2])


    const handlerUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handlerEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlerPassword1Input = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword1(e.target.value)
    }
    const handlerPassword2Input = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword2(e.target.value)
    }

    const handlerRegistrationButton = () => {
        const {isValid: password1Valid} = password1Check(password1)
        const {isValid: password2Valid} = password2Check(password1, password2)
        const {isValid: usernameValid} = usernameCheck(username)
        const {isValid: emailValid} = emailCheck(email)
        const isValid =
            usernameValid &&
            emailValid &&
            password1Valid &&
            password2Valid
        if (isValid) {
            registration(username, password1, email)
        }
    }

    return (
        <div>
            <div>
                <h4>Username</h4>
                <input
                    value={username}
                    onChange={handlerUsernameInput}
                    autoComplete="none"
                />
                <div>
                    Use Letters and Spaces.
                </div>
            </div>

            <div>
                <h4>Email</h4>
                <input
                    value={email}
                    onChange={handlerEmailInput}
                    autoComplete="none"
                />
                <div>
                    Use Letters and Spaces.
                </div>
            </div>

            <div>
                <h4>Password</h4>
                <input
                    type={'password'}
                    value={password1}
                    onChange={handlerPassword1Input}
                />
                <div>
                    <span>Should contain at least one digit</span>
                    <br/>
                    <span>Should contain at least 4 characters</span>

                </div>
            </div>
            <div>
                <h4>Repeat Password</h4>
                <input
                    type={'password'}
                    value={password2}
                    onChange={handlerPassword2Input}

                />
                <div>
                    Please make sure your passwords match.
                </div>
            </div>

            <button
                onClick={handlerRegistrationButton}
                color="success"

            >
                {loading ? 'Signing up...' : 'Sign up'}
            </button>

            {error ? <div>{error}</div> : null}
        </div>
    )
}

export default RegistrationInputs