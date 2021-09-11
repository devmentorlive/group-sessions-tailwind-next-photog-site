import Link from "@/ui/link";

export default function MainMenu({}) {
  return (
    <>
      <ul className="md:flex md:space-x-3">
        <li>
          <Link href="/" color="text-black">
            Home
          </Link>
        </li>
        <li>
          <Link href="/portfolio" color="text-black">
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="/offering" color="text-black">
            Offering
          </Link>
        </li>
        <li>
          <Link href="/how-it-works" color="text-black">
            How It Works
          </Link>
        </li>
        <li>
          <Link href="/how-it-works" color="text-black">
            About Tati Frank
          </Link>
        </li>
        <li>
          <Link href="/how-it-works" color="text-black">
            Testimonials
          </Link>
        </li>
        <li>
          <Link href="/how-it-works" color="text-black">
            Book Your Session
          </Link>
        </li>
      </ul>
    </>
  );
}
