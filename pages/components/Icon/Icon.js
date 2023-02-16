import styles from './Icon.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';

export default function Icon(props) {
    const [hover, setHover] = React.useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };
    
    const handleMouseLeave = () => {
        setHover(false);
    };

    const iconWrapperStyles = {
        width: props.size,
        height: props.size,
        backgroundColor: props.bgColor,

        // Hover styles
        backgroundColor: hover ? props.hoverBgColor : props.bgColor,
    };

    const iconStyles = {
        // Hover styles
        color: hover ? props.hoverIconColor : props.iconColor,
        transition: '0.5s',
    };

    return (
        

        <a className={styles.iconWrapper} href={props.link} style={iconWrapperStyles} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={props.icon} size={props.iconSize} color={props.iconColor} style={iconStyles} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
        </a>
    )
}