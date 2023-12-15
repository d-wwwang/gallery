import React from 'react';
import NavArea from '../components/Navigation/NavSection/NavArea';
import BrowseColumn from '../components/Columns/BrowseColumn';
import styles from '../styles/browse.module.css';

const Browse = () => {
    return (
        <>
            <div className={styles.windowContainer}>
                <div className={styles.columnPairContainer}>
                    <BrowseColumn />
                    <BrowseColumn />
                </div>
                <div className={styles.navContainer}>
                    <nav>
                    <NavArea pageCaption="Find it now, cherish it forever." nextPage={"/closet"}/>
                    </nav>
                </div>
                <div className={styles.columnPairContainer}>
                    <BrowseColumn />
                    <BrowseColumn />
                </div>
            </div>
        </>
    );
};

export default Browse;