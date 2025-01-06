import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ShopPage from './pages/ShopPage/ShopPage';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import ProductComparison from './pages/ProductComparison/ProductComparison';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import { useState } from 'react';

import Layout from './pages/Layout/Layout';


function App() {
  const [products, setProducts] = useState([
    {
      img: "https://i.imgur.com/L4WgBdL.png",
      title: "Syltherine",
      description: "Stylish cafe chair",
      price: 2500000,
      sale: "Rp 3.500.000",
      state: "discount",
      discount: -30,
      size: ["L", "XXL", "M"],
      currentSize: "M",

    },
    {
      img: "https://i.imgur.com/ME2vrj3.png",
      title: "Leviosa",
      description: "Stylish cafe chair",
      price: 2500000,
      state: "default",
      size: ["S", "XL", "XS"],
      currentSize: "XS",

    },
    {
      img: "https://i.imgur.com/ekgrd1K.png",
      title: "Lolito",
      description: "Luxury big sofa",
      price: 1500000,
      state: "discount",
      discount: -50,
      size: ["L", "XL", "XS"],
      currentSize: "L",

    },
    {
      img: "https://i.imgur.com/JEGB2Ue.png",
      title: "Respira",
      description: "Outdoor bar table and stool",
      price: 500000,
      state: "new",
      size: ["L", "M", "S"],
      currentSize: "S",

    },
    {
      img: "https://i.imgur.com/o7yJXUI.png",
      title: "Grifo",
      description: "Night lamp",
      price: 1500000,
      state: "default",
      size: ["L", "XL", "XS"],
      currentSize: "L",

    },
    {
      img: "https://i.imgur.com/wCBC9UT.png",
      title: "Muggo",
      description: "Small mug",
      price: 150000,
      state: "new",
      size: ["XXL", "L", "M"],
      currentSize: "XXL",
    },
    {
      img: "https://i.imgur.com/0albeDM.png",
      title: "Pingky",
      description: "Cute bed set",
      price: 7000000,
      state: "discount",
      discount: -50,
      size: ["L", "M", "XS"],
      currentSize: "L",
    },
    {
      img: "https://i.imgur.com/jkGT8VI.png",
      title: "Potty",
      description: "Minimalist flower pot",
      price: 500000,
      state: "new",
      size: ["M", "XL", "S"],
      currentSize: "M",
    },
    {
      img: "https://i.imgur.com/o7yJXUI.png",
      title: "Grifo",
      description: "Night lamp",
      price: 1500000,
      state: "default",
      size: ["L", "S", "M"],
      currentSize: "S",
    },
    {
      img: "https://i.imgur.com/0albeDM.png",
      title: "Pingky",
      description: "Cute bed set",
      price: 7000000,
      state: "discount",
      discount: -50,
      size: ["L", "XL", "XS"],
      currentSize: "XS",
    },
    {
      img: "https://i.imgur.com/jkGT8VI.png",
      title: "Potty",
      description: "Minimalist flower pot",
      price: 500000,
      state: "new",
      size: ["L", "XL", "XXL"],
      currentSize: "XL",
    },
    {
      img: "https://i.imgur.com/JEGB2Ue.png",
      title: "Respira",
      description: "Outdoor bar table and stool",
      price:500000,
      state: "new",
      size: ["M", "S", "XS"],
      currentSize: "M",
    },
    {
      img: "https://i.imgur.com/JEGB2Ue.png",
      title: "Asgaard sofa",
      description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound",
      price: 250000,
      state: "default",
      size: ["L", "XL", "S"],
      currentSize: "S",
    }

  ]);

  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    setCart((currentCart) => [...currentCart, product])
  }
  const changeCart = (index, quantity) => {
    let copyCart = cart.slice();
    copyCart[index].quantity = quantity;
    setCart(copyCart);
  }

  return (<>

    <BrowserRouter>
      <Routes>
        <Route element={<Layout cart={cart} changeCart={changeCart} />}>
          <Route path="/" element={<MainPage products={products} />} />
          <Route path="/shop" element={<ShopPage products={products} cart={cart} addCart={addCart} />} />
          <Route path="/shop/product/:id" element={<SingleProduct products={products} cart={cart} addCart={addCart} />} />
          <Route path="/shop/comparison" element={<ProductComparison />} />
          <Route path="/cart" element={<Cart cart={cart} addCart={addCart} changeCart={changeCart} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />

        </Route>
      </Routes>
    </BrowserRouter>

  </>
  );
}
export default App;
