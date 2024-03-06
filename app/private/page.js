'use client'
import { useSession, getSession } from "next-auth/react"
import NotFound from "../components/NotFound"
import Link from "next/link"


export default function Private() {
    const { data: session, status } = useSession()

    if (status === "loading") {
        return <p>Loading...</p>
    }

    if (status === "unauthenticated") {
        return <NotFound />
    }
    return (
        <>
            <Link href='/' className="flex items-center px-2 text-xl font-medium -mb-1 border-b-2 dark:border-transparent">Go To HomePage</Link>
            <div className="flex flex-col justify-center items-center py-20">
                <h1 className="text-2xl font-medium">Protected Page</h1>
                <p>Dear <span className="text-xl font-semibold">{session?.user?.name}</span>! You can view this page because you are signed in.</p>
            </div>
        </>
    )
}
