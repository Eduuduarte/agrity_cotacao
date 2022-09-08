import { useContext } from 'react';
import { ProductContext } from '.';
import { Product } from '../../types/DataTypes';
import { Actions } from './types';

export const useProductContext = () => {
    const {state, dispatch} = useContext(ProductContext);

    return {
        ...state,
        setProduct: (product: Array<Product>) => {
            dispatch({
                type: Actions.SET_PRODUCT,
                payload: { product }
            });
        }
    }
}