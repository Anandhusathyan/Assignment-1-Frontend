import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Cart from "./components/Cart";
import { CartProvider, useCart } from "react-use-cart";
import Buy from "./components/Paybutton";







function App() {

    
    return <CartProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                   <Route path="/cart" element={<Cart />} />
                   <Route path="/buy"  element={<Buy/>}/>
            </Routes>
        </BrowserRouter>
    </CartProvider>

}

export {
    App
}
