import { createContext, useReducer } from 'react';
import { ContextType, DataType, ProviderType } from './types';
import { reducer } from './reducer';

export {} from './hook';

const initialState: DataType = {
    product: []
}

export const ProductContext = createContext<ContextType>({
    state: initialState,
    dispatch: () => {}
});

export const Provider = ({ children }: ProviderType) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {state, dispatch};

    return(
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}
