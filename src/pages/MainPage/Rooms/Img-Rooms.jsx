import dining from '../../../img/Rooms/Dining.svg'
import living from '../../../img/Rooms/living.svg'
import bedroom from '../../../img/Rooms/Bedroom.svg'
import style from './Img-Rooms.module.css'
function Rooms({ }) {
    return (<>
        <div className={style.containerRooms}>
            <div className={style.innerText}>
                <p className={style.title}>Browse The Range</p>
                <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className={style.imagesRooms}>
                <div className={style.dining}>
                    <img src={dining} />
                    <p className={style.textDining}>Dining</p>
                </div>
                <div className={style.dining}>
                    <img src={living} />
                    <p className={style.textDining}>Living</p>
                </div>
                <div className={style.dining}>
                    <img src={bedroom} />
                    <p className={style.textDining}>Bedroom</p>
                </div>
            </div>
        </div>
    </>
    )
}
export default Rooms;