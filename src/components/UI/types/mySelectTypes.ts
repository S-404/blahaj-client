import React from 'react'

export interface MySelectOption {
    value: number;
    name: string;
}

export interface MySelectProps {
    name: string;
    options: MySelectOption[];
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}