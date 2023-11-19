import bcrypt from 'bcrypt';
import { User } from "@/models/User";
import mongoose from "mongoose";

export async function POST(req){
    const body = await req.json();
    mongoose.connect(process.env.MONGO_URL);

    try {
        // Hash the password before creating the user
        const hashedPassword = await bcrypt.hash(body.password, 10);
        const userWithHashedPassword = { ...body, password: hashedPassword };

        const createdUser = await User.create(userWithHashedPassword);
        console.log(createdUser);
        return Response.json(createdUser);
    } catch (error) {
        console.error(error);
        return Response.json({ error: 'Failed to create user' }, { status: 500 });
    }
}
