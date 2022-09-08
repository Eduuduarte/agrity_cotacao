import { DataType, ActionType, Actions } from './types';

export const reducer = (state: DataType, action: ActionType) => {
    switch(action.type) {
        case Actions.SET_PRODUCT:
            return { ...state, product: action.payload.product}
            break;
        default: return state;
    }
}