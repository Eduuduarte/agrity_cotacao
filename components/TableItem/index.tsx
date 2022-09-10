import styles from './style.module.css';
import { titleTable } from '../../interfaces/dataInterfaces';
import { Product } from '../../types/DataTypes';

type Props = {
    title: string;
    valueTitle: Array<titleTable>;
    data: Array<Product>;
}

const TableItem = ({ title, valueTitle, data }: Props) => {

    return (
        <div className={data.length >= 1 ? styles.container : styles.hidden}>

            <h3 className={styles.title} >{title}</h3>
            
            <table className={styles.tableProduct}>
                <thead>
                    <tr>
                        {valueTitle.map((item) => (
                            <th className={styles.tableTitle} key={item.id}>{item.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className={styles.bodyTable}>
                    {data.map((item, index) => (
                        <tr key={item.id}>
                            <td>{item.produto}</td>
                            <td>{item.catInsumo}</td>
                            <td>{item.quantidade}</td>
                            <td>{item.precoGrao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>

    );

}

export default TableItem;