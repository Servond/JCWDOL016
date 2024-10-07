"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Title from "./components/title";

export default function LoginView() {
  const router = useRouter();
  return (
    <div>
      <Link href="/">
        <button
          className="border-2 border-black"
          // onClick={() => router.push("/")}
        >
          Home
        </button>
      </Link>
      <Title />
    </div>
  );
}
