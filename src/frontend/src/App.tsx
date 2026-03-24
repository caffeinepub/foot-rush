import CartDrawer from "./components/CartDrawer";
import CategoryTiles from "./components/CategoryTiles";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PromoSection from "./components/PromoSection";
import ValueProps from "./components/ValueProps";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <FeaturedProducts />
          <CategoryTiles />
          <ValueProps />
          <PromoSection />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
