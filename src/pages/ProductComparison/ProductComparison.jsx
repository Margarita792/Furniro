import Header from "../MainPage/Header/Header";
import style from './ProductComparison.module.css'
import logo from '..//../img/ProductComparison/Meubel House_Logos-05.svg'
import img1 from '..//../img/Shop/Rectangle 1.svg'
import img2 from '..//../img/ProductComparison/Frame 161.svg'
import GoToProduct from "../ProductComparison/GoToProduct/GoToProduct";
import General from "../ProductComparison/General/General";
import Footer from "../MainPage/Footer/Footer";
import Feature from "../MainPage/Feature/Feature";
import Quality from "../ShopPage/Quality/Quality";
function ProductComparison () {
    return (<>
    
    <Feature title="Product Comparison" text="Product Comparison"/>
            <GoToProduct/>
            <General/>
            <Quality/>
           
    </>
    )
}
export default ProductComparison;