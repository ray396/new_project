import styles from "../Estilo/Home.module.css";
import sarabanco from "..//img/sarabanco.png";

function Home(){
    return(
        <>
            <div className={styles.div4}>
                <div className={styles.div5}>
                    <h2 className={styles.titulo}>Bem-vindo(a) a SARA</h2>
                    <p className={styles.text}>Sistema de Acompanhamento Remoto Automatizado</p>
                </div>
                <div className={styles.div6}>
                    <img src={sarabanco} alt="sarabanco" className={styles.img3} />
                </div>
            </div>
        </>
    )
}
export default Home