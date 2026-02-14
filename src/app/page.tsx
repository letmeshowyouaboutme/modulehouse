import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header / Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">모듈하우스 몰</h1>
          <p className="mt-2 text-gray-600">
            썸네일을 클릭하면 상세정보를 보실 수 있습니다.
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
              thumbnail={product.thumbnail}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
