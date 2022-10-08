import { Outlet, Link } from "react-router-dom";
import styles from "../Estilo/Layout.module.css";
import img from "../img/m4.png";

const Layout = () => {
    return(
        <>
            <nav className={styles.nav1}>
                <div className={styles.divimg}>
                <img src={img} alt="m4" className={styles.img}/>
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Cadastros">Cadastros</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Versoes">Versões</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/TarefaRapida">Tarefa Rápida</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Tickets">Tickets</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Informacoes">Base de Dados</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
};

export default Layout