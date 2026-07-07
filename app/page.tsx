import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <main className="container mx-auto flex min-h-screen items-center justify-center px-6">
        <div className="flex flex-col items-center text-center space-y-8">

          {/* Logo */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl">
            <Image
              src="/sslcommerz-logo/sslcommerz-logo.png"
              alt="SSLCommerz Logo"
              width={220}
              height={70}
              priority
            />
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            SSLCommerz Payment Gateway Integration
          </h1>

          {/* Subtitle */}
          <p className="max-w-xl text-zinc-400 text-base md:text-lg">
            A secure and seamless payment gateway integration built with
            Next.js and SSLCommerz Sandbox.
          </p>

        </div>
      </main>
    </div>
  );
}
