'use client'
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

const Nav = () => {
    const { data: session } = useSession()
    return (
        <div>
            <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
                <div className=" flex justify-between h-16 ">
                    <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                        {session?.user?.name ? session?.user?.name : 'Lantabur-Raiyan'}
                    </a>
                    <ul className="items-stretch  space-x-1 flex">
                        <li className="flex">
                            <Link href='/home' className="flex items-center px-2 text-sm -mb-1 border-b-2 dark:border-transparent">HomePage</Link>
                        </li>
                        <li className="flex">
                            <Link href='/private' className="flex items-center px-2 text-sm -mb-1 border-b-2 dark:border-transparent">Private</Link>
                        </li>
                        <li className="flex">
                            <Link href='/login' className="flex items-center px-2 text-sm -mb-1 border-b-2 dark:border-transparent">Login</Link>
                        </li>
                        <li className="flex">
                            <Link href='/signup' className="flex items-center px-2 text-sm -mb-1 border-b-2 dark:border-transparent">Sign up</Link>
                        </li>
                        {session && <li className="flex items-center px-2 text-sm -mb-1 border-b-2 dark:border-transparent cursor-pointer" onClick={() => signOut()}>
                            Sign out
                        </li>}
                    </ul>

                </div>
            </header>
        </div>
    )
}

export default Nav