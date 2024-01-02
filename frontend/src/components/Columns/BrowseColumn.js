import React, { useContext, useEffect } from 'react';
import styles from '../../styles/BrowseColumn.module.css';
import { ScrollContext } from './ScrollContext';

const ColumnBlock = ({ imageUrl, text }) => {
    return (
        <>
            <div className={styles.browseColumnBlock}>
                <img src={imageUrl} alt="Block Content" className={styles.columnBlockImage} />
                <div className={styles.blockTitle}>{text[0]}</div>
                <div className={styles.blockDescription}>{text[1]}</div>
            </div>
        </>
    );
};

const BrowseColumn = () => {
    const images = [
        '/images/template-clothing-item.png',
        '/images/template-clothing-item.png',
        '/images/template-clothing-item.png',
        '/images/template-clothing-item.png',
    ];

    const { scrollY, setScrollY } = useContext(ScrollContext);

    const handleScroll = (e) => {
        setScrollY(e.target.scrollTop);
    };   
  
    useEffect(() => {
        const columns = document.querySelectorAll(`.${styles.browseColumn}`);
        columns.forEach((column) => {
        column.scrollTop = scrollY;
      });
    }, [scrollY]);

    return (
        <div className={styles.browseColumn} onScroll={handleScroll}>
          {images.map((image, index) => (
            <ColumnBlock key={index} imageUrl={image} text={["BASIC CREW", "STUSSY"]} />
          ))} {/* JavaScript expression embedded in JSX (how React mixes HTML-like code with JavaScript) */}
        </div>
    );
};

export default BrowseColumn;