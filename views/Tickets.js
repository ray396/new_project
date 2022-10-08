import styles from "../Estilo/Tickets.module.css";
import semfundo from "../img/semfundo.png";
import Input from "../form/Input";
import Btn from "../form/Btn";


function Tickets(){

    return(
        <>
            <div className={styles.caixa}>
                <div className={styles.caixa1}>
                    
                </div>
                <div className={styles.caixa2}>
                    <img src={semfundo} alt="semfundo" className={styles.imgsemfundo}/>
                </div>
                <div className={styles.caixa3}>
                    <h2 className={styles.h2}>Cadastro de Tickets</h2>
                    <form className={styles.form}>
                        <Input type="text" text="Cliente *" name="cliente" placeholder="Insira o nome do cliente"/>
                        <Input type="text" text="Atendente *" name="atendente" placeholder="Insira o nome do Atendente"/>
                        <Input type="text" text="Assunto *" name="assunto" placeholder="Insira o assunto"/>
                        <div className={styles.d7}>
                            <label>Imagem *</label>
                            <input className={styles.btnimagem} type="file" name="imagem"/>
                        </div>
                        <Input type="text" text="Problemas Constantes *" name="probCont" placeholder="Insira o problema"/>
                        <div className={styles.d7}>
                            <label>Data *</label>
                            <input className={styles.btndata} type="date" name="data"/>
                        </div>
                        <div className={styles.d7}>
                            <label>Descrição *</label>
                            <textarea className={styles.btnareatext} name="descricao" placeholder="Insira uma descrição" rows="4" cols="50"></textarea>
                        </div>
                        <Btn type="submit" text="Salvar"/>
                        
                    </form>
                </div>
                <div className={styles.caixa1}>
                    
                </div>
            </div>
        </>
    );
}
export default Tickets