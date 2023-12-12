import React from 'react';
import styles from '../../../styles/NavArea.module.css';
import NavButton from '../NavSection/NavButton';
import Ripple from '../../Animations/Ripple';

const NavArea = ({ pageCaption, nextPage }) => {

    return (
        <>
            <div className={styles.navAreaContainer}>
                <NavButton nextPage={nextPage} />
                <h1 className={styles.navAreaCaption}>{pageCaption}</h1>
                <Ripple />
            </div>
        </>
    );
};

export default NavArea;