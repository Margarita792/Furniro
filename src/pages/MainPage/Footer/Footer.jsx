import { Link } from 'react-router-dom';
import style from './Footer.module.css'
function Footer({ }) {
    return (<>
        <div className={style.containerFooter}>
            
                <div className={style.column1}>
                    <h1 className ={style.titleColumn1}>Funiro.</h1>
                    <p className={style.addsColumn1}>400 University Drive Suite 200 Coral<br /> Gables,<br />
                        FL 33134 USA</p>
                </div>
            <div className={style.column2}>
                <p className={style.textInfo}>Links</p>
                <Link className={style.link} to="/"> <p className={style.textColumn}>Home</p></Link>
                <Link className={style.link} to="/shop">  <p className={style.textColumn}>Shop</p></Link>
                <p className={style.textColumn}>About</p>
                <Link className={style.link} to="/contact"><p className={style.textColumn}>Contact</p></Link>
            </div>
            <div className={style.column3}>
                <p className={style.textInfo}>Help</p>
                <p className={style.textColumn}>Payment Options</p>
                <p className={style.textColumn}>Returns</p>
                <p className={style.textColumn}>Privacy Policies</p>

            </div>
            <div className={style.column4}>
            <p className={style.textInfo}>Newsletter</p>
            <div className={style.innerUnderlinText}>
                <p className={style.underlinTextGray}>Enter Your Email Address</p>
                <p className={style.underlinTextBlack}>SUBSCRIBE</p>
            </div>
            </div>
            <div className = {style.rowFooter}>
            <p className={style.textRowFooter}>2023 furino. All rights reverved</p>
        </div>
        </div>
        
    </>
    )
}
export default Footer;