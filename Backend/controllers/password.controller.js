import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";


export const forgotPassword = async(req, res) => {
    try{
        const {email} = req.body;

        const userExists = await User.findOne({email});
        if(!userExists){
            return res.status(400).json({error: "User not found!"})
        }
        
        // Generate a random token
        const secret = process.env.JWT_SECRET_KEY + userExists.password;
        const token = jwt.sign({id:userExists._id}, secret, {
            expiresIn: '5m'
          });
        
            const resetPasswordLink = `http://localhost:8000/api/reset-password/${userExists._id}/${token}`

            // Send link via mail

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'kajalpruthi7817@gmail.com',
                    pass: 'pndj xnys gzah thdu'
                }
            });

            var mailOptions = {
                from: 'kajalpruthi7817@gmail.com',
                to: email,
                subject: 'Reset Password',
                html: `Click on this link to change your password: <br/> <a href="${resetPasswordLink}">${resetPasswordLink}</a>`
            };

            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                    return res.status(500).json({ error: 'Failed to send email' });
                } else {
                    return res.status(200).json({ message: 'Password reset link sent successfully' });
                }
            });
    }
    catch(error){
        console.log("Error in forgot password controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getResetPassword = async (req, res) => {
    try {
        const { id, token } = req.params;

        const userExists = await User.findOne({_id: id});
        if(!userExists){
            return res.status(400).json({error: "User not found!"})
        }

        const secret = process.env.JWT_SECRET_KEY + userExists.password;

        // verification of id and token
        const decodedToken = jwt.verify(token, secret);
        res.redirect(`http://localhost:3000/reset-password/${id}/${token}`)
    } 

    catch (error) {
        console.log("Error in get reset password controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const postResetPassword = async(req, res) => {
    try {

        // Find User
        const { id } = req.params;
        const userExists = await User.findById(id);
        if (!userExists) {
            return res.status(404).json({ error: "User not found" });
        }

        const {password, confirmPassword} = req.body

        // Case1: If passwords do not match
        if(password !== confirmPassword){
            return res.status(400).json({error: "Passwords do not match"})
        }

        // Password Hashing
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

         // Update user's password in the database
         userExists.password = hashedPassword;
         await userExists.save();

         res.status(200).json({ message: "Password reset successful" });
    } 

    catch (error) {
        console.log("Error in post reset password controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}