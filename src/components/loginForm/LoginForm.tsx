import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import {Alert, Button, NavLink, Form, FormGroup, Input, Label} from 'reactstrap'

const LoginForm = () => {

    const {loading, error} = useTypedSelector(state => state.auth)
    const {login} = useActions()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const username = data.get('username')
        const password = data.get('password')

        if (username && password) {
            login(username.toString(), password.toString())
        }
    }

    return (
        <Form onSubmit={handleSubmit}>

            <FormGroup>
                <Label for="username">Username</Label>
                <Input name="username"/>
            </FormGroup>

            <FormGroup>
                <Label for="password">Password</Label>
                <Input
                    type="password"
                    name="password"
                />
            </FormGroup>


            <Button type="submit">
                {loading ? 'Signing in...' : 'Sign in'}
            </Button>

            {error ? <Alert>{error}</Alert> : null}

            <NavLink tag={RouterLink} to="/registration">
                <i>{'Don\'t have an account? Sign Up'}</i>
            </NavLink>

        </Form>
    )
}

export default LoginForm