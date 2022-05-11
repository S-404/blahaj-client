import React, {FC, useEffect, useState} from 'react'
import {FormGroup, Label} from 'reactstrap'
import MySelect from '../../UI/MySelect'
import {periodicity} from '../helpers/periodicity'
import {IPeriodicityValue} from '../types/periodicityTypes'
import {MySelectOption} from '../../UI/types/mySelectTypes'

interface DeadlineSelectorProps {
    defaultPeriodicity: IPeriodicityValue;
    defaultDeadline: number;
}

const DeadlineSelector: FC<DeadlineSelectorProps> = ({defaultPeriodicity, defaultDeadline}) => {

    const [selectedPeriodicity, setSelectedPeriodicity] = useState<IPeriodicityValue>(1)
    const [selectedDeadline, setSelectedDeadline] = useState<number>(1)
    const [deadlinesValues, setDeadlinesValues] = useState<MySelectOption[]>([])


    useEffect(()=>{
        if(defaultPeriodicity){
            setSelectedPeriodicity(defaultPeriodicity)
            setSelectedDeadline(defaultDeadline)
        }
    },[defaultPeriodicity])

    useEffect(() => {
        if (selectedPeriodicity) {
            const index = periodicity
                .findIndex(value => value.value === selectedPeriodicity)
            setDeadlinesValues (periodicity[index].deadlineArr)
        }
    }, [selectedPeriodicity])


    const periodicitySelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPeriodicity(+e.target.value)
    }

    const deadlineSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDeadline(+e.target.value)
    }

    return (
        <div className="d-flex flex-row">
            <FormGroup>
                <Label>Periodicity</Label>
                <MySelect
                    name="periodicity"
                    options={periodicity}
                    value={selectedPeriodicity}
                    onChange={periodicitySelectHandler}
                />
            </FormGroup>

            <FormGroup>
                <Label>Deadline</Label>
                <MySelect
                    name="deadline"
                    options={deadlinesValues}
                    value={selectedDeadline}
                    onChange={deadlineSelectHandler}
                />
            </FormGroup>
        </div>
    )
}

export default DeadlineSelector