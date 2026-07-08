import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50">

      <div className="bg-white shadow-xl rounded-xl p-10 text-center">

        <h1 className="text-5xl mb-5">
            ✅
        </h1>

        <h2 className="text-3xl font-bold text-green-700">
          Payment Successful
        </h2>

        <p className="mt-4">
          Thank you for your payment.
        </p>

        <Link
          href="/productList"
          className="inline-block mt-8 bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Back Home
        </Link>

      </div>

    </div>
  );
}