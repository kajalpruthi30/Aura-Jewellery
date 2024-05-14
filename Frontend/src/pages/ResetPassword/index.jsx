import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useResetPassword from "../../hooks/useResetPassword";
import Loader from "../../components/Common/Loader"

function ResetPassword() {

  const{id, token} = useParams();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { loading, resetPassword} = useResetPassword();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await resetPassword({id, token, password, confirmPassword}); 
    setPassword('');
    setConfirmPassword('');
  }

  return (
    <div className="flex flex-col items-center align-center my-20">
      <h2 className="text-[30px] text-capitalize">FORGOT PASSWORD</h2>
      {
      loading ? <Loader /> : (
        <form onSubmit={handleSubmit}>
          <div className="my-10"> 
              <input 
              type="text" id="password"  name="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="tracking-wide p-2 w-[31vw] text-sm block flex-start border-b border-gray-300 focus:border-black focus:border-opacity-100 focus:outline-none focus:ring-black-500" placeholder="PASSWORD"/>
          </div> 
          <div className="my-10"> 
              <input 
              type="text" id="confirmPassword"  name="confirmPassword" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="tracking-wide p-2 w-[31vw] text-sm block flex-start border-b border-gray-300 focus:border-black focus:border-opacity-100 focus:outline-none focus:ring-black-500" placeholder="CONFIRM PASSWORD"/>
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

export default ResetPassword;
