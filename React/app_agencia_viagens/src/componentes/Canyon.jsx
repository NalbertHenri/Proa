import styles from '../css/Canyon.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_Canyon from '../assets/imagens/insta.jfif'
function Canyon (){
    return(

        <section className={styles.granCanyon}>

        <h1>Venha conhecer o GranCanyon!!</h1>

        <ComponenteProps
        lugar="GrandCanyon"
        texto="Esse país fantástico, com seus encantos e seus castelos medievais, te aguardam para um roteiro inesquecível! Com boa comida, ótima instalações e um clima super agradável!!!"
        bandeira={Bandeira_Canyon}
      />

        </section>

    )
}
export default Canyon