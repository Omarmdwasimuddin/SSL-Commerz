import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-yellow-50">

      <div className="bg-gray-600 shadow-xl rounded-xl p-10 text-center">

        <h1 className="text-5xl mb-5">
          ⚠️
        </h1>

        <h2 className="text-3xl font-bold text-yellow-600">
          Payment Cancelled
        </h2>

        <p className="mt-4">
          You cancelled the payment.
        </p>

        <Link
          href="/productList"
          className="inline-block mt-8 bg-yellow-600 text-white px-6 py-3 rounded-lg"
        >
          Back Home
        </Link>

      </div>

    </div>
  );
}