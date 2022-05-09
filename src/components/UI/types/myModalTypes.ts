import React from 'react'

export interface MyModalProps {
    visible: boolean;
    setVisible: (value: boolean) => void;
    children: React.ReactElement;
    title: string;
}