import styles from './styles.module.css';
import {SelectionType} from '../../types/dataTypes';

type Props = {
    required: boolean;
    labelName: string;
    value: Array<SelectionType>;
}

const SelectItem = ({labelName, required, value}: Props) => {
    return (
        <div className={styles.container}>
            <label className={styles.labelName}>{labelName}<span style={{color: '#FF1928'}}>*</span></label>
            <select className={styles.select} required={required}>
                {value.map((index, key) => (
                    <option className={styles.option} value="Assis">{index.title}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectItem;