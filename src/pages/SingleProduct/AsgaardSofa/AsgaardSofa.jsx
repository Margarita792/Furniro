import { useState } from 'react'
import img1 from '../../../img/Shop/AsgaardSofa/Group1.svg'
import img2 from '../../../img/Shop/AsgaardSofa/Group2.svg'
import img3 from '../../../img/Shop/AsgaardSofa/Group3.svg'
import img4 from '../../../img/Shop/AsgaardSofa/Group4.svg'
import img6 from '../../../img/Shop/AsgaardSofa/Stars.svg'
import icon1 from '../../../img/Shop/AsgaardSofa/akar-icons_facebook-fill.svg'
import icon2 from '../../../img/Shop/AsgaardSofa/akar-icons_linkedin-box-fill.svg'
import icon3 from '../../../img/Shop/AsgaardSofa/ant-design_twitter-circle-filled.svg'
import style from '../AsgaardSofa/AsgaardSofa.module.css'

function AsgaardSofa({product, addCart}) {
    const [quantity, setQuantity] = useState(1);
    return (
    <>
        <div className={style.container}>
            <div className={style.imgSection}>
                <div className={style.imgColumn}>
                    <img className={style.img1} src={img1} alt="" />
                    <img className={style.img1} src={img2} alt="" />
                    <img className={style.img1} src={img3} alt="" />
                    <img className={style.img1} src={img4} alt="" />
                </div >
                <div className={style.bigImg}>
                    <img className={style.img2} src={product.img} alt="" />
                </div>
            </div>

            <div className={style.textSection}>
                <h1 className={style.textTitle}>{product.title}</h1>
                <h2 className={style.textPrice}>Rs.{product.price}</h2>

                <div className={style.wrapStars}>
                    <img className={style.img3} src={img6} alt="" />
                    <div className={style.innerCustomerReview}>
                        <p className={style.textCustomerReview}>5 Customer Review</p>
                    </div>
                </div>
                <p className={style.textdescriptionProduct}>{product.description}

                </p>

                <p className={style.textSize}>Size</p>

                <div className={style.wrapBtnSize}>
                    {product.size.map((item,index) => {
                        return <button key = {index} onClick={() => {
                        }} className={product.currentSize == item ? style.btnSizeActive : style.btnSize}>
                            {item}</button>
                    })}
                </div>

                <p className={style.textColor}>Color</p>

                <div className={style.wrapBtnColor}>
                    <button className={style.btnPurple}></button>
                    <button className={style.btnBlack}></button>
                    <button className={style.btnGold}></button>
                </div>

                <div className={style.wrapBtnFilter}>
                    <div className={style.innerQuantity}>
                        <button className={style.btnMinus} onClick={() => { setQuantity(quantity - 1) }}>-</button>
                        <input className={style.inputQuantity} value={quantity} onChange={(e) => { setQuantity(parseInt(e.target.value)) }} type="number" />
                        <button className={style.btnPlus} onClick={() => { setQuantity(quantity + 1) }}>+</button>
                    </div>
                    <button className={style.btnAddCard} onClick={() => { addCart({ ...product, quantity }) }}>Add To Cart</button>
                    <button className={style.btnCompare}>+ Compare</button>
                </div>

                <div className={style.wrapInformation}>
                    <div className={style.innerSKU}>
                        <p className={style.textTitleInformation}>SKU</p>
                        <p className={style.textDescriptionInformation}>: SS001</p>
                    </div>
                    <div className={style.innerCategory}>
                        <p className={style.textTitleInformation}>Category</p>
                        <p className={style.textDescriptionInformation}>: Sofas</p>
                    </div>
                    <div className={style.innerCategory}>
                        <p className={style.textTitleInformation}>Tags</p>
                        <p className={style.textDescriptionInformation}>: Sofa, Chair, Home, Shop</p>
                    </div>
                    <div className={style.innerShare}>
                        <p className={style.textTitleInformation}>Share</p>
                        <p className={style.textDescriptionInformation}>:</p>
                        {/* <div className={style.wrapIcons}> */}
                        <img className={style.icons} src={icon1} alt="" />
                        <img className={style.icons} src={icon2} alt="" />
                        <img className={style.icons} src={icon3} alt="" />
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default AsgaardSofa;