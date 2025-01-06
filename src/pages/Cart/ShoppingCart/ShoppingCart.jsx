import { Link } from 'react-router-dom';
import OrderShopingCart from '../OrderShopingCart/OrderShopingCart';
import style from './ShoppingCart.module.css'
import { useEffect, useState } from 'react';
function ShoppingCart({ cart, cartVisible, setCartVisible, changeCart }) {
  
    const getTotal = () => {
        let sum = 0
        for (let item of cart) {
            sum += item.price * item.quantity;
        }
        console.log(sum);
        return sum;
    };
  



    return (<>
        <div className={cartVisible ? style.container : style.hidden}>
            <div className={style.cart}>
                <div className={style.wrapper}>
                    <div className={style.wrapTitleIcon}>
                        <h1 className={style.title}>Shopping Cart</h1>
                        <button className={style.btnCartProduct} onClick={() => { setCartVisible(false) }}></button>
                    </div>
                    {cart.map((item, index) => {
                        // console.log(changeCart);
                        return (
                            <OrderShopingCart key={index} index={index} item={item} changeCart={changeCart} />
                        )
                    })}
                    <div className={style.innerSubtotalOrderShopingCart}>
                        <p className={style.textSubtotalOrderShopingCart}>Subtotal</p>
                        <p className={style.textPriceSubtotalOrderShopingCart}>Rs. {getTotal()} </p>
                    </div>
                </div>
                <div className={style.wrapBtn}>
                    <Link className={style.link} to="/cart">
                        <button className={style.btnCart}>Cart</button>
                    </Link>
                    <Link className={style.link} to="/checkout">
                        <button className={style.btnCheckout}>Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    </>)
}
export default ShoppingCart;