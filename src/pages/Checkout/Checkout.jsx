import Header from "../MainPage/Header/Header";
import style from './Checkout.module.css';
// import img1 from '../../img/Shop/Rectangle 1.svg';
import logo from '../../img/Header/Meubel House_Logos-05.svg';
import ellips1 from './../../img/Checkout/Ellipse1.svg';
import ellips2 from './../../img/Checkout/Ellipse2.svg';
import img2 from '../../img/Checkout/Frame 161.svg';
import Footer from "../MainPage/Footer/Footer";
import Quality from "../ShopPage/Quality/Quality";


function Checkout() {
    return (<>
        
        <div className={style.img1}>
            {/* <img className={style.img1} src={img1} alt="" /> */}
            <div className={style.wrap}>
                <img className={style.logo} src={logo} alt="" />
                <h1 className={style.title}>Checkout</h1>
                <div className={style.inner}>
                    <p className={style.textHome}>Home</p>
                    <p className={style.sign}> &gt; </p>
                    <p className={style.textCheckout}>Checkout</p>
                </div>
            </div>
        </div>

        <h1 className={style.textBillingDetails}>Billing details</h1>
        <div className={style.sectionInputText}>
            <div className={style.wrapInput}>
                <div className={style.wrapFirstLastName}>
                    <div className={style.innerFirstName}>
                        <p className={style.textFirstName}>First Name</p>
                        <input className={style.inputFirstName} type="text" />
                    </div>
                    <div className={style.innerLastName}>
                        <p className={style.textLastName}>Last Name</p>
                        <input className={style.inputLastName} type="text" />
                    </div>
                </div>

                <p className={style.textInput}>Company Name (Optional)</p>
                <input className={style.input} type="text" />

                <p className={style.textInput}>Country / Region</p>
                <select className={style.select} name="" id="">
                    <option value="">Sri Lanka</option>
                </select>

                <p className={style.textInput}>Street address</p>
                <input className={style.input} type="text" />

                <p className={style.textInput}>Town / City</p>
                <input className={style.input} type="text" />

                <p className={style.textInput}>Province</p>
                <select className={style.select} name="" id="">
                    <option value="">Western Province</option>
                </select>

                <p className={style.textInput}>ZIP code</p>
                <input className={style.input} type="text" />

                <p className={style.textInput}>Phone</p>
                <input className={style.input} type="text" />

                <p className={style.textInput}>Email address</p>
                <input className={style.input} type="text" />
                <input className={style.input} type="text" placeholder="Additional information" />
            </div>


            <div className={style.wrapInfoProduct}>
                <div className={style.wrapProduct}>
                    <div className={style.innerProduct}>
                        <p className={style.textProduct}>Product</p>
                        <div className={style.wrapAsgaardSofa}>
                            <p className={style.textAsgaardSofa}>Asgaard sofa</p>
                            <p className={style.textX1}>x 1</p>
                        </div>
                        <p className={style.textSubtotal}>Subtotal</p>
                        <p className={style.textTotal}>Total</p>
                    </div>
                    <div className={style.innerSubtotal}>
                        <p className={style.textTitleSubtotal}>Subtotal</p>
                        <p className={style.textRs}>Rs. 250,000.00</p>
                        <p className={style.textRs}>Rs. 250,000.00</p>
                        <p className={style.textRsColor}>Rs. 250,000.00</p>
                    </div>
                </div>

                <div className={style.wrapDirectBankTransfer}>
                    <div className={style.wrapEllipsText}>
                        <img src={ellips1} alt="" />
                        <p className={style.textDirectBankTransfer}>Direct Bank Transfer</p>
                    </div>
                    <p className={style.textMakeYourPayment}>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    <div className={style.wrapEllipsText}>
                        <img src={ellips2} alt="" />
                        <p className={style.textDirectBankTransferGray}>Direct Bank Transfer</p>
                    </div>
                    <div className={style.wrapEllipsText}>
                        <img src={ellips2} alt="" />
                        <p className={style.textCashOnDelivery}>Cash On Delivery</p>
                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our<strong> privacy policy.</strong></p>
                    </div>
                </div>
                <div className={style.wrapbtn}>
                    <button className={style.btnPlaceOrder}>Place order</button>
                </div>
            </div>
        </div>
        <Quality/>
        
    </>)
}
export default Checkout;