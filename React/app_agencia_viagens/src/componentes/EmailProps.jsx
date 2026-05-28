import styles from '../css/EmailPops.module.css'
function EmailProps(){
    return(
        
        <section className={styles.login}>
            <div>
                <input type="email" placeholder="Digite seu email" />
            </div>
        </section>

    )
}
export default EmailProps