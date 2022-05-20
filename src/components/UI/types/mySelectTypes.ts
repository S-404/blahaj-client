import React from 'react'

export interface MySelectOption {
    value: number | string;
    name: string;
}

export interface MySelectProps {
    name: string;
    options: MySelectOption[];
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: number;
}