import {Dispatch, ReactNode } from 'react';
import { Product } from '../../types/DataTypes';

export type DataType = {
    product: Array<Product>
}

export type ActionType = {
    type: Actions,
    payload?: any;
}

export type ContextType = {
    state: DataType;
    dispatch: Dispatch<ActionType>
}

export type ProviderType = {
    children: ReactNode
}

export enum Actions {
    SET_PRODUCT
}