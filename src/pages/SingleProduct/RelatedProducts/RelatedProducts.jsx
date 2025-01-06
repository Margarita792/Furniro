import style from '../../MainPage/OurProducts/Products/Products.module.css'
import style2 from '../RelatedProducts/RelatedProducts.module.css'
import ProductDiscount from '../../MainPage/OurProducts/Products/ProductDiscount/ProductDiscount';
import ProductOrdinary from '../../MainPage/OurProducts/Products/ProductOrdinary/ProductOrdinary';
import ProductNew from '../../MainPage/OurProducts/Products/ProductNew/ProductNew';

import { useState } from 'react';
function RelatedProducts({ products }) {
    const [ShowMore, setShowMore] = useState(4)
    return (<>
        <div className={style2.container}>
            <h1 className={style.textOurProducts}>Related Products</h1>
            <div className={style.wrapperProducts}>
                {products
                    .slice(0, ShowMore)
                    .map((item,index) => {
                        if (item.state === "discount") {
                            return (
                                <ProductDiscount
                                key={`discount-${index}`}
                                    discount={item.discount}
                                    img={item.img}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                    sale={item.sale} />
                            )
                        }
                        if (item.state === "default") {
                            return (
                                <ProductOrdinary
                                key={`ordinary-${index}`}
                                    img={item.img}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price} />
                            )
                        }
                        if (item.state === "new") {
                            return (
                                <ProductNew
                                key={`new-${index}`}
                                    img={item.img}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price} />
                            )
                        }
                    })}

                {/* <ProductDiscount discount="-30%" img={img1} title="Syltherine" description="Stylish cafe chair" price="Rp 2.500.000" sale="Rp 3.500.000" />

                
                <ProductOrdinary img={img2} title="Leviosa" description="Stylish cafe chair" price="Rp 2.500.000" />

              
                <ProductDiscount discount="-50%" img={img3} title="Lolito" description="Luxury big sofa" price="Rp 7.000.000" sale="Rp 14.000.000" />

                
                <ProductNew New="New" img={img4} title="Respira" description="Outdoor bar table and stool" price="Rp 500.000" /> */}

            </div>
            <div className={style.wrapBtnProduction}>
                <button onClick={() => { setShowMore(products.length) }} className={style.btnProducts}>Show More</button>
            </div>
        </div>
    </>
    )
}
export default RelatedProducts;