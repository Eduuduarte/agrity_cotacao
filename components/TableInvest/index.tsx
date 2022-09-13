import styles from './style.module.css';

import { titleTable } from "../../interfaces/dataInterfaces";
import { Product } from '../../types/DataTypes';
import { useFormatter } from '../../lib/useFormatter';
import ValorT from './ValorT';
import Custo from './Custo';

type Props = {
    valueTitle: Array<titleTable>;
    data: Array<Product>;
}

const TableInvest = ({ valueTitle, data }: Props) => {

    const formatter = useFormatter();

    // Pegar valores para o total
    let soma = 0;
    let custo = 0
    for (let i = 0; i < data.length; i++) {
        let valor = data[i].dose * data[i].custo * data[i].quantidade;
        let custoA = data[i].dose * data[i].custo * data[i].quantidade / data[i].area;
        soma += valor;
        custo += custoA;
    }

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr >
                        {valueTitle.map((item) => (
                            <th key={item.id} className={styles.titleTable}>{item.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td>Fertilizante</td>
                        <td><ValorT data={data} filter='Fertilizantes' /></td>
                        <td><Custo data={data} filter='Fertilizantes' /></td>
                    </tr>
                    <tr>
                        <td>Químico</td>
                        <td><ValorT data={data} filter='Químico' /></td>
                        <td><Custo data={data} filter='Químico' /></td>
                    </tr>
                    <tr>
                        <td>Semente</td>
                        <td><ValorT data={data} filter='Semente' /></td>
                        <td><Custo data={data} filter='Semente' /></td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>{formatter.formtCurrency(soma)}</td>
                        <td>{formatter.formtNumber(custo)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TableInvest;