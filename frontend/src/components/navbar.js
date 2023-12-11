import React from 'react';
import styles from '../styles/navbar.module.css';
import NavButton from '../components/navbutton';

const NavBar = ({ pageCaption }) => {

    return (
        <>
            <div className={styles.navBarContainer}>
                <NavButton />
                <h1 className={styles.navBarCaption}>{pageCaption}</h1>
                <div className={styles.rippleAnimationTop}></div>
                <div className={styles.rippleAnimationMid}></div>
                <div className={styles.rippleAnimationBot}></div>
            </div>
        </>
    );
};

export default NavBar;