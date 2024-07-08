export default function WRAPPER(props) {
  const paddingTOP = props.isTopPage ? 'pt-20' : 'pt-72';
  const paddingBottom = props.isTopPage ? 'pb-0' : 'pb-64';

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen px-5 bg-cover bg-center"
      style={{ backgroundImage: `url('/img/${props.img}')` }}
    >
      <div className="text-center leading-none text-azure w-full">
        <h1
          className={`${paddingTOP} ${paddingBottom} pt- text-[16vw] md:text-[16vw] lg:text-[16vw] xl:text-[16vw] max-w-[calc(100vw-10px)] font-normal text-shadow-custom tracking-wide`}
        >
          {props.title}
        </h1>
        {props.children && <div>{props.children}</div>}
      </div>
    </div>
  );
}
