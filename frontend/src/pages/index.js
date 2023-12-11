import React, { useState, useEffect } from 'react';
import styles from '../styles/home.module.css';
import Link from 'next/link';

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
            <div className={styles.textContainer}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Gallery</h1>
                    <div className={styles.subtitle}>By Daniel Wang</div>
                </div>
                <div className={styles.floatingCommunityLink}><Link href="/community">Community</Link></div>
                <div className={styles.floatingBrowseLink}><Link href="/browse">Browse</Link></div>
                <div className={styles.floatingClosetLink}><Link href="/closet">Closet</Link></div>
                <div className={styles.floatingSettingsLink}><Link href="/settings">Settings</Link></div>
                <div className={styles.footer}>You're at the center of everything.</div>
            </div>
        </>
    );
};

export default Home;
