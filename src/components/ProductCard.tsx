import Link from 'next/link';

interface ProductCardProps {
    id: string;
    name: string;
    price: string;
    description: string;
}

export default function ProductCard({ id, name, price, description }: ProductCardProps) {
    return (
        <Link href={`/product/${id}`} className="block group">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
                {/* Placeholder Image Area */}
                <div className="h-64 bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                    <span className="text-gray-500 text-lg font-medium">Photo {id}</span>
                </div>

                {/* Content Area */}
                <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {description}
                    </p>
                    <div className="font-bold text-xl text-gray-900">
                        {price}
                    </div>
                </div>
            </div>
        </Link>
    );
}
