import style from "./Quality.module.css"
import icon1 from '../../../img/Quality/trophy.svg'
import icon2 from '../../../img/Quality/Group.svg'
import icon3 from '../../../img/Quality/shipping.svg'
import icon4 from '../../../img/Quality/customer-support.svg'
function Quality() {
    return (<>
        <div className={style.container}>
            <div className={style.wrap}>
                <img src={icon1} alt="" />
                <div className={style.inner}>
                    <p className={style.title}>High Quality</p>
                    <p className={style.text}>crafted from top materials</p>
                </div>
            </div>

            <div className={style.wrap}>
                <img src={icon2} alt="" />
                <div className={style.inner}>
                    <p className={style.title}>Warranty Protection</p>
                    <p className={style.text}>Over 2 years</p>
                </div>
            </div>

            <div className={style.wrap}>
                <img src={icon3} alt="" />
                <div className={style.inner}>
                    <p className={style.title}>Free Shipping</p>
                    <p className={style.text}>Order over 150 $</p>
                </div>
            </div>

            <div className={style.wrap}>
                <img src={icon4} alt="" />
                <div className={style.inner}>
                    <p className={style.title}>24 / 7 Support</p>
                    <p className={style.text}>Dedicated support</p>
                </div>
            </div>
        </div>
    </>)
}
export default Quality;