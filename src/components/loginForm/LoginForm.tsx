import React from 'react'
import {TextField} from '@mui/material'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import Link from '@mui/material/Link'
import {Link as RouterLink} from 'react-router-dom'
import Box from '@mui/material/Box'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'

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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>

            <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
            >
                {loading ? 'Signing in...' : 'Sign in'}
            </Button>

            {error ? <Alert severity="error">{error}</Alert> : null}

            <Link component={RouterLink} to="/registration" variant="body2">
                <i>{'Don\'t have an account? Sign Up'}</i>
            </Link>

        </Box>
    )
}

export default LoginForm