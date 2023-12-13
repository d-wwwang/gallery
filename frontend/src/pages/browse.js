import React from 'react';
import NavArea from '../components/Navigation/NavSection/NavArea';

const Browse = () => {
    return (
        <>
            <nav>
                <NavArea pageCaption="Find it now, cherish it forever." nextPage={"/closet"}/>
            </nav>
        </>
    );
};

export default Browse;