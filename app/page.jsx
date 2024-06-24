import Link from 'next/link';

export default function TOP() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-5">
      <div className="text-center leading-none text-azure w-full">
        <h1 className="text-[16vw] md:text-[16vw] lg:text-[16vw] xl:text-[16vw] max-w-[calc(100vw-10px)] font-normal text-shadow-custom tracking-wide">
          Akinori&apos;s
          <br />
          Portfolio
        </h1>
      </div>
      <div className="mt-20">
        <Link href="/works">
          <button className="inline-flex items-center justify-center text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl rounded-lg px-8 py-4 sm:px-10 sm:py-5 transition-transform duration-300 transform-gpu hover:translate-y-[-2px] bg-gradient-to-r from-[#003b6f] to-[#0076b3] shadow-custom focus:outline-none focus:shadow-focus">
            作品を見る
          </button>
        </Link>
      </div>
    </div>
  );
}
