import style from '../../MainPage/OurProducts/Products/Products.module.css'
import style2 from '../RelatedProducts/RelatedProducts.module.css'
import ProductDiscount from '../../MainPage/OurProducts/Products/ProductDiscount/ProductDiscount';
import ProductOrdinary from '../../MainPage/OurProducts/Products/ProductOrdinary/ProductOrdinary';
import ProductNew from '../../MainPage/OurProducts/Products/ProductNew/ProductNew';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function RelatedProducts({ products }) {
    const [ShowMore, setShowMore] = useState(4)
    return (<>
        <div className={style2.container}>
            <h1 className={style.textOurProducts}>Related Products</h1>
            <div className={style.wrapperProducts}>
                {products
                    .slice(0, ShowMore)
                    .map((item, index) => {
                        if (item.state === "discount") {
                            return (
                                <Link key={index} className={style.link} to={`/shop/product/${index}`}>
                                    <ProductDiscount
                                        key={`discount-${index}`}
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
                                        key={`ordinary-${index}`}
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
                                        key={`new-${index}`}
                                        img={item.img}
                                        title={item.title}
                                        description={item.description}
                                        price={item.price} />
                                </Link>
                            )
                        }
                    })}
            </div>
            <div className={style.wrapBtnProduction}>
                <button onClick={() => { setShowMore(products.length) }} className={style.btnProducts}>Show More</button>
            </div>
        </div>
    </>
    )
}
export default RelatedProducts;