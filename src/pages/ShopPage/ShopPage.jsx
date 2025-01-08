import style from '../ShopPage/ShopPage.module.css';
import icon1 from '../../img/Shop/icon1.svg';
import icon2 from '../../img/Shop/icon2.svg';
import icon3 from '../../img/Shop/icon3.svg';
import Feature from '../MainPage/Feature/Feature';
import ProductsShopPage from './ProductsShopPage/ProductsShopPage';
import Quality from './Quality/Quality';
import { useState } from 'react';
function ShopPage({ products }) {
    const [page, setPage] = useState(1);
    return (
        <>
            <Feature title="Shop" text="Shop" />
            <div className={style.filterSection}>
                <div className={style.sideIcons}>
                    <img className={style.icons} src={icon1} alt="" />
                    <p className={style.textFilter}>Filter</p>
                    <img className={style.icons} src={icon2} alt="" />
                    <img className={style.icons} src={icon3} alt="" />
                    <div className={style.showingResults}>
                        <p className={style.textShowingResult}>Showing 1–16 of 32 results</p>
                    </div>
                </div>
                <div className={style.sideinput}>
                    <div className={style.wrapShow}>
                        <p className={style.textShow}>Show</p>
                        <input className={style.inputShow} type="number" placeholder='16' />
                    </div>
                    <div className={style.wrapShortBy}>
                        <p className={style.textShortBy}>Short by</p>
                        <input className={style.inputShortBy} type="text" placeholder='Default' />
                    </div>
                </div>
            </div>
            <ProductsShopPage products={products} page={page} />
            <div className={style.wrapButtons}>
                <button className={style.button} onClick={() => { setPage(1) }}>1</button>
                <button className={style.button} onClick={() => { setPage(2) }}>2</button>
                <button className={style.button} onClick={() => { setPage(3) }}>3</button>
                <button className={style.buttonNext}>Next</button>
            </div>
            <Quality />
        </>
    );
}
export default ShopPage;