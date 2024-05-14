import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try{
        const {firstName, lastName, email, password, day, month, year} = req.body

        // Case: Email already exists
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({error: "Email already exists"})
        }

        // Password Hashing
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // creating new model for data storage
        const newUser = new User({
            firstName,
            lastName,
            email, 
            password: hashedPassword,
            birthDate: {
                day,
                month,
                year
            }
        })

        if(newUser){

            // token generation
            generateTokenAndSetCookie(newUser._id, res);

            // save into database
            await newUser.save()

            res.status(201).json({
                _id: newUser._id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                password: newUser.password,
                birthDate: newUser.birthDate
            })
        }

        else{
            res.status(400).json({error: "Invalid User Data"})
        }
    }
    catch(error){
        console.log("Error in signup controller", error.message);
        res.status(500).json({error: "Internal Server Error"})
    }
} 

export const login = async (req, res) => {
    try{
        const {email, password} = req.body;

        // Case1: Email does not exist
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({error: "User does not exist"})
        }

        // Case2: Password does not matches
        const isPasswordMatch = await bcrypt.compare(password, user?.password || "");
        if(!isPasswordMatch){
            return res.status(400).json({error: "Incorrect Password"})
        }

        // token generation
        generateTokenAndSetCookie(user._id, res);

        res.status(201).json({
            _id: user._id,
            email: user.email,
            password: user.password
        })
    }

    catch(error){
        console.log("Error in login controller", error.message);
        res.status(500).json({error: "Internal Server Error"})
    }
} 

export const logout = async (req, res) => {
    try{
        res.cookie("jwt", "", {maxAge: 0})
        res.status(200).json({message: "Logged out successfully"})
    } catch(error){
        console.log("Error in logout controller", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }  
} 
