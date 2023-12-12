import React, { useState, useEffect } from 'react';
import styles from '../../../styles/NavButton.module.css';
import Link from 'next/link';
import Router from 'next/router';

const NavButton = ({ nextPage }) => {
    const [holding, setHolding] = useState(false); // State to store whether or not button is being held for long press behavior
    const [timer, setTimer] = useState(null); // Timer (timeout ID) to store the timer that is set off when the button is held and cleared when the long press duration passes or the button is no longer held

    /** Sets `timer` to a timeout ID returned by `setTimeout` upon timer activation. 
     * This allows `clearTimeout` to clear the timeout of the right timer. 
     * Read more: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout. */
    const startTimer = (e) => {
        setHolding(true);
        const timeoutId = setTimeout(() => {
            Router.push('/');
            setHolding(false);
        }, 1000); // Use long press duration 3000 ms
        setTimer(timeoutId); 
        e.preventDefault(); // Handle the event `e` by preventing the `Link` component from navigating on long press (defualt behavior)
        
    };

    const stopTimer = (e) => {
        clearTimeout(timer); // Clears the timeout of the current timer (matched by `timeoutId`)
        if (holding) { // On long-press, handle the event `e` by preventing the `Link` component from navigating (default behavior)
            e.preventDefault();
        }
        setHolding(false); // Since we stop the timer, we also indicate the button is no longer being held
    }

    useEffect(() => {
        return () => clearTimeout(timer); // Cleanup Function.
    }, [timer]); 


    return (
        <>
            <div>
                <Link className={styles.navButtonLink} href={nextPage} passHref> {/* `passHref` passes the `href` attribute to the child */}
                    <a className={styles.navButton} onMouseDown={startTimer} onMouseUp={stopTimer}>
                        Gallery
                    </a>
                </Link>
            </div>
        </>
    );

    /**
     * Note: it is bad convention to combine `button` with `next/link`.
     * `next/link` is designed to work with `<a>` tags for navigation links.
     * Incorrect usage can affect accessibility and SEO.
     * Originally, the <a> tags were <button> tags.
     */
};

export default NavButton;