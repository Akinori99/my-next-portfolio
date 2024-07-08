export default function WRAPPER(props) {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen px-5 bg-cover bg-center"
      style={{ backgroundImage: `url('/img/${props.img}')` }}
    >
      <div className="text-center leading-none text-azure w-full">
        <h1 className="text-[16vw] md:text-[16vw] lg:text-[16vw] xl:text-[16vw] max-w-[calc(100vw-10px)] font-normal text-shadow-custom tracking-wide">
          {props.title}
        </h1>
        {props.children && <div>{props.children}</div>}
      </div>
    </div>
  );
}
