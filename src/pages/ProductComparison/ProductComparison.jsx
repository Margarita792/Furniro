import GoToProduct from "../ProductComparison/GoToProduct/GoToProduct";
import General from "../ProductComparison/General/General";
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