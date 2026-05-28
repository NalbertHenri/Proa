import {Link} from 'react-router-dom'
import styles from '../css/Header.module.css'
import Logo from '../assets/imagens/viagens.jpg'
import Lupa from '../assets/imagens/lupa.png'

function Header(){

    return(
        <header>

        <img src={Logo} alt="Logo da agencia de viagens" className={styles.logo_agencia}/>

        <nav className={styles.menu}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Aruba'>Aruba</Link></li>
                <li><Link to='/Escocia'>Escócia</Link></li>
                <li><Link to='/Muralha'>Muralhas da china</Link></li>
                <li><Link to='/Canyon'>Grand Canyon</Link></li>
            </ul>
        </nav>

        <div>
            <input type="search" className={styles.busca}/>
        </div>

        <div>
            <img src={Lupa} alt="Lupa" className={styles.lupa}/>
        </div>

        </header>



    )

}
export default Header