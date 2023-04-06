import { useState, useRef } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";

export default function MealItemForm(props){
    const [amountIsValid, setAmountIsValid] = useState(true);
    // useRef() - allows you to persist values between renders
    const amountInputRef = useRef();
    const handleSubmit = e => {
        e.preventDefault();
        // always use .current for useRef()
        // value will be a type string
        const enteredAmount = amountInputRef.current.value;
        // change type string to number
        const enteredAmountNum = +enteredAmount;
        
        // trim - remove white space
        if(
            enteredAmount.trim().length === 0 || enteredAmountNum < 0 || enteredAmountNum > 5
            ){
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNum);
    }
    return (
        <form 
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id:"amount_" + props.id,
                    type:"number",
                    min:"1",
                    max:"5",
                    step:"1",
                    defaultValue:"1",
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    )
}