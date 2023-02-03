import styles from './Menu.module.css'
import Link from 'next/link';

export function Menu (props) {
    return (
        <nav className={styles.menu}>
            <ul>
                <li>
                    <Link href="/">Parceiros</Link>
                </li>
                <li>
                    <Link href="/">A empresa</Link>
                </li>
                <li>
                    <Link href="/">Serviços</Link>
                </li>
                <li>
                    <Link href="/">Projetos</Link>
                </li>
                <li>
                    <Link href="/">Contato</Link>
                    </li>
                <li>
                    <Link href="/">Informações</Link>
                </li>
            </ul>
        </nav>
    )
}