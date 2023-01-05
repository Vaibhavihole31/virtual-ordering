import {Schema, model} from "mongoose";

const userSchema = new Schema({
    name: { type: String, require: [true, 'name cannot be empty'] },
    email: { type: String, require: [true, 'email cannot be empty'] },
    phone: { type: String, require: [true, 'phone cannot be empty'] },
    password: { type: String, require: [true, 'password cannot be empty'] },
    role: { type: String, require: [true, 'role cannot be empty'] },
},
{
    timestamps: true
})

const User = model("User", userSchema)

export default User

