import React, {FC, useMemo, useState} from 'react'
import {FormGroup, Label} from 'reactstrap'
import MySelect from '../../UI/MySelect'
import {periodicity} from '../helpers/periodicity'

const DeadlineSelector: FC = () => {

    const [selectedPeriodicity, setSelectedPeriodicity] = useState<number>(1)

    const periodicityValues = useMemo(() => periodicity, [])

    const deadlinesValues = useMemo(() => {

        const index = periodicityValues
            .findIndex(value => value.value === selectedPeriodicity)

        return periodicityValues[index].deadlineArr

    }, [selectedPeriodicity])


    const mySelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPeriodicity(+e.target.value)
    }

    return (
        <div className='d-flex flex-row'>
            <FormGroup>
                <Label>Periodicity</Label>
                <MySelect
                    name="periodicity"
                    options={periodicityValues}
                    onChange={mySelectHandler}
                />
            </FormGroup>

            <FormGroup>
                <Label>Deadline</Label>
                <MySelect
                    name="deadline"
                    options={deadlinesValues}
                />
            </FormGroup>
        </div>
    )
}

export default DeadlineSelector