import styles from './Header.module.scss';
import Menu from '../Menu/Menu';
import Logo from '../../public/industrialservice-logo.svg';
import Image from 'next/image';
import Button from '../Button/Button';
import React from 'react';

export default function Header() { 

  const [active, setActive] = React.useState(false);
  
  return (
    <header className={styles.header}>
      <a href="#">
        <Image src={Logo} alt="Logo Industrial Service" />
      </a>
        <nav className={`${styles.menuToggled} ${active ? styles.active : styles.noDisplay}`}>
          <Menu/>
        </nav>
      <div className={`${styles.btnToggled} ${active ? styles.active : styles.noDisplay}`}>
        <Button
          content="Entrar em contato"
          bgColor="var(--red-700)"
          color="var(--white)"
          border="2px solid var(--white)"
          borderRadius="10px"
          padding="0.75rem 2.625rem"
          fontWeight="700"

          hoverBgColor="var(--white)"
          hoverBorder="2px solid var(--red-400)"
          hoverColor="var(--red-400)"
        />
      </div>
      <div 
        className={styles.menuToggler}
        onClick={() => setActive(!active)}
        size={20}>
            <div className={`${styles.line1} ${active ? styles.toClose1 : styles.toOpen1 }`}></div>
            <div className={`${styles.line2} ${active ? styles.toClose2 : styles.toOpen2}`}></div>
            <div className={`${styles.line3} ${active ? styles.toClose3 : styles.toOpen3}`}></div>
      </div>
    </header>
  )
}