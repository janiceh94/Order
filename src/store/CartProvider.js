// Accepts a reducer function and an initial state
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};
const cartReducer = (state, action) => {
    if(action.type === "ADD"){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState;
}

export default function CartProvider(props){
    // cartReducer - point at our reducer function
    //defaultCartState - initial state
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const handleAddItemToCart = item => {
        dispatchCartAction({
            type: "ADD",
            item: item
        });
    };
    const handleRemoveItemFromCart = id => {
        dispatchCartAction({
            type: "REMOVE",
            id: id
        })
    };
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: handleAddItemToCart,
        removeItem: handleRemoveItemFromCart,
    }
    return(
        // .Provider allows us to wrap any components that should get access to this context
        <CartContext.Provider>
            {props.children}
        </CartContext.Provider>
    )
}