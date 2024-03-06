"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { signIn } from "next-auth/react"

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await signIn('credentials', {
                email, password, redirect: false
            })

            if (res.error) {
                setError("Invalid credentials")
                return
            }

            router.push('/')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <div>
                {/* <!-- component --> */}
                <section id="contact" className="relative w-full min-h-screen  text-primary">
                    <h1 className="text-4xl p-4 font-bold tracking-wide">
                        Login
                    </h1>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-300 h-32 w-full"></div>

                    {/* <!-- wrapper --> */}
                    <div className="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center">



                        {/* <!-- Contact Me --> */}
                        <form onSubmit={handleSubmit} className="w-full md:w-1/2 border border-secondary p-6 bg-blue-900">
                            <h2 className="text-2xl pb-3 font-semibold">
                                Login
                            </h2>
                            <div>

                                <div className="flex flex-col mb-3">
                                    <label >Email</label>
                                    <input
                                        type="text"
                                        className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-secondary focus:outline-none focus:bg-gray-800 focus:text-primary"
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="flex flex-col mb-3">
                                    <label>password</label>
                                    <input
                                        type="password"
                                        className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-secondary focus:outline-none focus:bg-gray-800 focus:text-primary"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            {error && (
                                <div className="text-accent font-bold text-lg">{error}</div>
                            )}
                            <div className="w-full pt-3">
                                <button type="submit" className="w-full bg-blue-400 border border-secondary px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-secondary hover:text-black text-xl cursor-pointer">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}