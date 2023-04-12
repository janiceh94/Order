// Accepts a reducer function and an initial state
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};
const cartReducer = (state, action) => {
    if(action.type === "ADD"){
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        // if item currently looking at has the same id as the item we are currently adding
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if(existingCartItem){
            // if items exists in cart, add to amount
            const updatedItem = { 
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            // update total amount for that item
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    if(action.type === "REMOVE"){
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if(existingItem.amount === 1){
            // if true, keep items 
            // if false, item id's are the same, remove item
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
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
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}