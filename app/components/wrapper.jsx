export default function WRAPPER({ isTopPage, img, title, children }) {
  const paddingClasses = isTopPage ? 'pt-20 pb-0' : 'pt-64 pb-32';

  return (
    <div className={`relative flex flex-col justify-center items-center min-h-screen px-5`}>
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed z-[-1]"
        style={{
          backgroundImage: `url('/img/${img}')`,
        }}
      ></div>
      <div className="text-center leading-none text-azure w-full">
        <h1
          className={`text-[16vw] md:text-[16vw] lg:text-[16vw] xl:text-[16vw] max-w-[calc(100vw-10px)] font-normal text-shadow-custom tracking-wide ${paddingClasses}`}
        >
          {title}
        </h1>
        {children && <div>{children}</div>}
      </div>
    </div>
  );
}
