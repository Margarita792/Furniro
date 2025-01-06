import img1 from '../../../img/Menu/Rectangle 1.svg'
function Menu () {
    return (<>
    <div className={style.aside}>
                <img className={style.img1} src={img1} alt="" />
                <div className={style.wrap}>
                <img className={style.logo} src={logo} alt="" />
                    <h1 className={style.title}>Product Comparison</h1>
                    <div className={style.inner}>
                        <p className={style.textHome}>Home</p>
                        <p className={style.sign}> &gt; </p>
                        <p className={style.textComparison}>Comparison</p>
                    </div>
                </div>
            </div>
    </>)
}
export default Menu;