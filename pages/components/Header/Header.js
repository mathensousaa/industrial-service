import { Layout } from '../layout';
import styles from './Header.module.css';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import Logo from '../../../public/industrialservice-logo.svg';
import Image from 'next/image';

export function Header() {
  return (
    <header className={styles.header}>
      <a href="#">
        <Image src={Logo} alt="Logo Industrial Service" />
      </a>
      <Menu />
      <Button content="Entre em contato" />
    </header>
  )
}