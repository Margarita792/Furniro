import style from './Contact.module.css';
import icon1 from '../../img/Contact/Vector.svg';
import icon2 from '../../img/Contact/bxs_phone.svg';
import icon3 from '../../img/Contact/bi_clock-fill.svg';
import Feature from "../MainPage/Feature/Feature";
import Quality from "../ShopPage/Quality/Quality";

function Contact() {
    return (<>
        
        <Feature title="Contact" text="Contact"/>
        <div className={style.container}>
            <h1 className={style.textGetIn}>Get In Touch With Us</h1>
            <p className={style.textForMore}>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>

            <div className={style.sectionAddressInput}>
                <div className={style.wrapAddressInput}>
                    <div className={style.wrapIconText}>
                        <img src={icon1} alt="" />
                        <p className={style.textPhone}>Address</p>
                    </div>
                    <p className={style.text}>236 5th SE Avenue, New York NY10000, United States</p>

                    <div className={style.wrapIconText}>
                        <img src={icon2} alt="" />
                        <p className={style.textPhone}>Phone</p>
                    </div>
                    <p className={style.text}>Mobile: +(84) 546-6789
                        Hotline: +(84) 456-6789</p>

                    <div className={style.wrapIconText}>
                        <img src={icon3} alt="" />
                        <p className={style.textPhone}>Working Time</p>
                    </div>
                    <p className={style.text}>Monday-Friday: 9:00 - 22:00<br />
                        Saturday-Sunday: 9:00 - 21:00</p>
                </div>
            

            <div className={style.wrapInput}>
                <p className={style.textInput}>Your name</p>
                <input className={style.input} type="text" placeholder="Abc"/>
                <p className={style.textInput}>Email address</p>
                <input className={style.input} type="text" placeholder="Abc@def.com"/>
                <p className={style.textInput}>Subject</p>
                <input className={style.input} type="text" placeholder="This is an optional"/>
                <p className={style.textInput}>Message</p>
                <input className={style.bigInput} type="text" placeholder="Hi! i’d like to ask about"/>
                <button className={style.btn}>Submit</button>
            </div>
            </div>
        </div>
        <Quality/>
         
    </>)
}
export default Contact;