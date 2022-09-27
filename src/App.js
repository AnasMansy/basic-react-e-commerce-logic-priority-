import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ProductList from "./components/ProductList";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <div className="App">
      <div className='container'>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <ProductList />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <About />
            }

          />
          <Route
            path="product/:productId"
            element={
              <ProductDetails />
            }

          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
