import styles from "./MealItemForm.module.css";

export default function MealItemForm(props){
    return (
        <form className={styles.form}>
            <input/>
            <button>+ Add</button>
        </form>
    )
}