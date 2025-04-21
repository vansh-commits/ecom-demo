import { useEffect } from "react"
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import HomePage from "./pages/HomePage.jsx"
import ProductDetailPage from "./pages/ProductDetailPage.jsx"
import CartPage from "./pages/CartPage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import SignInPage from "./pages/SignInPage.jsx"
import { useAuth } from "./contexts/AuthContext.jsx"

function App() {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()


  useEffect(() => {
    if (!isAuthenticated && window.location.pathname !== "/signin" && window.location.pathname !== "/signup") {
      navigate("/signup")
    }
  }, [isAuthenticated, navigate])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/signup" />} />
          <Route path="/product/:id" element={isAuthenticated ? <ProductDetailPage /> : <Navigate to="/signup" />} />
          <Route path="/cart" element={isAuthenticated ? <CartPage /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
