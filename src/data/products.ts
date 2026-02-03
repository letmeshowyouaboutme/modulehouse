export interface Product {
    id: string;
    name: string;
    price: string;
    description: string;
    thumbnail: string;
    images: string[];
}

export const products: Product[] = [
    {
        id: '1', name: 'Deluxe Module House A', price: '120,000,000 KRW',
        description: 'Modern design with premium wooden finish. Includes full kitchen and bath.',
        thumbnail: '/products/1/thumb.png',
        images: ['/products/1/detail-1.png', '/products/1/detail-2.png', '/products/1/detail-3.png'],
    },
    {
        id: '2', name: 'Cozy Tiny Home B', price: '85,000,000 KRW',
        description: 'Compact living space, perfect for singles. Efficient layout with smart storage.',
        thumbnail: '/products/2/thumb.png',
        images: ['/products/2/detail-1.png', '/products/2/detail-2.png', '/products/2/detail-3.png'],
    },
    {
        id: '3', name: 'Family Module Villa C', price: '150,000,000 KRW',
        description: 'Spacious 3-bedroom unit for families. Large living area and deck.',
        thumbnail: '/products/3/thumb.png',
        images: ['/products/3/detail-1.png', '/products/3/detail-2.png', '/products/3/detail-3.png'],
    },
    {
        id: '4', name: 'Office Pod D', price: '45,000,000 KRW',
        description: 'Optimized workspace for remote workers. Soundproof and pre-wired for high-speed internet.',
        thumbnail: '/products/4/thumb.png',
        images: ['/products/4/detail-1.png', '/products/4/detail-2.png', '/products/4/detail-3.png'],
    },
    {
        id: '5', name: 'Luxury Glamping Unit E', price: '95,000,000 KRW',
        description: 'High-end camping experience module. Panoramic windows and skylight.',
        thumbnail: '/products/5/thumb.png',
        images: ['/products/5/detail-1.png', '/products/5/detail-2.png', '/products/5/detail-3.png'],
    },
    {
        id: '6', name: 'Smart Home Module F', price: '135,000,000 KRW',
        description: 'Fully integrated IoT smart home system. Voice control lighting and temperature.',
        thumbnail: '/products/6/thumb.png',
        images: ['/products/6/detail-1.png', '/products/6/detail-2.png', '/products/6/detail-3.png'],
    },
    {
        id: '7', name: '연습용집', price: '135,000 원',
        description: '업데이트 연습을 위한 집임.',
        thumbnail: '/products/7/thumb.png',
        images: ['/products/7/detail-1.png', '/products/7/detail-2.png', '/products/7/detail-3.png'],
    },
];

export const getProduct = (id: string): Product | undefined => {
    return products.find(p => p.id === id);
};
