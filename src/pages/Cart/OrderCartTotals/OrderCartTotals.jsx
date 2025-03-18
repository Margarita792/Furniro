import style from './OrderCartTotals.module.css';
function OrderCartTotals({ item, changeCart, index }) {
    return (<>
        <div className={style.wrapOrderCartTotals}>
            <img className={style.img} src={item.img} alt="" />
            <p className={style.textTitleOrderCartTotals}>{item.title}</p>
            <p className={style.textPriceOrderCartTotals}>Rs. {item.price}</p>
            <input className={style.inputQuantityOrderCartTotals} value={item.quantity}
                onChange={(e) => { changeCart(index, e.target.value) }}
                type="number" />
            <p className={style.textSubtotalOrderCartTotals}>Rs. {item.price * item.quantity}</p>
            <button onClick={() => changeCart(index, null)} className={style.btnDelete}></button>
        </div>
    </>)
}
export default OrderCartTotals;