import styles from '../css/Aruba.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_aruba from '../assets/imagens/Aruba.jpg'
function Aruba (){
    return(

        <section className={styles.fundoAruba}>

            <h1>Venha conhecer a Aruba!!</h1>

            <ComponenteProps 
            lugar="Aruba"
            texto="Esse país fantástico, com seus encantos e seus castelos medievais, te aguardam para um roteiro inesquecível! Com boa comida, ótima instalações e um clima super agradável!!!"
            bandeira={Bandeira_aruba}

            
            />


        </section>

    )
}
export default Aruba