
import OrderCartTotals from '../OrderCartTotals/OrderCartTotals';
import style from './CartTotals.module.css'
function CartTotals({ cart,changeCart}) {
    const getTotal = () => {
        let sum = 0
        for (let item of cart) {
            sum += item.price * item.quantity;
        }
        console.log(sum);
        return sum;
    };
    return (<>
        <div className={style.container}>
            <div> 
                <div className={style.wrapTitle}>
                    <p className={style.textProduct}>Product</p>
                    <p className={style.textPrice}>Price</p>
                    <p className={style.textQuantity}>Quantity</p>
                    <p className={style.textSubtotalTitle}>Subtotal</p>
                </div>

                {cart.map((item, index) => (
                    <OrderCartTotals
                        key={index}
                        index={index}
                        item={item}
                        changeCart={changeCart} 
                    />
                ))}

            </div>
            <div className={style.wrapCartTotal}>
                <h2>Cart Totals</h2>
                <div className={style.wrapSubtotal}>
                    <p className={style.textSubtotal}>Subtotal</p>
                    <p className={style.textPriceSubtotal}>Rs. {getTotal()}</p>
                </div>
                <div className={style.wrapTotal}>
                    <p>Total</p>
                    <p className={style.textPriceTotal}>Rs. {getTotal()}</p>
                </div>
                <button className={style.btnCheckOut}>Check Out</button>
            </div>
        </div>
    </>)
}
export default CartTotals;
