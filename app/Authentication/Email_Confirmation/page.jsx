import Link from "next/link"



export default function Email_Confirmation() {

    return (
        <div className="flex flex-col items-center   justify-center min-h-screen  px-6 max-[400px]:px-0">
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
                <div className="mt-6 max-w-[520px] text-center">
                    <p className="font-inter text-[15px] text-[#697E79] font-normal">
                        An email has been sent to{" "}
                        <span className="font-semibold text-[15px] font-inter text-[#223933]">
                            ross.geller@mail.com
                        </span>{" "}
                        with instructions for resetting your password.
                    </p>

                    <p className="mt-8 font-inter text-[15px] text-[#697E79] font-normal">
                        This email may take a few minutes to arrive in your inbox. If you
                        do not receive the password reset message within a few moments,
                        please check your spam folder.
                    </p>
                </div>

                {/* Button */}
                <div className="flex justify-center cursor-pointer w-full">
                    <Link href={"Set_Password"}>
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
        "
                        >
                            Go to Your Mail
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}