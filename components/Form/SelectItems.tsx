import styles from './styles.module.css';
import {data, SelectionType} from '../../interfaces/dataInterfaces';

import {useEffect, useRef} from 'react';
import { useField } from '@unform/core';

type Props = {
    required?: boolean;
    value: Array<data>;
    name: string;
    labelName: string;
    change?: (newValue: string) => void;
}

export const SelectItems = ({required, value, name, labelName, change}: Props) => {

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
            <select className={styles.select} id={fieldName} ref={inputRef} onChange={change ? e => change(e.target.value) : () => null}>
                {value.map((index, key) => (
                    <option key={key} className={styles.option} value={index.produto}>{index.produto}</option>
                ))}
            </select>
        </div>
    )
}