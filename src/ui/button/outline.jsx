import Button from "./";

export default function OutlineButton({ children, ...rest }) {
  return (
    <Button
      className="border border-brown-600 bg-white text-brown-600 uppercase py-3 px-8 font-serif"
      {...rest}>
      {children}
    </Button>
  );
}
