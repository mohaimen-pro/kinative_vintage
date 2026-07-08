"use client"

import { Eye, CircleCheck, CircleAlert } from "lucide-react"
import Link from "next/link";
import { useState, useEffect } from "react"


export default function Set_Password() {

    const [password, setPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");

    const [show_password, set_show_password] = useState(false)
    const [show_second_password, set_show_second_password] = useState(false)

    const hasMinLength = password.length >= 6;

    const passwordsMatch =
        secondPassword.length > 0 &&
        password === secondPassword;


    return (
        <div className="flex-1 flex items-center">
            <div className="w-full max-w-[520px] ml-[50px]">
                {/* Heading */}
                <div className="mb-6">
                    <p className="font-inter text-[36px] font-semibold text-[#223933]">
                        Set Your Password
                    </p>

                    <p className="font-inter text-[15px] leading-[24px] font-normal text-[#697E79]">
                        Enter your email address and set your password
                    </p>
                </div>

                {/* Form */}
                <div className="flex flex-col gap-5">
                    {/* New Password */}
                    <div>
                        <label className="block mb-2 font-inter text-[15px] font-normal text-[#697E79]">
                            Type Your New Password
                        </label>

                        <div className="relative">
                            <input
                                onChange={(e) => {
                                    setPassword(e.target.value)

                                }}
                                value={password}
                                type={show_password ? "text" : "password"}
                                placeholder="**********"
                                className={`w-full h-[45px] rounded-full border border-[#BDD7BD] bg-white px-6 pr-14 font-inter text-[14px] font-normal text-[#223933] placeholder:text-[#7E9B94] outline-none focus:border-[#BAE959]`}
                            />

                            <button
                                onClick={() => set_show_password((prev) => !prev)}
                                type="button"
                                className="absolute cursor-pointer right-5 top-1/2 -translate-y-1/2"
                            >
                                <Eye color="#D2D2D2" className="w-[22px] h-auto" />
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block mb-2 font-inter text-[15px] font-normal text-[#697E79]">
                            Re-type Password
                        </label>

                        <div className="relative">
                            <input
                                onChange={(e) => {
                                    setSecondPassword(e.target.value)

                                }}
                                value={secondPassword}
                                type={show_second_password ? "text" : "password"}
                                placeholder="**********"
                                className="w-full h-[45px] rounded-full border border-[#BDD7BD] bg-white px-6 pr-14 font-inter text-[14px] font-normal text-[#223933] placeholder:text-[#7E9B94] outline-none focus:border-[#BAE959]"
                            />

                            <button
                                onClick={() => set_show_second_password((prev) => !prev)}
                                type="button"
                                className="absolute cursor-pointer right-5 top-1/2 -translate-y-1/2"
                            >
                                <Eye color="#D2D2D2" className="w-[22px] h-auto" />
                            </button>
                        </div>
                    </div>

                    {/* Button */}
                    <Link href="Set_Password_Confirmation">
                        <button className=" w-[179px] h-[43px] cursor-pointer rounded-full bg-[#BAE959] text-[#27463E] font-inter text-[14px] font-medium transition duration-200 hover:bg-[#AEDC4F]">
                            Save Password
                        </button>
                    </Link>

                    {/* Validation */}
                    <div className="mt-3 flex flex-col gap-3">
                        {/* Minimum Length */}
                        <div
                            className={`flex items-center gap-2 transition-colors duration-300 ${hasMinLength ? "text-[#6A8B26]" : "text-[#F6857B]"
                                }`}
                        >
                            {hasMinLength ? (
                                <CircleCheck className="w-5 h-5" />
                            ) : (
                                <CircleAlert className="w-5 h-5" />
                            )}

                            <p className="font-inter text-[15px]">
                                Password must have at least 6 characters
                            </p>
                        </div>

                        {/* Password Match */}
                        {secondPassword.length > 0 && (
                            <div
                                className={`flex items-center gap-2 transition-colors duration-300 ${passwordsMatch ? "text-[#6A8B26]" : "text-[#F6857B]"
                                    }`}
                            >
                                {passwordsMatch ? (
                                    <CircleCheck className="w-5 h-5" />
                                ) : (
                                    <CircleAlert className="w-5 h-5" />
                                )}

                                <p className="font-inter text-[15px]">
                                    {passwordsMatch
                                        ? "Passwords match"
                                        : "Passwords don't match"}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}