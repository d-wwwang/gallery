import React from 'react';
import styles from '../styles/navbutton.module.css';
import Link from 'next/link';

const NavButton = () => {

    return (
        <>
            <div>
                <Link href="/">
                    <button className={styles.navButton}>Gallery</button>
                </Link>
            </div>
        </>
    );
};

export default NavButton;