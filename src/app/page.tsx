import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header / Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">모두가하우징 마켓플레이스</h1>
          <p className="mt-2 text-gray-600">
            원하는 모듈러 주택을 쇼핑하듯 쉽게 찾아보세요.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
