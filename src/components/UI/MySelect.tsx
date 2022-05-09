import React, {FC} from 'react'
import {Input} from 'reactstrap'
import {MySelectProps} from './types/mySelectTypes'



const MySelect: FC<MySelectProps> = ({name, options,onChange}) => {
    return (
        <Input
            name={name}
            type="select"
            onChange={onChange}
        >
            {options.map(option => (
                <option
                    value={option.value}
                    key={option.value + option.name}
                >
                    {option.name}
                </option>
            ))}
        </Input>
    )
}

export default MySelect