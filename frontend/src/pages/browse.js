import React from 'react';
import NavArea from '../components/Navigation/NavSection/NavArea';
import BrowseColumn from '../components/Columns/BrowseColumn';
import styles from '../styles/browse.module.css';
import { ScrollProvider } from '../components/Columns/ScrollContext';

const Browse = () => {
    return (
        <>
            <ScrollProvider>
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
            </ScrollProvider>
        </>
    );
};

export default Browse;