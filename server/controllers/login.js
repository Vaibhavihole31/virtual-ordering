import User from './../models/User.js';
import md5 from 'md5';

export const loginPost = async (req, res) => {
    const { email, password } = req.body;

    let errorMessage = []

    if (!email) errorMessage.push("Email cannot be empty")
    if (!password) errorMessage.push("Password cannot be empty")

    if (errorMessage.length) {
        return res.json({
            success: false,
            message: errorMessage.toString()
        });
    }

    const existingUser = await User.findOne({
        email,
        password: md5(password)
    });

    res.json({
        success: existingUser ? true : false,
        message: existingUser ? "Login Successfully!" : "Wrong Credential!",
        data: existingUser
    })
}