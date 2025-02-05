import logo from '../../../img/Header/Frame 168.png';
import icon1 from '../../../img/Header/mdi_account-alert-outline.svg';
import icon2 from '../../../img/Header/akar-icons_search.svg';
import icon3 from '../../../img/Header/akar-icons_heart.svg';
import style from './Header.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Header({ setCartVisible }) {
    const [searchVisible, setSearchVisible] = useState(false);
    return (<>
        <div className={style.headerContainer}>
            <div >
            <Link className={style.link} to="/">
                <img className={style.logo} src={logo} alt="" />
                </Link>
            </div>
            <div className={style.containerTextHeader}>
                <Link className={style.link} to="/">
                    <p className={style.textHeader}>Home</p>
                </Link>

                <Link className={style.link} to="/shop">
                    <p className={style.textHeader}>Shop</p>
                </Link>
                <Link className={style.link} to="/blog">
                    <p className={style.textHeader}>About</p>
                </Link>
                <Link className={style.link} to="/contact">
                    <p>Contact</p>
                </Link>
            </div>
            <div className={style.icons}>
                <img className={style.icon} src={icon1} alt="Account" />
                <div className={style.searchWrapper}>
                    <img className={style.icon} src={icon2} alt="Search" onClick={() => setSearchVisible(!searchVisible)} />
                    {searchVisible && (
                        <input className={style.inputSearch} type="text" placeholder="Search..." autoFocus />
                    )}
                </div>
                <img className={style.icon} src={icon3} alt="Favorites" />
                <button className={style.btnCart} onClick={() => { setCartVisible(true) }}></button>
            </div>
        </div>
    </>
    )
}
export default Header;