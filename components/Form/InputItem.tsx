import styles from './styles.module.css';
import {SelectionType} from '../../interfaces/dataInterfaces';

import {useEffect, useRef} from 'react';
import { useField } from '@unform/core';

type Props = {
    required?: boolean;
    name: string;
    type: string;
    labelName: string;
    info?: boolean;
    value?: string;
    change: (newValue: string) => void;
}

export const InputItem = ({required, name, type, labelName, info, value, change}: Props) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const { fieldName, defaultValue, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef,
            getValue: ref => {
                return ref.current.value
            },
            setValue: (ref, value) => {
                ref.current.value = value
            },
            clearValue: ref => {
                ref.current.value = ''
            },
        })
    }, [fieldName, registerField])


    return (
        <div className={styles.container}>
            <label className={styles.labelName}>{labelName}<span style={{color: '#FF1928'}}>*</span></label>
            <input
            onChange={e => change(e.target.value)}
            ref={inputRef} 
            id={fieldName} 
            className={info ? styles.info : styles.input} 
            type={type} name={name} readOnly={info ? true : false} 
            value={value}  
            required={required ? true : false}
            />
        </div>
    )
}