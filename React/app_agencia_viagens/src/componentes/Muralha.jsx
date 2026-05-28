import styles from '../css/Muralaha.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_china from '../assets/imagens/Muralha.jpg'
function Muralha (){
    return( 

        <section className={styles.muralhaChina}>

            <h1>Venha conhecer a muralha da China!!</h1>

            <ComponenteProps
                    lugar="Muralha da China"
                    texto="Esse país fantástico, com seus encantos e seus castelos medievais, te aguardam para um roteiro inesquecível! Com boa comida, ótima instalações e um clima super agradável!!!"
                    bandeira={Bandeira_china}
                  />

        </section>

    )
}
export default Muralha