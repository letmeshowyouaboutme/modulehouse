import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
    id: string;
    name: string;
    price: string;
    description: string;
    thumbnail: string;
}

export default function ProductCard({ id, name, price, description, thumbnail }: ProductCardProps) {
    return (
        <Link href={`/product/${id}`} className="block group">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
                {/* Thumbnail Image */}
                <div className="relative h-64 bg-gray-200 group-hover:bg-gray-300 transition-colors">
                    <Image
                        src={thumbnail}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                    />
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
