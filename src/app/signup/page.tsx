
'use client'
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MyFooter from '@/components/MyFooter';

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);

  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Navbar />
      <div className="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden pt-40">
        <img
          className="hidden lg:block absolute inset-0 mt-32"
          src="zospace-assets/lines/line-mountain.svg"
          alt=""
        />
        <img
          className="hidden lg:block absolute inset-y-0 right-0 -mr-40 -mt-32"
          src="zospace-assets/lines/line-right-long.svg"
          alt=""
        />
        <div className="relative container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                <div className="max-w-md">
                  <span className="text-lg text-blue-400 font-bold">
                    Register Account
                  </span>
                  <h2 className="mt-8 mb-12 text-5xl font-bold font-heading text-white">
                    Start your journey by creating an account.
                  </h2>
                  <p className="text-lg text-gray-200">
                    <span>Register Now for Amazing Properties </span>
                    <span className="text-white font-bold">-RealES</span>
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="px-6 lg:px-20 py-12 lg:py-24 bg-gray-600 rounded-lg">
                  <form action="#">
                    <h3 className="mb-10 text-2xl text-white font-bold font-heading">
                      Register Account
                    </h3>
                    <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                      <span className="inline-block pr-3 py-2 border-r border-gray-50">
                        <svg
                          className="w-5 h-5"
                          width="20"
                          height="21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Your email SVG icon code */}
                        </svg>
                      </span>
                      <input
                        className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none"
                        type="email"
                        placeholder="example@coderbros.com"
                      />
                    </div>

                    {/* Password field with eye icon */}
                  {/* Password field */}
<div className="flex items-center pl-6 mb-3 bg-white rounded-full relative">
  <span className="inline-block pr-3 py-2 border-r border-gray-50">
    <svg className="w-5 h-5" width="17" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.184 8.48899H15.2011V6.25596C15.2011 2.6897 12.3193 0 8.49924 0C4.67919 0 1.7974 2.6897 1.7974 6.25596V8.48899H1.81568C0.958023 9.76774 0.457031 11.3049 0.457031 12.9569C0.457031 17.3921 4.06482 21 8.49924 21C12.9341 21 16.5424 17.3922 16.5428 12.9569C16.5428 11.3049 16.0417 9.76774 15.184 8.48899ZM2.69098 6.25596C2.69098 3.14895 5.13312 0.893578 8.49924 0.893578C11.8654 0.893578 14.3075 3.14895 14.3075 6.25596V7.39905C12.8423 5.86897 10.7804 4.91468 8.49966 4.91468C6.21837 4.91468 4.15607 5.86946 2.69098 7.40017V6.25596ZM8.49966 20.1064C4.55762 20.1064 1.35061 16.8989 1.35061 12.9569C1.35061 9.01534 4.5572 5.80826 8.49924 5.80826C12.4422 5.80826 15.6488 9.01534 15.6492 12.9569C15.6492 16.8989 12.4426 20.1064 8.49966 20.1064Z"
        fill="black"
      />
    </svg>
  </span>
  <input
    className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none"
    type={showPassword ? 'text' : 'password'}
    placeholder="Password"
  />
  {/* Eye icon to toggle visibility */}
  <span
    onClick={togglePasswordVisibility}
    className="absolute right-4 cursor-pointer"
  >
    {showPassword ? '🚫' : '👁️'}
  </span>
</div>

{/* Repeat password field */}
<div className="flex items-center pl-6 mb-6 bg-white rounded-full relative">
  <span className="inline-block pr-3 py-2 border-r border-gray-50">
    <svg className="w-5 h-5" width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.6243 13.5625C15.3939 13.5625 15.2077 13.7581 15.2077 14.0077C15.2077 18.3614 11.8536 21.75 7.49998 21.75C3.14636 21.75 0 18.3614 0 14.0077C0 13.7581 0.207715 13.5625 0.457284 13.5625"
        fill="black"
      />
    </svg>
  </span>
  <input
    className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none"
    type={showPassword ? 'text' : 'password'}
    placeholder="Repeat Password"
  />
</div>


                    <div className="inline-flex mb-10">
                      <input className="mr-4" type="checkbox" />
                      <p className="-mt-2 text-sm text-gray-200">
                        By signing up, you agree to our{' '}
                        <a className="text-white" href="#">
                          Terms, Data Policy
                        </a>{' '}
                        and{' '}
                        <a className="text-white" href="#">
                          Cookies.
                        </a>
                      </p>
                    </div>
                    <button className="py-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200">
                      Get started
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyFooter />
    </>
  );
};

export default Page;
