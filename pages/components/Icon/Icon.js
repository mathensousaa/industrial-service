import styles from './Icon.module.css';
import Image from 'next/image';

export default function Icon(props) {

    return (
        

        <a className={styles.iconWrapper} href={props.link} style={{width: props.size, height: props.size}} target="_blank" rel="noreferrer">
            <i class="fa-solid fa-user"></i>
            <Image 
                src={props.src}
                alt={props.alt}
                width={props.width}
                height={props.height}
            />
        </a>
    )
}