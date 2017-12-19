import * as ShoppingListActions from './shopping-list.actions';
import { Ingredient } from '../../shared/ingredient';

const initialState = {
    ingredients: [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatos', 10)
    ]
}

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch(action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        default:
            return state;
    }
}