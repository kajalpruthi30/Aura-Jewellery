import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useRegister = () => {

    const[loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext()


    const register = async({firstName, lastName, email, password, day, month, year}) => {

        // Handle Validation
        const success = handleInputErrors({firstName, lastName, email, password})
        if(!success) return;

        setLoading(true)

        try{
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({firstName, lastName, email, password, day, month, year})
            });
            const data = await res.json();

            if(data.error){
                throw new Error(data.error)
            }
            else{
                toast.success("User Registered Successfully!")
            }

            localStorage.setItem("user", JSON.stringify(data))
            setAuthUser(data)
        }
        catch(error){
            toast.error(error.message)
        }
        finally{
            setLoading(false);
        }
    }

    return {loading, register}
}

export default useRegister;

function handleInputErrors({firstName, lastName, email, password}){
    if(!firstName || !lastName || !email || !password){
        toast.error("All fields are required");
        return false;
    }
    return true;
}