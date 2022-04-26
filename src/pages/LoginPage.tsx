import React, {FC, useState} from 'react'
import {useTypedSelector} from '../hooks/useTypedSelector'
import {useActions} from '../hooks/useActions'
import {Link} from 'react-router-dom'

const LoginPage: FC = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {loading, error} = useTypedSelector(state => state.auth)
    const {login} = useActions()

    const handlerUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handlerPasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handlerLoginButton = () => {
        if (username && password) login(username, password)
    }
    return (
        <div>

            <h2>Sign in to BLAHAJ</h2>

            <div>

                <h3>Username</h3>
                <input
                    value={username}
                    onChange={handlerUsernameInput}
                />


                <h3>Password</h3>
                <input
                    type={'password'}
                    value={password}
                    onChange={handlerPasswordInput}
                />

                {error ? <div>{error}</div> : null}
                <button
                    color="success"

                    onClick={handlerLoginButton}
                >
                    {loading ? 'Signing in...' : 'Sign in'}
                </button>
                <div>
                    <i> <Link to={'/registration'}>Create an account</Link></i>
                </div>

            </div>
        </div>
    )
}

export default LoginPage