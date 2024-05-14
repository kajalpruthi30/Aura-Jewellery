import { useState } from "react";
import toast from "react-hot-toast"

const useForgotPassword = () => {

    const [loading, setLoading] = useState(false);

    const forgotPassword = async({email}) => {

        const success = handleInputErrors({email})
        if(!success) return;

        setLoading(true);

        try{
            const res = await fetch(`/api/forgot-password`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email})
            })
            const data = await res.json();
    
            if(data.error) {
                throw new Error(data.error)
            }
            else{
                toast.success("Email has been sent to you!")
            }
        }
        catch(error){
            toast.error(error.message)
        }
        finally{
            setLoading(false);
        }
    }

    return {loading, forgotPassword}

}

export default useForgotPassword;


function handleInputErrors({email}){
    if(!email){
        toast.error("Enter a valid email");
        return false;
    }
    return true;
}