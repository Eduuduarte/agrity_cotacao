import { Product } from "../../types/DataTypes";
import { memo } from 'react';

import { useFormatter } from '../../lib/useFormatter';

type Props = {
    data: Array<Product>
    filter: string;
}

const ValorT = ({data, filter}: Props) => {
    const formatter = useFormatter();
    let soma = 0;
    const filterInsumo = data.filter(item => item.insumo === filter);
    for(let i = 0; i < filterInsumo.length; i++){
        let valor = filterInsumo[i].dose * filterInsumo[i].area * filterInsumo[i].custo * filterInsumo[i].quantidade;
        soma += valor;
    }
    
    return (
        <div>
            {formatter.formtCurrency(soma)}
        </div>
    )
}


export default memo(ValorT);