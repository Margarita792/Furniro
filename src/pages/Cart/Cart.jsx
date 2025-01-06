import CartTotals from "./CartTotals/CartTotals";
import Feature from "../MainPage/Feature/Feature";
import Quality from "../ShopPage/Quality/Quality";
function Cart({cart,index,item,changeCart} ) {
    return (<>
        <Feature title="Cart" text = "Cart"/>
        <CartTotals cart={cart} key={index} item={item}
        changeCart={changeCart} 
        />
        <Quality/>
    </>)
}
export default Cart;
