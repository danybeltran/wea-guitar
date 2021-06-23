import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-10">
      <h2 className="text-5xl font-bold">Oops! You're lost</h2>
      <p>This page doesn't exist (yet)</p>
      <Link href="/">
        <a className="px-4 border py-2 rounded bg-blue-500 text-white font-bold">
          Go home
        </a>
      </Link>
    </div>
  );
}
