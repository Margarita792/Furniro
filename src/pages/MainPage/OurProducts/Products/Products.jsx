// import img1 from '../../../../img/Products/image1.svg'
// import img2 from '../../../../img/Products/Image2.svg'
// import img3 from '../../../../img/Products/Image3.svg'
// import img4 from '../../../../img/Products/Image4.svg'
// import img5 from '../../../../img/Products/Image5.svg'
// import img6 from '../../../../img/Products/Image6.svg'
// import img7 from '../../../../img/Products/Image7.svg'
// import img8 from '../../../../img/Products/Image8.svg'
import ProductDiscount from './Product/Product'
import ProductOrdinary from './ProductOrdinary/ProductOrdinary'
import ProductNew from './ProductNew/ProductNew'
import style from '../Products/Products.module.css'
import { Link } from 'react-router-dom'
function Products({  products, discount,img,title,description,price,sale,state }) {
    return (<>

        <h1 className={style.textOurProducts}>Our Products</h1>
        <div className={style.containerProducts}>
            <div className={style.wrapperProducts}>
                

                {products.slice(0,8).map((item,index)=>{
                    if (item.state === "discount") {
                        return (
                            <Link key={index} className={style.link} to = {`/shop/product/${index}`}>
                            <ProductDiscount 
                            discount = {item.discount} 
                            img={item.img} 
                            title={item.title} 
                            description = {item.description} 
                            price = {item.price} 
                            sale = {item.sale} />
                            </Link>
                        )
                    }
                    if (item.state === "default") {
                        return (
                            <Link key={index} className={style.link} to = {`/shop/product/${index}`}>
                        <ProductOrdinary 
                        img={item.img} 
                        title={item.title} 
                        description = {item.description}
                         price = {item.price}/>
                         </Link>
                        )
                    }
                    if (item.state === "new") {
                        return (
                            <Link key={index} className={style.link} to = {`/shop/product/${index}`}>
                        <ProductNew 
                        img={item.img} 
                        title={item.title} 
                        description = {item.description} 
                        price = {item.price} />
                        </Link>
                        )
                    }
                })}
                {/* <ProductDiscount discount="-30%" img={img1} title="Syltherine" description="Stylish cafe chair" price="Rp 2.500.000" sale="Rp 3.500.000" />

                <ProductOrdinary img={img2} title="Leviosa" description="Stylish cafe chair" price="Rp 2.500.000" />

                <ProductDiscount discount="-50%" img={img3} title="Lolito" description="Luxury big sofa" price="Rp 7.000.000" sale="Rp 14.000.000" />

                <ProductNew New="New" img={img4} title="Respira" description="Outdoor bar table and stool" price="Rp 500.000" />

                <ProductOrdinary img={img5} title="Grifo" description="Night lamp" price="Rp 1.500.000" />

                <ProductNew New="New" img={img6} title="Muggo" description="Small mug" price="Rp 150.000" />

                <ProductDiscount discount="-50%" img={img7} title="Pingky" description="Cute bed set" price="Rp 7.000.000" sale="Rp 14.000.000" />

                <ProductNew New="New" img={img8} title="Potty" description="Minimalist flower pot" price="Rp 500.000" /> */}
            </div>
        </div>
        <div className={style.wrapBtnProduction}>
            <button className={style.btnProducts}>Show More</button>
        </div>
    </>
    )
}
export default Products;