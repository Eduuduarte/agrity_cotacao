import { Product } from "../../types/DataTypes";
import { memo } from 'react';

import { useFormatter } from '../../lib/useFormatter';

type Props = {
    data: Array<Product>
    filter: string;
}

const Custo = ({data, filter}: Props) => {
    const formatter = useFormatter();
    let soma = 0;
    const filterInsumo = data.filter(item => item.insumo === filter);
    for(let i = 0; i < filterInsumo.length; i++){
        let valor = filterInsumo[i].dose * filterInsumo[i].custo * filterInsumo[i].quantidade / filterInsumo[i].area;
        soma += valor;
    }
    
    return (
        <div>
            {formatter.formtNumber(soma)}
        </div>
    )
}


export default memo(Custo);