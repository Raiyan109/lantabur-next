import { connectDB } from '@/lib/mongodb'
import User from '@/model/userModel'
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(req) {
    try {
        const { name, email, password } = await req.json()
        const hashedPassword = await bcrypt.hash(password, 10)
        await connectDB()
        await User.create({ name, email, password: hashedPassword })
        return NextResponse.json({ message: 'User signed up successfully' })
    } catch (error) {
        return NextResponse.json({
            message: 'An error occured while registering the user.'
        }, {
            status: 500
        })
    }
}