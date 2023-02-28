// Styles
import styles from "./styles.module.css"

// Assets
import mainLogo from "../../assets/logo/main-logo.svg"

export function Header(){
    return (
        <header className={styles.header}>
            <img src={mainLogo} alt="No lado esquerdo temos um pequeno fogute na cor azul emitino um jato roxo da propulsão dos motores e no lado direito temo escrito todo com a primeira metade em azul e a outra metade em roxo"/>
        </header>
    )
}