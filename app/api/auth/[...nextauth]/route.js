
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt'
import User from '@/model/userModel';
import { connectDB } from '@/lib/mongodb';

const authOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: "Credentials",
            credentials: {},

            async authorize(credentials) {
                const { email, password } = credentials

                try {
                    await connectDB()
                    const user = await User.findOne({ email })

                    if (!user) {
                        return null
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.password)

                    if (!passwordsMatch) {
                        return null
                    }

                    return user
                } catch (error) {
                    console.log(error);
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        login: '/login',
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }