import React from 'react';

const Bouton = ({ children, typeBtn, css, clic }) => {

    const monCss = `btn ${typeBtn} ${css}`

    return (
        <>
            <button className={monCss} onClick={clic}>{children}</button>
        </>
    );
};

export default Bouton;