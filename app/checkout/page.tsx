"use client";

export default function CheckoutPage() {
  const payment = async () => {
    const res = await fetch("/api/payment", {
      method: "POST",
    });

    const data = await res.json();

    if (data?.data?.GatewayPageURL) {
      window.location.href = data.data.GatewayPageURL;
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-500">
      <div className="bg-gray-600 shadow-xl rounded-xl p-10 w-[500px]">

        <h1 className="text-3xl font-bold mb-6">
          Checkout
        </h1>

        <div className="space-y-3 mb-8">

          <div className="flex justify-between">
            <span>Product</span>
            <span>Gaming Laptop</span>
          </div>

          <div className="flex justify-between">
            <span>Quantity</span>
            <span>1</span>
          </div>

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>৳1000</span>
          </div>

        </div>

        <button
          onClick={payment}
          className="w-full py-4 rounded-lg bg-green-600 text-white font-bold text-lg"
        >
          Pay with SSLCommerz
        </button>

      </div>
    </div>
  );
}