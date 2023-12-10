import React, { useState, useEffect } from 'react';
import styles from '../styles/home.module.css';

const Home = () => {

    useEffect(() => {
        document.title = "Gallery";

        // Disable scrolling
        document.body.style.overflow = 'hidden';

        // Re-enable scrolling when navigating off of home page (cleanup function)
        return () => {
            document.body.style.overflow = 'visible';
        }
    }, []);

    return (
        <>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Gallery</h1>
                <div className={styles.subtitle}>By Daniel Wang</div>
            </div>
            <div className={styles.footer}>You're at the center of everything.</div>
        </>
    );
};

export default Home;
