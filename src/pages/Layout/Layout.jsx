import { Outlet } from "react-router-dom";
import Header from "../MainPage/Header/Header";
import Footer from "../MainPage/Footer/Footer";
import ShoppingCart from "../Cart/ShoppingCart/ShoppingCart";
import { useState } from "react";

function Layout({ cart, changeCart}) {
    const [cartVisible, setCartVisible] = useState(false);

    return (<>
        <Header cartVisible={cartVisible} setCartVisible={setCartVisible} />
        <ShoppingCart cartVisible={cartVisible} cart={cart} setCartVisible={setCartVisible} changeCart={changeCart}/>
        <Outlet />
        <Footer />
    </>)
}
export default Layout;