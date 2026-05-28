import styles from '../css/Home.module.css'
import Mala from '../assets/imagens/mala.jpg'
function Home (){
    return(

        <section className={styles.container_home}>

                <img src={Mala} alt="Mala de viagens" className={styles.mala_viagem} />


            <div className={styles.texto}>
                <h1>Encontre aqui a viagem dos seus <br/>sonhos!!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt incidunt magni illo vel rem unde iste vitae quos adipisci quisquam est repudiandae nulla, dolore fuga? Quod sapiente corporis temporibus libero!</p>
            </div>


        </section>
    )
}
export default Home