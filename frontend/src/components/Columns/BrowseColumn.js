import React from 'react';
import styles from '../../styles/BrowseColumn.module.css';

const ColumnBlock = ({ imageUrl, text }) => {
    return (
        <>
            <div className={styles.columnBlock}>
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

    return (
        <div className={styles.browseColumn}>
          {images.map((image, index) => (
            <ColumnBlock key={index} imageUrl={image} text={["BASIC CREW", "STUSSY"]} />
          ))} {/* JavaScript expression embedded in JSX (how React mixes HTML-like code with JavaScript) */}
        </div>
    );
};

export default BrowseColumn;

{/* <p>hi my name danyo and i have no balls in my free time i like cuddling w my homies yey :3 yay yay omg thank you omgomgomgomgm thank you thank you omgomgogmogm do you want bobar bobar :33333 curse word hastage %%%% hastage hasgsate how many phonemes are in hasta ge yes ok i am good at coding anf lohy publush this at psych . hi my name danyo and i have no balls in my free time i like cuddling w my homies yey :3 yay yay omg thank you omgomgomgomgm thank you thank you omgomgogmogm do you want bobar bobar :33333 curse word hastage %%%% hastage hasgsate how many phonemes are in hasta ge yes ok i am good at coding anf lohy publush this at psych . hi my name danyo and i have no balls in my free time i like cuddling w my homies yey :3 yay yay omg thank you omgomgomgomgm thank you thank you omgomgogmogm do you want bobar bobar :33333 curse word hastage %%%% hastage hasgsate how many phonemes are in hasta ge yes ok i am good at coding anf lohy publush this at psych . hi my name danyo and i have no balls in my free time i like cuddling w my homies yey :3 yay yay omg thank you omgomgomgomgm thank you thank you omgomgogmogm do you want bobar bobar :33333 curse word hastage %%%% hastage hasgsate how many phonemes are in hasta ge yes ok i am good at coding anf lohy publush this at psych . hi my name danyo and i have no balls in my free time i like cuddling w my homies yey :3 yay yay omg thank you omgomgomgomgm thank you thank you omgomgogmogm do you want bobar bobar :33333 curse word hastage %%%% hastage hasgsate how many phonemes are in hasta ge yes ok i am good at coding anf lohy publush this at psych .</p> */}
