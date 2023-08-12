import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          {/* client-side navigation */}
          <Link href="/" className="text-orange-800 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/reviews" className="text-orange-800  hover:underline">
            Reviews
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            prefetch={false}
            className="text-orange-800  hover:underline"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
