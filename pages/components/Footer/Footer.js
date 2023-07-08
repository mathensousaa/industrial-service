import styles from "./Footer.module.css";
import Menu from "../Menu/Menu";
import Logo from "../../../public/industrialservice-logo.svg";
import Image from "next/image";
import Icon from "../Icon/Icon";
import {
  faLinkedinIn,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.menuWrapper}>
        <a href="#">
          <Image src={Logo} alt="Logo Industrial Service" />
        </a>
        <Menu variant="light" />
        <div className={styles.socialWrapper}>
          <Icon
            bgColor="transparent"
            link="https://www.linkedin.com/company/industrial-service-br/"
            icon={faLinkedinIn}
            iconSize="xl"
            iconColor="var(--white)"
            hoverBgColor="var(--red-400)"
            hoverIconColor="var(--white)"
          />
          <Icon
            bgColor="transparent"
            link="https://www.instagram.com/industrialservicebr/"
            icon={faInstagram}
            iconSize="xl"
            iconColor="var(--white)"
            hoverBgColor="transparent"
            hoverIconColor="var(--white)"
          />
          <Icon
            bgColor="transparent"
            link="https://wa.me/5562982880057"
            icon={faWhatsapp}
            iconSize="xl"
            iconColor="var(--white)"
            hoverBgColor="transparent"
            hoverIconColor="var(--white)"
          />
        </div>
      </div>
      <small className="text-center">
        © {new Date().getFullYear()} Industrial Service. Todos os direitos
        reservados.
      </small>
    </footer>
  );
}
