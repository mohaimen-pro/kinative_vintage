import Link from "next/link"




export default function Set_Password_Confrimation() {
    return (
        <div className="flex flex-col items-center   justify-center min-h-screen  px-6">
            <div className="message bg-[#F7F7F7] rounded-[10px] px-6 py-8">
                {/* Icon */}
                <div className="w-[65px] h-[65px] mx-auto rounded-full bg-[#E7F6C9] flex items-center justify-center">
                    <div className="w-[55px] h-[55px] rounded-full bg-[#223933] flex items-center justify-center">
                        <img
                            src="/mark_email_unread.png"
                            alt="Mail"
                            className="w-5 h-5"
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="mt-2 max-w-[520px] text-center">
                    <p className="font-inter text-[15px] text-[#697E79] font-normal">
                        <span className="font-semibold text-[15px] font-inter text-[#223933]">
                            Your password has successfully been set!
                        </span>{" "}
                    </p>

                    <p className="mt-2 font-inter text-[15px] text-[#697E79] font-normal">
                        New password created successfully. To continue to your account, login securely with your newly changed password.
                    </p>
                </div>

                {/* Button */}
                <div className="flex justify-center w-full">
                    <Link href="Login">
                        <button
                            className="
                    mt-4
                    h-[38px]
                    px-6
                    rounded-full
                    bg-[#BAE959]
                    font-inter
                    text-[15px]
                    font-medium
                    text-[#223933]
                    transition-all
                    duration-200
                    hover:bg-[#AEDC4F]
                    cursor-pointer
                "
                        >
                            Login to my Account
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}