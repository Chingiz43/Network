import React from "react";
import s from "./Header.module.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className={s.Header}>
      <div className={s.container}>
      <div className={s.logo_title}>
        <img className={s.logo} src={logo} alt="logo" />
        <ul>
          <li>Создать задание</li>
          <li>Найти задание</li>
        </ul>
      </div>
      <div className={s.sign_in}>
        <button className={s.btn}>Вход и регистрация</button>
      </div>
      </div>
      </div>
  );
};

export default Header;
