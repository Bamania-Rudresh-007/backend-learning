import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const signUp = async(req, res, next) => {
    try{
        const {name, email, password} = req.body;

        const hashPassword = await bcrypt.hash(password, 10);


        const user = await User.create({
            name,
            email,
            password: hashPassword,
        })

        res.json({
            message: "User registered successfully",
            user,
        })
    }   
    catch(err){
        next(err)
    }
}

export default signUp;