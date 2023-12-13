import React from 'react';
import NavArea from '../components/Navigation/NavSection/NavArea';

const Closet = () => {
    return (
        <>
            <nav>
                <NavArea pageCaption="Keep it here, never lost." nextPage={"/community"}/>
            </nav>
        </>
    );
};

export default Closet;