import styles from "../Estilo/Cadastros.module.css";

function Cadastros(){
    return(
        <>
            <div className={styles.d1}>
                <div className={styles.d2}>
                    <div className={styles.d6}>
                        <h2>Usuários</h2>
                        <button className={styles.btn3}>Cadastro de Usuários</button>
                        <button className={styles.btn4}>Vizualizar Usuários</button>
                    </div>
                </div>
                <div className={styles.d3}>
                    <div className={styles.d6}>
                        <h2>Clientes</h2>
                        <button className={styles.btn3}>Cadastro de Clientes</button>
                        <button className={styles.btn4}>Vizualizar Clientes</button>
                    </div>
                </div>
                <div className={styles.d4}>
                    <div className={styles.d6}>
                        <h2>Grupos</h2>
                        <button className={styles.btn3}>Cadastro de Grupos</button>
                        <button className={styles.btn4}>Vizualizar Grupos</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cadastros