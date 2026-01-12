import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link
        href="/"
        className="flex items-center gap-2.5 cursor-pointer"
      >
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={46}
          height={44}
          priority
        />
      </Link>

      <div className="flex items-center gap-8">
        <Link href="/">Home</Link>
        <Link href="/companions">Companions</Link>
        <Link href="/journey">My Journey</Link>
        <Link href="/sign-in">Sign In</Link>
        <button className="btn-primary">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
