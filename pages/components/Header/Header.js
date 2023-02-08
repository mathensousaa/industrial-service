import styles from './Header.module.css';
import Menu from '../Menu/Menu';
import Logo from '../../../public/industrialservice-logo.svg';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import Button from '../Button/Button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#">
        <Image src={Logo} alt="Logo Industrial Service" />
      </a>
      <nav>
        <Menu />
      </nav>
      <Button content="Entre em contato" />
      <div 
        className={styles.menuToggler} 
        size={20}>
          <FiMenu size={28} className={styles.menuTogglerIcon}/>
      </div>
    </header>
  )
}