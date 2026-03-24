import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const featured = products.slice(0, 4);

  return (
    <section id="featured" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-[0.3em] mb-2"
            style={{ color: "var(--fr-orange)" }}
          >
            Featured Collection
          </p>
          <h2 className="text-4xl font-black uppercase text-[oklch(0.145_0_0)] tracking-tight">
            New Releases
          </h2>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-ocid="product.list"
        >
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* All products */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em] mb-2"
              style={{ color: "var(--fr-orange)" }}
            >
              Full Catalogue
            </p>
            <h2 className="text-4xl font-black uppercase text-[oklch(0.145_0_0)] tracking-tight">
              All Sneakers
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(4).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i + 4} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
