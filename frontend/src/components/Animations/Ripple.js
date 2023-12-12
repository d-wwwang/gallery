import React from 'react';
import styles from '../../styles/Ripple.module.css';

const Ripple = () => {

    return (
        <>
            <div>
                <div className={styles.rippleAnimationTop}></div>
                <div className={styles.rippleAnimationMid}></div>
                <div className={styles.rippleAnimationBot}></div>
            </div>
        </>
    );
};

export default Ripple;