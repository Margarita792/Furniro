import ProductDiscount from './Product/Product'
import ProductOrdinary from './ProductOrdinary/ProductOrdinary'
import ProductNew from './ProductNew/ProductNew'
import style from '../Products/Products.module.css'
import { Link } from 'react-router-dom'
function Products({ products }) {
    return (<>

        <h1 className={style.textOurProducts}>Our Products</h1>
        <div className={style.containerProducts}>
            <div className={style.wrapperProducts}>


                {products
                .slice(0, 4)
                .map((item, index) => {
                    if (item.state === "discount") {
                        return (
                            <Link key={index} className={style.link} to={`/shop/product/${index}`}>
                                <ProductDiscount
                                    discount={item.discount}
                                    img={item.img}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                    sale={item.sale} />
                            </Link>
                        )
                    }
                    if (item.state === "default") {
                        return (
                            <Link key={index} className={style.link} to={`/shop/product/${index}`}>
                                <ProductOrdinary
                                    img={item.img}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price} />
                            </Link>
                        )
                    }
                    if (item.state === "new") {
                        return (
                            <Link key={index} className={style.link} to={`/shop/product/${index}`}>
                                <ProductNew
                                    img={item.img}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price} />
                            </Link>
                        )
                    }
                    return null;
                })}
            </div>
            <div className={style.wrapperProducts}>


                {products
                .slice(4, 8)
                .map((item, index) => {
                    if (item.state === "discount") {
                        return (
                            <Link key={index} className={style.link} to={`/shop/product/${index}`}>
                                <ProductDiscount
                                    discount={item.discount}
                                    img={item.img}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                    sale={item.sale} />
                            </Link>
                        )
                    }
                    if (item.state === "default") {
                        return (
                            <Link key={index} className={style.link} to={`/shop/product/${index}`}>
                                <ProductOrdinary
                                    img={item.img}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price} />
                            </Link>
                        )
                    }
                    if (item.state === "new") {
                        return (
                            <Link key={index} className={style.link} to={`/shop/product/${index}`}>
                                <ProductNew
                                    img={item.img}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price} />
                            </Link>
                        )
                    }
                    return null;
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