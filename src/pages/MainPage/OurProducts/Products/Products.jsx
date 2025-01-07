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
            </div>
        </div>
        <div className={style.wrapBtnProduction}>
            <button className={style.btnProducts}>Show More</button>
        </div>
    </>
    )
}
export default Products;