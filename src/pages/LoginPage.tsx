import React, {FC, useEffect} from 'react'
import {Container} from 'reactstrap'
import LoginForm from '../components/loginForm/LoginForm'
import {useActions} from '../hooks/useActions'

const LoginPage: FC = () => {
    const {setSelectedPage} = useActions()
    useEffect(()=>{
        setSelectedPage('Login')
    },[])
    return (
        <Container className="col-md-3 mt-5">
                <h5>Sign in to BLAHAJ</h5>
                <LoginForm/>
        </Container>
    )
}

export default LoginPage