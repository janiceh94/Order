import CartContext from "./cart-context";

export default function CartProvider(props){
    const handleAddItemToCart = item => {

    };
    const handleRemoveItemFromCart = id => {

    };
    const cartContext = {
        items: [],
        totalAmount: 0,
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