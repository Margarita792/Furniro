import AsgaardSofa from '../SingleProduct/AsgaardSofa/AsgaardSofa';
import DescriptionSingleProduct from '../SingleProduct/DescriptionSingleProduct/DescriptionSingleProduct';
import style from '../SingleProduct/SingleProduct.module.css'
import RelatedProducts from '../SingleProduct/RelatedProducts/RelatedProducts';
import { useParams } from 'react-router-dom';
function SingleProduct({ products,cart, addCart}) {
    const {id} = useParams();
    return (<>
        
        <div className={style.wrapText}>
            <div className={style.innerText}>
                <p className={style.textHome}>Home</p>
                <p className={style.textSign}>&gt;</p>
                <p className={style.textHome}>Shop</p>
                <p className={style.textSign}>&gt;</p>
            </div>
            <div className={style.wrapAsgaardSofa}>
                <p className={style.textAsgaardSofa}> { products[id].title}</p>
            </div>
        </div>
        <AsgaardSofa product={products[id]}  cart ={cart} addCart = {addCart}/>
        <DescriptionSingleProduct />
        <RelatedProducts products={products}  />
    </>
    )
}
export default SingleProduct;