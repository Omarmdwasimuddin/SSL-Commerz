import Link from "next/link";

export default function FailPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-red-50">

      <div className="bg-white shadow-xl rounded-xl p-10 text-center">

        <h1 className="text-5xl mb-5">
          ❌
        </h1>

        <h2 className="text-3xl font-bold text-red-600">
          Payment Failed
        </h2>

        <p className="mt-4">
          Something went wrong.
        </p>

        <Link
          href="/productList"
          className="inline-block mt-8 bg-red-600 text-white px-6 py-3 rounded-lg"
        >
          Try Again
        </Link>

      </div>

    </div>
  );
}