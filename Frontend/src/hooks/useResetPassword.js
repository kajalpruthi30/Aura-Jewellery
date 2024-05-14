import { useState } from "react";
import toast from "react-hot-toast";

const useResetPassword = () => {

    const [loading, setLoading] = useState(false);

    const resetPassword = async({id, token, password, confirmPassword}) => {

        const success = handleInputErrors({ password, confirmPassword})
        if(!success) return;

        setLoading(true);

        try{
            const res = await fetch(`/api/reset-password/${id}/${token}`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({password,confirmPassword})
            })
            const data = await res.json();
    
            if(data.error) {
                throw new Error(data.error)
            }
            else{
                toast.success("Password Reset Successful!")
            }
        }
        catch(error){
            toast.error(error.message)
        }
        finally{
            setLoading(false);
            
        }
    }

    return {loading, resetPassword}

}

export default useResetPassword;


function handleInputErrors({password, confirmPassword}){
    if( !password || !confirmPassword){
        toast.error("All fields are required");
        return false;
    }
    return true;
}