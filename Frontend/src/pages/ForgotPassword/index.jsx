import React, { useState } from "react";
import useForgotPassword from "../../hooks/useForgotPassword";
import Loader from "../../components/Common/Loader"
function ForgotPassword() {

  const [email, setEmail] = useState('');

  const {loading, forgotPassword} = useForgotPassword();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword({email});
    setEmail('');
  }

  return (
    <div className="flex flex-col items-center aligm-center my-20">
      <h2 className="text-[30px] text-capitalize">FORGOT PASSWORD</h2>
      <p className="my-3">Enter your email address and we'll send you an email containing instructions on how to reset your password.</p>
      {
        loading ? <Loader /> : (
          <form onSubmit={handleSubmit}>
            <div className="my-10"> 
                <input 
                type="email" id="email"  name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="tracking-wide p-2 w-[31vw] text-sm block flex-start border-b border-gray-300 focus:border-black focus:border-opacity-100 focus:outline-none focus:ring-black-500" placeholder="EMAIL"/>
            </div> 
            <div>
              <button type="submit" className="px-4 py-3 my-4 text-sm  w-[31vw] bg-white text-gray-600 tracking-wider hover:bg-black hover:text-white transition-colors duration-300    border border-t-gray-400 border-r-gray-400 border-l-gray-400 border-b-gray-400">
                RESET PASSWORD 
              </button>
            </div>   
          </form>
        )
      }
      

    </div>
  );
}

export default ForgotPassword;
