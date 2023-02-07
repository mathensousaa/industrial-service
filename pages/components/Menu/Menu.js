import styles from './Menu.module.css'
import Link from 'next/link';
import Button from '../Button/Button';

export default function Menu () {
    return (
        <nav className={styles.menu}>
            <ul>
                <li>
                    <Link href="#partners">Empresas</Link>
                </li>
                <li>
                    <Link href="#company">A empresa</Link>
                </li>
                <li>
                    <Link href="#services">Serviços</Link>
                </li>
                <li>
                    <Link href="#projects">Projetos</Link>
                </li>
                <li>
                    <Link href="#contact">Contato</Link>
                    </li>
                <li>
                    <Link href="#informations">Informações</Link>
                </li>
                <li>
                    
                </li>
            </ul>
        </nav>
    )
}