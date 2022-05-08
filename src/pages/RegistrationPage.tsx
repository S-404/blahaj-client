import React, {FC, useEffect} from 'react'
import RegistrationForm from '../components/registrationForm/RegistrationForm'
import {useActions} from '../hooks/useActions'
import {Container} from 'reactstrap'


const RegistrationPage: FC = () => {

    const {setSelectedPage} = useActions()

    useEffect(()=>{
        setSelectedPage('Registration')
    },[])


    return (
        <Container className="col-md-3 mt-5">

                <h5>Sign up to BLAHAJ</h5>

                <RegistrationForm/>

        </Container>
    )
}

export default RegistrationPage