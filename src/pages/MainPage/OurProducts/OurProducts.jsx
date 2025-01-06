import style from '../OurProducts/Products/Products.module.css'
import ProductDiscount from '../OurProducts/Products/ProductDiscount/ProductDiscount';
import ProductOrdinary from '../OurProducts/Products/ProductOrdinary/ProductOrdinary';
import ProductNew from '../OurProducts/Products/ProductNew/ProductNew';
import img1 from '../../../img/Products/image1.svg'
import img2 from '../../../img/Products/Image2.svg'
import img3 from '../../../img/Products/Image3.svg'
import img4 from '../../../img/Products/Image4.svg'
import img5 from '../../../img/Products/Image5.svg'
import img6 from '../../../img/Products/Image6.svg'
import img7 from '../../../img/Products/Image7.svg'
import img8 from '../../../img/Products/Image8.svg'
function OurProducts({ products, discount, img, title, description, price, sale, state }) {
    return (
        <div className={style.containerProducts}>
            <div className={style.wrapperProducts}>


                <ProductDiscount
                    discount="-30%"
                    img={img1} 
                    title="Syltherine"
                    description="Stylish cafe chair"
                    price="Rp 2.500.000"
                    sale="Rp 3.500.000" />


                <ProductOrdinary
                    img={img2}
                    title="Leviosa"
                    description="Stylish cafe chair"
                    price="Rp 2.500.000" />


                <ProductDiscount
                    discount="-50%"
                    img={img3} title="Lolito"
                    description="Luxury big sofa"
                    price="Rp 7.000.000"
                    sale="Rp 14.000.000" />


                <ProductNew
                    New="New"
                    img={img4}
                    title="Respira"
                    description="Outdoor bar table and stool"
                    price="Rp 500.000" />


                <ProductOrdinary
                    img={img5}
                    title="Grifo" description="Night lamp" price="Rp 1.500.000" />


                <ProductNew New="New"
                    img={img6}
                    title="Muggo"
                    description="Small mug"
                    price="Rp 150.000" />


                <ProductDiscount
                    discount="-50%"
                    img={img7}
                    title="Pingky"
                    description="Cute bed set"
                    price="Rp 7.000.000"
                    sale="Rp 14.000.000" />


                <ProductNew
                    New="New"
                    img={img8}
                    title="Potty"
                    description="Minimalist flower pot"
                    price="Rp 500.000" />


            </div>
        </div >
    )
}
export default OurProducts;