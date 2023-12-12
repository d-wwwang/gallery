import React from 'react';
import styles from '../../../styles/NavBar.module.css'
import NavArea from './NavArea';

const NavBar = ({ pageCaption, nextPage }) => {

    return (
        <>
            <div className={styles.navBarContainer}>
                <NavArea pageCaption={pageCaption} nextPage={nextPage}/>
            </div>
        </>
    );
};

export default NavBar;