import styles from './Header.module.scss';
import Menu from '../Menu/Menu';
import Logo from '../../../public/industrialservice-logo.svg';
import Image from 'next/image';
import Button from '../Button/Button';
import React from 'react';

export default function Header() { 

  const [active, setActive] = React.useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className={styles.header}>
      <a href="#">
        <Image src={Logo} alt="Logo Industrial Service" />
      </a>
        <nav className={`${active ? styles.active : styles.noDisplay}`}>
          <Menu />
        </nav>
      <div className={`${active ? styles.active : styles.noDisplay}`}>
        <Button 
          className={styles.menu}
          content="Entrar em contato"
          bgColor="var(--red-700)"
          color="var(--white)"
          border="2px solid var(--white)"
          borderRadius="10px"
          padding="0.75rem 2.625rem"
          fontWeight="700"

          hoverBgColor="var(--white)"
          hoverBorder="2px solid var(--red-700)"
          hoverColor="var(--red-700)"
        />
      </div>
      <div 
        className={styles.menuToggler}
        onClick={() => setActive(!active)}
        size={20}>
            <div className={`${styles.line1} ${active ? '' : styles.noAnimation}`}></div>
            <div className={`${styles.line2} ${active ? '' : styles.noAnimation}`}></div>
            <div className={`${styles.line3} ${active ? '' : styles.noAnimation}`}></div>	
      </div>
    </header>
  )
}