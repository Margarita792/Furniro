import { Link } from 'react-router-dom';
import logo from '../../../img/Feature/Meubel House_Logos-05.svg';
import style from './Feature.module.css'
function Feature({ title, text }) {
    return (<>
        <div className={style.img1}>
            <div className={style.wrap}>
                <img className={style.logo} src={logo} alt="" />
                <h1 className={style.title}>{title}</h1>
                <div className={style.inner}>
                    <Link className={style.link} to="/">
                        <p className={style.textHome}>Home</p>
                    </Link>
                    <p className={style.sign}> &gt; </p>
                    <p className={style.text}>{text}</p>
                </div>
            </div>
        </div>
    </>)
}
export default Feature;