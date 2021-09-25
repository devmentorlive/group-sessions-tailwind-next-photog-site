import SolidButton from "./solid";

export { SolidButton };

export default function Button({ children, ...rest }) {
  return (
    <button
      type="button"
      className="border border-gray-400 text-gray-900 uppercase py-3 px-8 font-serif"
      {...rest}>
      {children}
    </button>
  );
}
