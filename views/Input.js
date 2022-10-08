import styles from "./Input.module.css";

function Input({type, text, name, placeholder, handOnChange, value}){
    return(
        <div className={styles.d7}>
            <label className={styles.label} htmlFor={name}>{text}</label>
            <input className={styles.input} type={type} name={name} id={name} placeholder={placeholder} onChange={handOnChange} value={value}/>
        </div>
    );
}
export default Input