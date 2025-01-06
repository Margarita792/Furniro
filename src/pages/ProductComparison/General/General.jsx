import style from './General.module.css'
function General() {
    return (<>
        <h2 className={style.title}>General </h2>
        <div className={style.wrap}>
            <div className={style.wrapColumn}>
                <p className={style.text}>Sales Package</p>
                <p className={style.text}>Model Number</p>
                <p className={style.text}>Secondary Material</p>
                <p className={style.text}>Configuration</p>
                <p className={style.text}>Upholstery Material</p>
                <p className={style.text}>Upholstery Color</p>
            </div>

            <div className={style.wrapColumn}>
                <p className={style.text}>1 sectional sofa</p>
                <p className={style.text}>TFCBLIGRBL6SRHS</p>
                <p className={style.text}>Solid Wood</p>
                <p className={style.text}>L-shaped</p>
                <p className={style.text}>Fabric + Cotton</p>
                <p className={style.text}>Bright Grey & Lion</p>
            </div>

            <div className={style.wrapColumn}>
                <p className={style.text}>1 Three Seater, 2 Single Seater</p>
                <p className={style.text}>DTUBLIGRBL568</p>
                <p className={style.text}>Solid Wood</p>
                <p className={style.text}>L-shaped</p>
                <p className={style.text}>Fabric + Cotton</p>
                <p className={style.text}>Bright Grey & Lion</p>
            </div>
        </div>

        <h2 className={style.title}>Product </h2>
        <div className={style.wrap}>
            <div className={style.wrapColumn}>
                <p className={style.text}>Filling Material</p>
                <p className={style.text}>Finish Type</p>
                <p className={style.text}>Adjustable Headrest</p>
                <p className={style.text}>Maximum Load <br /> Capacity</p>
                <p className={style.text}>Origin of Manufacture</p>
            </div>

            <div className={style.wrapColumn}>
                <p className={style.text}>Foam</p>
                <p className={style.text}>Bright Grey & Lion</p>
                <p className={style.text}>No</p>
                <p className={style.text}>280 KG</p>
                <p className={style.text}>India</p>
            </div>

            <div className={style.wrapColumn}>
                <p className={style.text}>Matte</p>
                <p className={style.text}>Bright Grey & Lion</p>
                <p className={style.text}>yes</p>
                <p className={style.text}>300 KG</p>
                <p className={style.text}>India</p>
            </div>
        </div>

        <h2 className={style.title}>Dimensions</h2>
        <div className={style.wrap}>
            <div className={style.wrapColumn}>
                <p className={style.text}>Width</p>
                <p className={style.text}>Height</p>
                <p className={style.text}>Depth</p>
                <p className={style.text}>Weight</p>
                <p className={style.text}>Seat Height</p>
                <p className={style.text}>Leg Height</p>
            </div>

            <div className={style.wrapColumn}>
                <p className={style.text}>265.32 cm</p>
                <p className={style.text}>76 cm</p>
                <p className={style.text}>167.76 cm</p>
                <p className={style.text}>45 KG</p>
                <p className={style.text}>41.52 cm</p>
                <p className={style.text}>5.46 cm</p>
            </div>

            <div className={style.wrapColumn}>
                <p className={style.text}>265.32 cm</p>
                <p className={style.text}>76 cm</p>
                <p className={style.text}>167.76 cm</p>
                <p className={style.text}>65 KG</p>
                <p className={style.text}>41.52 cm</p>
                <p className={style.text}>5.46 cm</p>
            </div>
        </div>

        <h2 className={style.title}>Warranty </h2>
        <div className={style.wrap}>
            <div className={style.wrapColumn}>
                <p className={style.textWarrantyRow1}>Warranty Summary</p>
                <p className={style.textWarrantyRow2}>Warranty Service <br />
                    Type</p>
                <p className={style.textWarrantyRow3}>Covered in Warranty</p>
                <p className={style.textWarrantyRow4}>Not Covered in Warranty</p>
                <p className={style.textWarrantyRow5}>Domestic Warranty</p>
            </div>

            <div className={style.wrapColumn}>
                <p className={style.textWarrantyRow1}>1 Year Manufacturing <br /> Warranty</p>
                <p className={style.textWarrantyRow2}>For Warranty Claims or<br /> Any Product Related<br /> Issues Please Email at<br /> operations@trevifurnitu<br />re.com</p>
                <p className={style.textWarrantyRow3}>Warranty Against <br />Manufacturing Defect</p>
                <p className={style.textWarrantyRow4}>The Warranty Does Not <br /> Cover Damages Due To <br /> Usage Of The Product <br /> Beyond Its Intended Use <br /> And Wear & Tear In The <br /> Natural Course Of<br />  Product Usage.</p>
                <p className={style.textWarrantyRow5}>1 Year</p>
                <button className={style.btnAddToCart}>Add To Cart</button>
            </div>

            <div className={style.wrapColumn}>
                <p className={style.textWarrantyRow1}>1.2 Year Manufacturing <br /> Warranty</p>
                <p className={style.textWarrantyRow2}>For Warranty Claims or <br />Any Product Related <br />Issues Please Email at <br />support@xyz.com</p>
                <p className={style.textWarrantyRow3}>Warranty of the product <br />is limited to <br />manufacturing defects <br />only.</p>
                <p className={style.textWarrantyRow4}>The Warranty Does Not <br />Cover Damages Due To <br />Usage Of The Product <br />Beyond Its Intended Use <br />And Wear & Tear In The <br />Natural Course Of <br />Product Usage.</p>
                <p className={style.textWarrantyRow5}>3 Months</p>
                <button className={style.btnAddToCart}>Add To Cart</button>
            </div>
        </div>

    </>)
}
export default General;