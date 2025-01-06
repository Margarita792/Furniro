import style from './GoToProduct.module.css'
import img1 from '../../../img/GoToProduct/Group 156.svg'
import img2 from '../../../img/GoToProduct/Group 157.png'
import img3 from '../../../img/GoToProduct/Group 88.svg'
function GoToProduct() {
    return (<>
        <div className={style.container}>
            <div className={style.wrapText}>
                <h1 className={style.textGoToProduct}>Go to Product<br /> page for more <br />
                    Products</h1>
                <p className={style.textViewMore}>View More</p>
            </div>

            <div className={style.product1}>
                <img src={img1} alt="" />
                <p className={style.titleProduct}>Asgaard Sofa</p>
                <p className={style.priceProduct}>Rs. 250,000.00</p>
                <div className={style.innerStarsProduct}>
                    <p className={style.retingProduct}>4.7</p>
                    <img src={img3} alt="" />
                    <div className={style.innerReviewProduct}>
                        <p className={style.reviewProduct}>204 Review</p>
                    </div>
                </div>
            </div>

            <div className={style.product2}>
                <img src={img2} alt="" />
                <p className={style.titleProduct}>Outdoor Sofa Set</p>
                <p className={style.priceProduct}>Rs. 224,000.00</p>
                <div className={style.innerStarsProduct}>
                    <p className={style.retingProduct}>4.5</p>
                    <img src={img3} alt="" />
                    <div className={style.innerReviewProduct}>
                        <p className={style.reviewProduct}>145 Review</p>
                    </div>
                </div>
            </div>

            <div className={style.wrapBtn}>
                <p className={style.textAddAProduct}>Add A Product</p>
                <select className={style.select} id="">
                    <option value="">Choose a Product</option>
                </select>
            </div>
        </div>
    </>

    )
}
export default GoToProduct;