export default function WRAPPER({ isTopPage, img, title, children }) {
  const paddingClasses = isTopPage ? 'pt-20 pb-0' : 'pt-64 pb-32';

  return (
    <div className={`relative flex flex-col justify-center items-center min-h-screen px-5 overflow-hidden`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/img/${img}')`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="relative z-10 text-center leading-none text-azure w-full">
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
