import React, {FC, useEffect, useState} from 'react'
import {FormGroup, Input, Label} from 'reactstrap'
import {ITaskHrefValues} from '../../../services/types/taskHrefsResponse'


const HrefInputs: FC<ITaskHrefValues> = (defaultValues) => {

    const [inputsValues, setInputsValues] = useState<ITaskHrefValues>({
        href: '',
        shortName: '',
    })

    const inputTaskHrefHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputsValues({...inputsValues, href: e.target.value})
    }

    const inputShortNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputsValues({...inputsValues, shortName: e.target.value})
    }


    useEffect(() => {
        setInputsValues({...defaultValues})
    }, [])

    return (
        <div>
            <FormGroup>
                <Label>Href</Label>
                <Input
                    value={inputsValues.href}
                    onChange={inputTaskHrefHandler}
                    name="taskHref"
                />
            </FormGroup>
            <FormGroup>
                <Label>Short Name</Label>
                <Input
                    value={inputsValues.shortName}
                    onChange={inputShortNameHandler}
                    name="shortName"
                    maxLength={50}
                />
            </FormGroup>
        </div>
    )
}

export default HrefInputs