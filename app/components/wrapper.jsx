export default function WRAPPER({ isTopPage, img, title, children }) {
  const paddingClasses = isTopPage ? 'pt-20 pb-0' : 'pt-72 pb-64';

  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen px-5 bg-cover bg-center bg-fixed ${paddingClasses}`}
      style={{
        backgroundImage: `url('/img/${img}')`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="text-center leading-none text-azure w-full">
        <h1
          className={`text-[16vw] md:text-[16vw] lg:text-[16vw] xl:text-[16vw] max-w-[calc(100vw-10px)] font-normal text-shadow-custom tracking-wide`}
        >
          {title}
        </h1>
        {children && <div>{children}</div>}
      </div>
    </div>
  );
}
