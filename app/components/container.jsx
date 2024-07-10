export default function CONTAINER(props) {
  return (
    <div className="content bg-azure bg-opacity-80 text-black rounded-lg mx-auto p-6 max-w-screen-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {props.children && <div>{props.children}</div>}
      </div>
    </div>
  );
}
