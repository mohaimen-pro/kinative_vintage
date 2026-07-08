"use client"

import { Eye, CircleCheck, CircleAlert } from "lucide-react"
import { useState, useEffect } from "react"


export default function Set_Password() {

    const [show_password , set_show_password] = useState(false)


    return (
        <div className="flex-1 flex items-center">
            <div className="w-full max-w-[520px] ml-[50px] max-[900px]:ml-0 max-[400px]:text-[25px] max-[900px]:mx-auto">
                {/* Heading */}
                <div className="mb-6 max-[400px]:mb-10">
                    <p className="font-inter text-[36px] max-[1000px]:text-[30px] max-[400px]:text-[25px] font-semibold text-[#223933]">
                        Login To Your Account
                    </p>

                    <p className="font-inter text-[15px] max-[1000px]:text-[14px] leading-[24px] font-normal text-[#697E79]">
                        Enter your user name and password.
                    </p>
                </div>

                {/* Form */}
                <div className="flex flex-col gap-5">
                    {/* New Password */}
                    <div>
                        <label className="block mb-2 font-inter text-[15px] font-normal text-[#697E79]">
                            You Username or Email
                        </label>

                        <div className="relative">
                            <input
                                type="email"
                                placeholder="myemail@ventrage.com"
                                className={`w-full h-[45px] rounded-full border border-[#BDD7BD] bg-white px-6 pr-14 font-inter text-[14px] font-normal text-[#223933] placeholder:text-[#7E9B94] outline-none focus:border-[#BAE959]`}
                            />

                            
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block mb-2 font-inter text-[15px] font-normal text-[#697E79]">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type={show_password ? "text" : "password"}
                                placeholder="**********"
                                className="w-full h-[45px] rounded-full border border-[#BDD7BD] bg-white px-6 pr-14 font-inter text-[14px] font-normal text-[#223933] placeholder:text-[#7E9B94] outline-none focus:border-[#BAE959]"
                            />

                            <button
                                onClick={()=> set_show_password((prev) => !prev)}
                                type="button"
                                className="cursor-pointer absolute right-5 top-1/2 -translate-y-1/2"
                            >
                                <Eye color="#D2D2D2" className="w-[22px] h-auto" />
                            </button>
                        </div>
                    </div>

                    {/* Button */}
                    <button className=" w-[179px] h-[43px] rounded-full bg-[#BAE959] text-[#27463E] font-inter text-[14px] font-medium transition duration-200 hover:bg-[#AEDC4F]">
                        Log In
                    </button>

                    
                </div>

                <div className="flex gap-1 mt-10">
                    <p className="text-[#697E79] text-[15px] font-normal font-inter">Forgot Your Password?</p>
                    <span className="text-[#638125] text-[15px] font-semibold font-inter">Reset Password</span>
                </div>
            </div>
        </div>
    )
}