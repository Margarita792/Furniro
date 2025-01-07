import style from '../Products.module.css'
function ProductOrdinary({img, title, discription, price}) {
    return (
        <div className={style.innerLeviosa}>
            <img src={img} alt=""/>
            <p className={style.textTitle}>{title}</p>
            <p className={style.textDiscription}>{discription}</p>
            <p className={style.textPrice}>Rs. {price}</p>
        </div>
    )
}
export default ProductOrdinary;