import Button from "./";

export default function SolidButton({ children, ...rest }) {
  return (
    <Button
      className="border border-brown-600 bg-brown-500 text-white uppercase py-3 px-8 font-serif"
      {...rest}>
      {children}
    </Button>
  );
}
