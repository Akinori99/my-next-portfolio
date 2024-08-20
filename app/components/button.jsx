import Link from 'next/link';

export default function BUTTON(props) {
  return (
    <Link href={props.href}>
      <button className="my-14 inline-flex items-center justify-center text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl rounded-lg px-8 py-4 sm:px-10 sm:py-5 transition-transform duration-300 transform-gpu hover:translate-y-[-2px] bg-gradient-to-r from-[#003b6f] to-[#0076b3] shadow-custom focus:outline-none focus:shadow-focus">
        {props.txt}
      </button>
    </Link>
  );
}
