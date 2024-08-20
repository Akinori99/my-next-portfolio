export default function CONTAINER({ children }) {
  return (
    <div className="content bg-azure bg-opacity-80 text-black rounded-lg mx-auto p-4 max-w-screen-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {children}
      </div>
    </div>
  );
}
