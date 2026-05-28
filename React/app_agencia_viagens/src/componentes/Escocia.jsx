import styles from '../css/Escocia.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_escocia from '../assets/imagens/escocia.png'
import EmailProps from './EmailProps'

function Escocia() {
  return (
    <section className={styles.fundoEscocia}>
      <h1>Venha conhecer a Escócia!!</h1>

      <ComponenteProps
        lugar="Escócia"
        texto="Esse país fantástico, com seus encantos e seus castelos medievais, te aguardam para um roteiro inesquecível! Com boa comida, ótima instalações e um clima super agradável!!!"
        bandeira={Bandeira_escocia}
      />
      <EmailProps
      
        
      />
    </section>
  )
}
    

export default Escocia