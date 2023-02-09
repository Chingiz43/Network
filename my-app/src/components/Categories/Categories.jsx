import React from 'react';
import s from "./Categories.module.scss"
import style from '../../assets/price_assets/style.png'
import logo_disign from '../../assets/price_assets/logo_design.png'
import infography from '../../assets/price_assets/oivt.png'
import Nft from '../../assets/price_assets/Nft.png'
import Web_disign from '../../assets/price_assets/design.png'
import Mob_disign from '../../assets/price_assets/apple.png'
import Podskazka from '../MUI/podskazka/Podskazka';
const Categories = () => {
    return (
        <div className={s.Categories}>
            <div className={s.cont}> 
            <h1>
                Категории услуг
            </h1>
            <div className={s.podskazka}>
                <Podskazka>Дизайн</Podskazka>
                <Podskazka>Разработка IT</Podskazka>
                <Podskazka>Тексты и копирайтинг</Podskazka>
                <Podskazka>SEO</Podskazka>
                <Podskazka>Обучение и консалтинг</Podskazka>
            </div>
            <div className={s.price}>
                <div className={s.block}>
                    <div className={s.block_img}>
                        <img src={style} alt="" />
                    </div>
                    <div className={s.text}>
                        <h6>Фирменный стиль</h6>
                        <p>От 500 рублей</p>
                    </div>
                </div>
                <div className={s.block}>
                    <div className={s.block_img}>
                        <img src={logo_disign} alt="" />
                    </div>
                    <div className={s.text}>
                        <h6>Дизайн логотипов</h6>
                        <p>От 500 рублей</p>
                    </div>
                </div>
                <div className={s.block}>
                    <div className={s.block_img}>
                        <img src={infography} alt="" />
                    </div>
                    <div className={s.text}>
                        <h6>Инфографика</h6>
                        <p>От 500 рублей</p>
                    </div>
                </div>
                <div className={s.price}>
                <div className={s.block}>
                    <div className={s.block_img}>
                        <img src={Nft} alt="" />
                    </div>
                    <div className={s.text}>
                        <h6>NFT арт</h6>
                        <p>От 500 рублей</p>
                    </div>
                </div>
                <div className={s.block}>
                    <div className={s.block_img}>
                        <img src={Web_disign} alt="" />
                    </div>
                    <div className={s.text}>
                        <h6>Веб-дизайн</h6>
                        <p>От 500 рублей</p>
                    </div>
                </div>
                <div className={s.block}>
                    <div className={s.block_img}>
                        <img src={Mob_disign} alt="" />
                    </div>
                    <div className={s.text}>
                        <h6>Мобильный дизайн</h6>
                        <p>От 500 рублей</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};


export default Categories;