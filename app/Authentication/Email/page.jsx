import Link from "next/link";
import Right_Side_Login_Page from "../Templates/right_side";
import { PhoneCall } from "lucide-react";



export default function email() {
    return (




        <>

            {/* Center Content */}
            <div className="flex-1 flex items-center">
                <div className="w-full max-w-[520px] min-[901px]:ml-[50px] max-[900px]:ml-0 max-[900px]:mx-auto">
                    {/* Heading */}
                    <div className="mb-8 max-[400px]:mb-8">
                        <h1 className="font-inter text-[36px] max-[1000px]:text-[30px] max-[400px]:text-[25px] font-semibold text-[#223933]">
                            Welcome Aboard!
                        </h1>

                        <p className="font-inter text-[15px] max-[1000px]:text-[14px] leading-[24px] font-normal text-[#697E79]">
                            Enter your email address and set your password
                        </p>
                    </div>

                    {/* Form */}
                    <div className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="example@yourmail.com"
                            className="h-[45px] w-full rounded-full border border-[#BDD7BD] bg-white px-6 font-inter text-[14px] text-[#5F887D] placeholder:text-[#7E9B94] outline-none focus:border-[#BAE959]"
                        />

                        <Link href={"Email_Confirmation"}>
                            <button className="h-[43px] w-[179px] cursor-pointer rounded-full bg-[#BAE959] text-[#27463E] font-inter text-[14px] font-medium transition hover:bg-[#A9D94B]">
                                Set Password
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>






    )
}