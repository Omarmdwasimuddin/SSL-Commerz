import Link from "next/link";

export default function HomePage() {
  const products = [
    {
      id: 1,
      name: "Gaming Laptop",
      price: 1000,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 1000,
      image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 1000,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-400 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Dummy Product List
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-gray-600 rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-5 space-y-3">
              <h2 className="text-xl font-bold">{item.name}</h2>

              <p className="text-2xl font-semibold text-green-600">
                ৳ {item.price}
              </p>

              <Link
                href="/checkout"
                className="block bg-blue-600 text-white text-center py-3 rounded-lg"
              >
                Buy Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}