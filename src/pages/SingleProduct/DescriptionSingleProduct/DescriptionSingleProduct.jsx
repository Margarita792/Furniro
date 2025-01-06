import style from '..//DescriptionSingleProduct/DescriptionSingleProduct.module.css'
import img1 from '../../../img/DescriptionSingleProduct/Group 106.svg'
import img2 from '../../../img/DescriptionSingleProduct/Group 107.svg'
function DescriptionSingleProduct() {
    return (<>
        <div className={style.container}>
            <div className={style.wrapTitle}>
                <p className={style.textDescription}>Description</p>
                <p className={style.textAdditional}>Additional Information</p>
                <p className={style.textReviews}>Reviews [5]</p>
            </div>
            <div className={style.wrapText}>
                <p className={style.text}>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                <p className={style.text}>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
            </div>
            <div className={style.wrapImg}>
                <img className={style.img1} src={img1} alt="" />
                <img className={style.img2} src={img2} alt="" />
            </div>
        </div>
    </>
    )
}
export default DescriptionSingleProduct;