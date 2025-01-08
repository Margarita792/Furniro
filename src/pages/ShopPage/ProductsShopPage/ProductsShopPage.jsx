import ProductDiscount from '../../MainPage/OurProducts/Products/Product/Product'
import ProductOrdinary from '../../MainPage/OurProducts/Products/ProductOrdinary/ProductOrdinary'
import ProductNew from '../../MainPage/OurProducts/Products/ProductNew/ProductNew'
import style from '../../MainPage/OurProducts/Products/Products.module.css'
import { Link } from 'react-router-dom'
function ProductsShopPage({ page, products }) {
    return (<>

        <h1 className={style.textOurProducts}>Our Products</h1>
        <div className={style.containerProducts}>
            <div className={style.wrapperProducts}>
                {products
                    .slice(4 * (page - 1), 4 * page)
                    .map((item, index) => {
                        if (item.state === "discount") {
                            return (
                                <Link className={style.link} to={`/shop/product/${index}`}>
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
                                <Link className={style.link} to={`/shop/product/${index}`}>
                                    <ProductOrdinary
                                        img={item.img}
                                        title={item.title}
                                        description={item.description}
                                        price={item.price} />
                                </Link>
                            )
                        }
                        if (item.state === "discount") {
                            return (
                                <Link className={style.link} to={`/shop/product/${index}`}>
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
                        if (item.state === "new") {
                            return (
                                <Link className={style.link} to={`/shop/product/${index}`}>
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
export default ProductsShopPage;