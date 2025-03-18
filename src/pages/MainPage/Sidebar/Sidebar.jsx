import pic from '../../../img/Sidebar/scandinavian-interior-mockup-wall-decal-background 1.svg';
import style from '../Sidebar/Sidebar.module.css';
function Sidebar() {
    return (<>
         <div className={style.containerSidebar}>
            <div className={style.wrapSidebarPic} >
            <img className={style.sidebarPic} src={pic} alt=""/>
            </div>
            <div className={style.wrap}>
            <div className={style.inner}>
                <p className={style.text1}>New Arrival</p>
                <p  className={style.text2}>Discover Our<br /> New Collection</p>
                <p  className={style.text3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />elit tellus, luctus nec ullamcorper mattis.</p>
                <button  className={style.btnSidebar}>Buy now</button>
                </div>
            </div>
         </div>
        </>
    )
}
export default Sidebar;