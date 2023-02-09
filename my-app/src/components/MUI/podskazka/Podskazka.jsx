import React from 'react';
import s from "./Podskazka.module.scss"

const podskazka = ({children}) => {
    return (   
        <button className={s.btn}>{children}</button>     
    );
};

export default podskazka;