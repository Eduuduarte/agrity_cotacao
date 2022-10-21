import styles from './styles.module.css';
import {SelectionType} from '../../interfaces/dataInterfaces';

import {useEffect, useRef} from 'react';
import { useField } from '@unform/core';

type Props = {
    required?: boolean;
    value: Array<SelectionType>;
    name: string;
    labelName: string;
}

export const SelectItem = ({required, value, name, labelName}: Props) => {

    const inputRef = useRef<HTMLSelectElement>(null);

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
            <select className={styles.select} id={fieldName} ref={inputRef}>
                {value.map((index, key) => (
                    <option key={key} className={styles.option} value={index.title}>{index.title}</option>
                ))}
            </select>
        </div>
    )
}