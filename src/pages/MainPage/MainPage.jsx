import Header from '../MainPage/Header/Header';
import Sidebar from '../MainPage/Sidebar/Sidebar';
import Rooms from '../MainPage/Rooms/Img-Rooms';
import Products from '../MainPage/OurProducts/Products/Products';
import InspirationRooms from '../MainPage/InspirationRooms/InspirationRooms';
import Footer from '../MainPage/Footer/Footer';
function MainPage({products}) {
    return (
        <>
            <Sidebar />
            <Rooms />
            <Products products={products}/>
            <InspirationRooms />
        </>
    );
}
export default MainPage;