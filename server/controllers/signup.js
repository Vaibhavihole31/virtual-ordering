import User from './../models/User.js';
import md5 from 'md5';

export const signupPost = async (req, res) => {
    const { name, phone, email, password, role } = req.body;

    // validation to check all fileld are filled

    const emptyFields = [];

    if (!name) emptyFields.push('name');
    if (!phone) emptyFields.push('phone');
    if (!email) emptyFields.push('email');
    if (!password) emptyFields.push('password');
    if (!role) emptyFields.push('role');

    if (emptyFields.length > 0) {
        return res.json({
            success: false,
            message: `${emptyFields.join(',')} are required`
        })
    }


    // validation to check if email already exists 

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return res.json({
            success: false,
            message: "Email already exists"
        })
    }

    // validation to check if phone already exists

    const existingUserPhone = await User.findOne({ phone: phone });
    if (existingUserPhone) {
        return res.json({
            success: false,
            message: "Phone already exists"
        })
    }

    const user = new User({
        name: name,
        phone: phone,
        email: email,
        password: md5(password),
        role: role
    })

    const savedUser = await user.save();

    res.json({
        success: true,
        message: "User Created Successfully",
        data: savedUser
    })
}