import style from '../Products.module.css'
function ProductDiscount({ discount, img, title, description, price, sale }) {
    return (<div className={style.innerSyltherine}>
        <div className={style.discount}>
            <p className={style.textDiscount}>{discount}%</p>
        </div>
        <img src={img} alt=""/>
        <p className={style.textTitle}>{title}</p>
        <p className={style.textDescription}>{description}</p>
        <div className={style.rowPrice}>
            <p className={style.textPrice}>Rs. {price}</p>
            <p className={style.textPriceSale}>{sale}</p>
        </div>
    </div>
    )
}
export default ProductDiscount;