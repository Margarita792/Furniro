import style from '../Products.module.css'
function ProductNew({ img, title, description, price }) {
    return (
        <div className={style.innerRespira}>
            <div className={style.new}>
                <p>New </p>
            </div>
            <img src={img} />
            <p className={style.textTitle}>{title}</p>
            <p className={style.textDescription}>{description}</p>
            <p className={style.textPrice}>Rs. {price}</p>
        </div>
    )
}
export default ProductNew;