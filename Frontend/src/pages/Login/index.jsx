import React, { useState } from "react";
import {Link} from "react-router-dom";
import useLogin from "../../hooks/useLogin";


function Login() {

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const {loading, login} = useLogin();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await login({email, password});
  }

 
  return (
    <>
        <div className="flex my-40 mx-[10rem]">

          <div className="w-[40vw] mr-[7rem]">
              <h1 className=' text-xl flex-start leading-1 font-thin tracking-wide'>Returning Customers</h1>
                
            <form onSubmit={handleSubmit}> 
              <div className="my-10">
                <input 
                type="email" id="email"  name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 w-[31vw] text-sm block flex-start border-b border-gray-300 focus:border-black focus:border-opacity-100 focus:outline-none focus:ring-black-500" placeholder="EMAIL"/>
              </div>

              <div className="my-10">
                <input 
                type="text"  id="password" name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2  w-[31vw] text-sm block flex-start  border-b border-gray-300 focus:border-black focus:border-opacity-100 focus:outline-none focus:ring-black-500"  placeholder="PASSWORD"/>
              </div>

             <button type="submit" className="px-4 py-3 my-4 text-sm  w-[31vw] bg-white text-gray-600 tracking-wider hover:bg-black hover:text-white transition-colors duration-300    border border-t-gray-400 border-r-gray-400 border-l-gray-400 border-b-gray-400">
                SIGN IN 
            </button>

            </form>    
  

           
            <div className="my-3 flex flex-col items-center align-center">
                <Link to = "/forgot-password"><p className="text-gray-400 tracking-wider text-[12px] cursor-pointer">FORGOT YOUR PASSWORD?</p></Link>
                <hr className='w-[35%]'></hr>
            </div>

          </div>

          <div className="border-[0.90px] border-gray-300 h-[47vh]"></div>
  
          <div className="ml-[7rem]">
                <h1 className='text-xl leading-1 font-thin tracking-wide'>Create your Aura Account</h1>
                <p className='text-[14px]  my-7 tracking-wider'>Sign-up for a Aura account today for easy order tracking,access to your order history and address management.</p>
             
                <button className="my-10 px-4 py-3 text-sm tracking-wider  bg-white text-gray-600  hover:bg-black hover:text-white transition-colors duration-300 border border-t-gray-400 border-r-gray-400 border-l-gray-400 border-b-gray-400">
                  <Link to ='/register'>CREATE ACCOUNT</Link>
                </button>
          </div>

        </div>
    </>
  );
}

export default Login;