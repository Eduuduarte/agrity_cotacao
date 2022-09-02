import styles from './style.module.css';
import { titleTable } from '../../types/dataTypes'

type Props = {
    title: string;
    valueTitle: Array<titleTable>;
}

const TableItem = ({ title, valueTitle }: Props) => {

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <table>
                <thead>
                    <tr>
                        {valueTitle.map((item) => (
                            <th className={styles.tableTitle} key={item.id}>{item.title}</th>
                        ))}
                    </tr>
                </thead>
            </table>
        </div>
    );

}

export default TableItem;