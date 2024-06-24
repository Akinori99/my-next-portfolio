import Link from 'next/link';

export default function TOP() {
  return (
    <div className="mx-auto relative overflow-hidden min-h-screen px-[0.5vw]">
      <div className="relative mt-[21vh] mb-0 leading-none text-azure">
        <h1 className="text-[10rem] font-normal mb-0 text-shadow-custom md:text-[9rem] sm:text-[6rem] sm:tracking-[-3px]">
          Akinori&apos;s
          <br />
          Portfolio
        </h1>
      </div>
      <Link href="/works">
        <button className="inline-flex items-center justify-center text-white text-[1.5rem] rounded-[10px] px-[55px] py-[15px] mt-[50px] transition-transform duration-300 transform-gpu hover:translate-y-[-2px] bg-gradient-to-r from-[#003b6f] to-[#0076b3] shadow-custom focus:outline-none focus:shadow-focus">
          作品を見る
        </button>
      </Link>
    </div>
  );
}
