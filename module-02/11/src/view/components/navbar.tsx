import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/about-us">About-Us</Link>
      </div>
    </div>
  );
}
