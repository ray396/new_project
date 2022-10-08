import styles from '../Estilo/Login.module.css';
import sara from "../img/sara.png";
import semfundo from "../img/semfundo.png";

function Login(){
    return(
        <>
            <div className={styles.div1}>
                <div className={styles.div2}>
                    <div className={styles.icon}>
                        <div className={styles.circulo}><img src={semfundo} alt="semfundo" className={styles.img2}/></div>
                    </div>
                    <form>
                        <div>
                            <input type="text" placeholder='E-mail'/>
                        </div>
                        <div>
                            <input type="password" placeholder='Senha'/>
                        </div>
                        <div>
                            <button type="submit" className={styles.btn3}>Login</button>
                        </div>
                    </form>
                </div>
                <div className={styles.div3}>
                    <img src={sara} alt="sara" className={styles.img}/>                
                </div>
            </div>
        </>
    );
}
export default Login