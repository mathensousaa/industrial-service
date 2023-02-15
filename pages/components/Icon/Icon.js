import styles from './Icon.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Icon(props) {

    return (
        

        <a className={styles.iconWrapper} href={props.link} style={{width: props.size, height: props.size}} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={props.icon} width={props.size} size={props.iconSize} color={props.iconColor}/>
        </a>
    )
}