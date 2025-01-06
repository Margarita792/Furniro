import img1 from '../../../img/Inspiration Rooms/Rectangle 24.svg';
import img2 from '../../../img/Inspiration Rooms/Rectangle 25.svg';
import img3 from '../../../img/Inspiration Rooms/Rectangle 26.svg';
import img4 from '../../../img/Inspiration Rooms/Indicator.svg';
import img5 from '../../../img/Inspiration Rooms/Share.svg';
import style from './InspirationRooms.module.css';
function InspirationRooms({ }) {
    return (<>
        <div className={style.containerInspirationRooms}>
            <div className={style.innerTextBtn}>
                <h1 className={style.titleInspirationRooms}>50+ Beautiful rooms <br /> inspiration</h1>
                <p className={style.descriptionInspirationRooms}>Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
                <button className={style.btnInspirationRooms1}>Explore More</button>
            </div>
            <div className={style.innerImgBtn}>
                <img src={img1} />
                <div className={style.content}>
                    <p className={style.textContent1}>01 — Bed Room</p>
                    <p className={style.textContent2}>Inner Peace</p>
                </div>
                <button className={style.btnInspirationRooms2}>→</button>
            </div>
            <div className={style.innerImgSlider}>
                <div className={style.imgs}>
                    <img className={style.imgsImg2} src={img2} />
                    <img src={img3} />
                </div>
                <img className={style.ndicator} src={img4} />
            </div>
        </div>
        <button className={style.btnSlider}>→</button>
        <img className={style.furniture} src={img5} />
    </>
    )
}
export default InspirationRooms;