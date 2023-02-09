import React from 'react';
import s from "./Header.module.scss"
import logo from "../../assets/logo.png"
const Header = () => {
    return (
        <div className={s.Header}>
            <div className={s.Header_cont}>
                <div className={s.logo}>
                    <img className = {s.logo_img} src={logo} alt="" />
                </div>
                <div className={s.navigation}>
                    <ul>
                        <li>Создать задание</li>
                        <li>Найти задание</li>
                    </ul>
                </div>
                
                    <button>Вход и регистрация</button>

            </div>
        </div>
    );
};

export default Header;