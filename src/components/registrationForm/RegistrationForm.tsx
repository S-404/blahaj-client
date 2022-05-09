import React, {FC, useEffect, useState} from 'react'
import {IsValidInputsValues} from './types/RegistrationFormTypes'
import {emailCheck, password1Check, password2Check, usernameCheck} from '../../helpers/authValidations'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import {Link as RouterLink} from 'react-router-dom'
import {Form, Alert, FormFeedback, FormGroup, Input, Label, Button, NavLink} from 'reactstrap'

const RegistrationForm: FC = () => {

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
    }, [username, password1, password2, email])


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

    const isValidInputs = (username: string, email: string, password1: string, password2: string) => {
        return password1Check(password1).isValid &&
            password2Check(password1, password2).isValid &&
            usernameCheck(username).isValid &&
            emailCheck(email).isValid
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const data = new FormData(event.currentTarget)

        const username = data.get('username') as string
        const email = data.get('email') as string
        const password1 = data.get('password1') as string
        const password2 = data.get('password2') as string

        const isValid = isValidInputs(username, email, password1, password2)

        if (isValid && username && password1 && email) {
            registration(username, password1, email)
        }
    }

    return (

        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Username</Label>
                <Input
                    name={'username'}
                    value={username}
                    onChange={handlerUsernameInput}
                    invalid={isValidInputsValues.username.isInvalid}
                />
                <FormFeedback>
                    Use Letters and Spaces.
                </FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label>Email</Label>
                <Input
                    name={'email'}
                    value={email}
                    onChange={handlerEmailInput}
                    invalid={isValidInputsValues.email.isInvalid}
                />
                <FormFeedback>
                    Keep mail@mail.com template.
                </FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label>Password</Label>
                <Input
                    name={'password1'}
                    value={password1}
                    type={'password'}
                    onChange={handlerPassword1Input}
                    invalid={isValidInputsValues.password1.isInvalid}
                />
                <FormFeedback>
                    Should contain at least 1 digit, min 4 characters.
                </FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label>Repeat Password</Label>
                <Input
                    name={'password2'}
                    value={password2}
                    type={'password'}
                    onChange={handlerPassword2Input}
                    invalid={isValidInputsValues.password2.isInvalid}
                />
                <FormFeedback>
                    Please make sure your passwords match.
                </FormFeedback>
            </FormGroup>

            <Button type="submit">
                {loading ? 'Signing up...' : 'Sign up'}
            </Button>

            {error ? <Alert>{error}</Alert> : null}

            <NavLink tag={RouterLink} to="/login">
                <i>{'Already Registered? Sign In'}</i>
            </NavLink>

        </Form>

    )
}

export default RegistrationForm