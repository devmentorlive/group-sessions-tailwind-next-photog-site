import NextLink from "next/link";

export default function Link({
  children,
  href,
  color = "text-brown-800",
  className = "",
}) {
  return (
    <NextLink href={href}>
      <a className={`${color} ${className} cursor-pointer hover:text-red-400`}>
        {children}
      </a>
    </NextLink>
  );
}
