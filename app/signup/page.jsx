"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"


export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!name || !email || !password) {
            setError('All fields are necessary')
            return
        }

        try {

            const resUserExists = await fetch('api/userExists', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email })
            })

            const { user } = await resUserExists.json()

            if (user) {
                setError('User already exists')
                return
            }
            const res = await fetch('api/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password
                })
            })

            if (res.ok) {
                const form = e.target
                form.reset()
                router.push('/login')
            }
            else {
                console.log('User Signing up failed');
            }
        } catch (error) {
            console.log('Error during signing up', error);
        }
    }
    return (
        <div>
            {/* <!-- component --> */}
            <section id="contact" className="relative w-full min-h-screen  text-primary">
                <h1 className="text-4xl p-4 font-bold tracking-wide">
                    Sign up
                </h1>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-400 h-32 w-full"></div>

                {/* <!-- wrapper --> */}
                <div className="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center">



                    {/* <!-- Contact Me --> */}
                    <form onSubmit={handleSubmit} className="w-full md:w-1/2 border border-secondary p-6 bg-blue-900">
                        <h2 className="text-2xl pb-3 font-semibold">
                            Sign up
                        </h2>
                        <div>
                            <div className="flex flex-col mb-3">
                                <label>Name</label>
                                <input
                                    type="text"
                                    className="px-3 py-2 bg-blue-800 border border-blue-900 focus:border-secondary focus:outline-none focus:bg-blue-800 focus:text-primary"
                                    autoComplete="off"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col mb-3">
                                <label >Email</label>
                                <input
                                    type="text"
                                    className="px-3 py-2 bg-blue-800 border border-blue-900 focus:border-secondary focus:outline-none focus:bg-blue-800 focus:text-primary"
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete="off"
                                />
                            </div>
                            <div className="flex flex-col mb-3">
                                <label>password</label>
                                <input
                                    type="password"
                                    className="px-3 py-2 bg-blue-800 border border-blue-900 focus:border-secondary focus:outline-none focus:bg-blue-800 focus:text-primary"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        {error && (
                            <div className="text-accent font-bold text-lg">{error}</div>
                        )}
                        <div className="w-full pt-3">
                            <button type="submit" className="w-full bg-blue-400 border border-secondary px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-secondary hover:text-black text-xl cursor-pointer">
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}