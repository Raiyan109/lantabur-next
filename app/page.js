import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>

      <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
            Lantabur-Raiyan
          </a>
          <ul className="items-stretch  space-x-3 flex">
            <li className="flex">
              <Link href='/home' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">HomePage</Link>
            </li>
            <li className="flex">
              <Link href='/private' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Private</Link>
            </li>
            <li className="flex">
              <Link href='/login' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Login</Link>
            </li>
            <li className="flex">
              <Link href='/signup' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Sign up</Link>
            </li>
          </ul>

        </div>
      </header>
    </main>
  );
}
