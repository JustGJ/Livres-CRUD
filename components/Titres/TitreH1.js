import React from 'react';
import classes from './TitreH1.module.css';

const Titres = (props) => {

    const monCss = `${classes.policeTitre} border border-dark p-2 m-2 text-white text-center bg-primary rounded`;

    return (
        <div>
            <h1 className={monCss}>{props.children}</h1>
        </div>
    );
};

export default Titres;