import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="w-full flex justify-center">
          <Image src="/cursor-ai.png" alt="Cursor AI Logo" width={80} height={80} className="mb-2" />
        </div>
        <h1 className="text-3xl font-bold">Demo Cursor AI</h1>
        <p className="text-lg text-center max-w-xl">Applying Cursor AI at Work</p>
         
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/about"
        >
          About
        </a>
      </footer>
    </div>
  );
}
