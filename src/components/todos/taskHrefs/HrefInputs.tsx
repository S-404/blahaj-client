import React, {FC, useEffect, useState} from 'react'
import {FormGroup, Input, Label} from 'reactstrap'
import {ITaskHrefValues} from '../../../services/types/tasksResponse'


const HrefInputs: FC<ITaskHrefValues> = (defaultValues) => {

    const [inputsValues, setInputsValues] = useState<ITaskHrefValues>({
        href: '',
        shortName: '',
        isMain: false
    })

    const inputTaskHrefHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputsValues({...inputsValues, href: e.target.value})
    }

    const inputShortNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputsValues({...inputsValues, shortName: e.target.value})
    }

    const inputIsMainHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputsValues({...inputsValues, isMain: e.target.checked})
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
            <FormGroup>
                <Input
                    id="isMain"
                    name="isMain"
                    type="checkbox"
                    className="m-1"
                    checked={inputsValues.isMain}
                    onChange={inputIsMainHandler}
                />
                <Label htmlFor="isMain">is Main Link</Label>
            </FormGroup>
        </div>
    )
}

export default HrefInputs