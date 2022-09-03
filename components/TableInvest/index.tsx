import styles from './style.module.css';

import { titleTable } from "../../types/dataTypes";

type Props = {
    valueTitle: Array<titleTable>;
}

const TableInvest = ({valueTitle}: Props) => {
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr >
                        {valueTitle.map((item) => (
                            <th className={styles.titleTable}>{item.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td>Fertilizante</td>
                        <td>R$ 500.000,00</td>
                        <td>12,00</td>
                    </tr>
                    <tr>
                        <td>Químico</td>
                        <td>R$ 3.500.000,00</td>
                        <td>10,00</td>
                    </tr>
                    <tr>
                        <td>Semente</td>
                        <td>R$ 600.000,00</td>
                        <td>8,0</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>R$ 4.600.000,00</td>
                        <td>30,00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TableInvest;