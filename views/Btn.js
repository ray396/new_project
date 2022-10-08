import styles from "./Btn.module.css"

function Btn({text, type}){
    return(
        <div className={styles.divbtn}>
            <button className={styles.btn} type={type}>{text}</button>
        </div>
    );
}
export default Btn