
import style from './OrderShopingCart.module.css';
function OrderShopingCart({ item, changeCart, index}) {
 
    return (<>
        <div className={style.wrapOrderShopingCart}>
            {item && (
                <>
                    <img className={style.imgOrderShopingCart} src={item?.img} alt="" />
                   
                    <div className={style.wrapTitleTextPriceOrderShopingCart}>
                        <div className={style.innerTitleOrderShopingCart}>
                            <h1 className={style.textTitleOrderShopingCart}>{item?.title}</h1>
                        </div>

                        <div className={style.innerOrderShopingCart}>
                            <input className={style.inputOrderShopingCart} value={item.quantity} onChange={(e) => { changeCart(index,e.target.value) }} type="number" />
                            <p className={style.textXOrderShopingCart}>x</p>
                            <h2 className={style.textPriceOrderShopingCart}>Rs. {item.price}</h2>
                        </div>
                    </div>
                </>
            )}
            <button className={style.btnDelete} onClick={() => changeCart(index, null)}></button>
        </div>

        
    </>)
}
export default OrderShopingCart;