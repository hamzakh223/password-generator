import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate
} from "react-router-dom";

/* =====================
   Home Component
===================== */
function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={() => navigate("/shop/products")}>
        Go to Products
      </button>

      <button onClick={() => navigate("/shop/cart")}>
        Go to Cart
      </button>
    </div>
  );
}

/* =====================
   Parent (Shop)
===================== */
function Shop() {
  return (
    <div>
      <h1>Shop Page</h1>

      <nav>
        <Link to="products">Products</Link> |{" "}
        <Link to="cart">Cart</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

/* =====================
   Child Components
===================== */
function Products() {
  return <h2>All Products</h2>;
}

function Cart() {
  return <h2>Your Cart</h2>;
}

/* =====================
   Main App
===================== */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Nested Routes */}
        <Route path="/shop" element={<Home />}>
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;