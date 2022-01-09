import Cart from "./pages/Cart";
import Home from "./pages/Home";
import List from "./pages/List"
import ProductPage from "./pages/ProductPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Success from "./pages/Success";
import ScrollToTop from "./ScrollToTop";
import Favs from "./pages/Favs";


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>

        <Route key={0} path="/" element={<Home />} />
        <Route key={1} path="/products/:category" element={<List />} />

        <Route key={2} path="/product/:id" element={<ProductPage />} />
        <Route key={3} path="/favs" element={<Favs />} />

        <Route key={4} path="/cart" element={<Cart />} />
        <Route key={5} path="/success" element={<Success />} />
      </Routes>
    </Router>);
};

export default App;