import React, { useState } from "react";
import useRegister from "../../hooks/useRegister";

function Register() {

    const[inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        day: '',
        month: '',
        year: ''
    })

    const {loading, register} = useRegister()

    const handleSubmit = async(e) => {
        e.preventDefault();
        await register(inputs)
    }

    // Function to generate array of options for days (1 to 31)
    const generateDaysOptions = () => {
      const options = [];
      for (let i = 1; i <= 31; i++) {
          options.push(<option key={i} value={i}>{i}</option>);
      }
      return options;
    }

    // Function to generate array of options for months (January to December)
    const generateMonthsOptions = () => {
      const months = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
      ];
      return months.map((month, index) => (
          <option key={index} value={index + 1}>{month}</option>
      ));
   }

    // Function to generate array of options for years (e.g., from 1900 to current year)
    const generateYearsOptions = () => {
      const currentYear = new Date().getFullYear();
      const options = [];
      for (let year = currentYear; year >= 1900; year--) {
          options.push(<option key={year} value={year}>{year}</option>);
      }
      return options;
  }

  return (
    <>
        <div className="flex my-40 mx-[5rem]">

          <div className="mr-[7rem] w-[60vw]">
              <h1 className=' text-xl flex-start leading-1 font-thin tracking-wide'>Create Account</h1>
                
            <form onSubmit={handleSubmit}> 

             <div className="my-10 flex">
                <div>
                    <input 
                    type="text" id="name"  name="name"  
                    value={inputs.firstName}
                    onChange={(e) => setInputs({...inputs, firstName: e.target.value})}
                    className="p-2 w-[18vw] text-sm block flex-start border-b border-gray-300 focus:border-black focus:border-opacity-100 focus:outline-none focus:ring-black-500" placeholder="FIRST NAME"/>
                </div>
                <div>
                    <input 
                    type="text" id="name"  name="name" 
                    value={inputs.lastName}
                    onChange={(e) => setInputs({...inputs, lastName: e.target.value})} 
                    className="p-2 mx-4 w-[18vw] text-sm block flex-start border-b border-gray-300 focus:border-black focus:border-opacity-100 focus:outline-none focus:ring-black-500" placeholder="LAST NAME"/>
                </div>
             </div>


              <div className="my-10">
                <input 
                  type="email" id="email"  name="email"  
                  value={inputs.email}
                  onChange={(e) => setInputs({...inputs, email: e.target.value})}
                  className="p-2 w-[37vw] text-sm block flex-start border-b border-gray-300 focus:border-black focus:border-opacity-100 focus:outline-none focus:ring-black-500" placeholder="EMAIL"/>
              </div>

              <div className="my-10">
                <input 
                  value={inputs.password}
                  onChange={(e) => setInputs({...inputs, password: e.target.value})}
                  type="text"  id="password" name="password" className="p-2 w-[37vw] text-sm block flex-start  border-b border-gray-300 focus:border-black focus:border-opacity-100 focus:outline-none focus:ring-black-500"  placeholder="PASSWORD"/>
              </div>

              <p className="px-2 text-gray-700 font-thin tracking-wider">Birthday</p>

              <div className="my-10 flex w-[37vw] gap-5">
                <div className="border-b py-3">
                  {/* Select for day */}
                  <select
                    className="w-[11.5vw] border-none text-gray-700 font-thin tracking-wider p-3" 
                    value={inputs.day}
                    onChange={(e) => setInputs({...inputs, day: e.target.value})}>
                    <option value="">Day</option>
                    {generateDaysOptions()}
                  </select>
                </div>

                <div className="border-b py-3">
                  {/* select for month */}
                  <select
                    className="w-[11.5vw] border-none text-gray-700 font-thin tracking-wider p-3"
                    value={inputs.month}
                    onChange={(e) => setInputs({ ...inputs, month: e.target.value })}>
                    <option value="">Month</option>
                    {generateMonthsOptions()}
                  </select>
                </div>

                <div className="border-b py-3">
                  {/* select for year */}
                  <select
                    className="w-[11.5vw] border-none text-gray-700 font-thin tracking-wider px-3 py-2"
                    value={inputs.year}
                    onChange={(e) => setInputs({ ...inputs, year: e.target.value})}>
                    <option value="">Year</option>
                    {generateYearsOptions()}
                  </select>
                </div>
              </div>

              <button type="submit" className="px-4 py-3 my-4 text-sm  w-[37vw] bg-white text-gray-600 tracking-wider hover:bg-black hover:text-white transition-colors duration-300    border border-t-gray-400 border-r-gray-400 border-l-gray-400 border-b-gray-400">
                CREATE ACCOUNT
             </button>
            </form>  

            <p className="text-center text-gray-700">By creating an account, you agree to our rewards program Terms and Conditions</p>  

          </div>

          <div className="border-[0.90px] border-gray-300 h-[47vh]"></div>
  
          <div className="ml-[7rem]">
                <h1 className='text-xl leading-1 font-thin tracking-wide'>Create your Aura Account</h1>
                <p className='text-[14px] my-7 tracking-wider'>Sign-up for a Aura account today for easy order tracking,access to your order history and address management.</p>
                <p className='text-[14px] my-7 tracking-wider'>Have you shopped with us before? You will be able to retrieve your past purchases information if you use the same email address to sign-up as the one used at time of checkout.</p>
          </div>

        </div>
    </>
  );
}

export default Register;