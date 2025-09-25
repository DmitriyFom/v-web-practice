import { ProductCard } from '../widgets/ProductCard/ProductCard';
import { products } from '../entities/product/model';

export const HomePage = () => {
  const hoodies = products.filter(p => p.category === 'hoodie');
  const shorts = products.filter(p => p.category === 'shorts');

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Худи */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Худи</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {hoodies.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Шорты */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Шорты</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {shorts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};