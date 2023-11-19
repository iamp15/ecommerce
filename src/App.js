import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import kids_banner from "./components/assets/banner_kids.png";
import mens_banner from "./components/assets/banner_mens.png";
import womens_banner from "./components/assets/banner_women.png";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={mens_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={womens_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
