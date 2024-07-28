import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Product from "./features/product";
import ProductDetail from "./features/product-detail";
import "./App.css";
import LayoutContextProvider from "./contexts/LayoutContextProvider";
import { ToastProvider } from "./contexts/ToastContextProvider";
import ToastContainer from "./components/toast-container/ToastContainer";

function App() {
  return (
    <LayoutContextProvider>
      <ToastProvider>
        <ToastContainer />
        <Router>
          <div className="grid grid-rows-[50px_1fr_70px] min-h-screen bg-custom-white w-full">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Navigate to="/product" replace />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/:id" element={<ProductDetail />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ToastProvider>
    </LayoutContextProvider>
  );
}

export default App;
