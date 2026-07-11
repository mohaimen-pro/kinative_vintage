import vantage_logo from "@/public/vantage_logo.png"
import search_icon from "@/public/search_icon.png"
import settings_icon from "@/public/settings_power.png";
import log_out_icon from "@/public/log_out_icon.png";
import Link from "next/link";
import right_arrow_icon from "@/public/right_arrow_icon.png";
import point_icon from "@/public/point_icon.png";
import activity_log_icon from "@/public/notification_icon.png";
import Analytics_page_icon from "@/public/insert_chart_outlined.png";
import credit_card from "@/public/credit_card.png";
import "../globals.css";
import { Inter } from "next/font/google";
import { CreditCard, ChartColumnIncreasing, User, House, CircleDollarSign, Settings, Power, PhoneCall, BellDot } from 'lucide-react';



const inter = Inter({
    subsets: ["latin"],
});



import Image from "next/image";


function Sidebar(props) { //props








    return (
        <>
            {/* Overlay */}
            <div
                onClick={() => props.setIsOpen(false)}
                className={`${props.isOpen
                    ? "fixed inset-0 bg-black/50 z-220 min-[1200px]:hidden cursor-pointer"
                    : "hidden"
                    }`}
            />


            <aside
                className={`fixed top-0 left-0 z-300 w-70 h-screen flex flex-col justify-between bg-[#223933] text-white transition-transform duration-300
        ${props.isOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }
        min-[1200px]:translate-x-0
        min-[1200px]:static
        min-[1200px]:ml-1.5
        min-[1200px]:mt-1.5
        min-[1200px]:rounded-[10px]`}
            >
                <div className="content px-6 py-8">

                    <div className="heading flex justify-between items-center">
                        <div className="vantage_logo">
                            <Image src={vantage_logo} alt="" />
                        </div>


                    </div>

                    <div className="search_section pt-8 flex items-center gap-2">
                        <div>
                            <Image src={search_icon} alt="" />
                        </div>
                        <input className={`${inter.className} font-normal text-[14px] placeholder:text-[#A2CAC0] text-[#A2CAC0]`} placeholder="Search Options" type="text" name="" id="" />
                    </div>





                    <div className={`flex pages pt-10 flex-col justify-center gap-4`}>
                        {props.isAdminView ? (
                            <>
                                <Link href={"/Admin_Panel/Dashboard"}>
                                    <div className={`${props.pageName === "Dashboard" ? 'bg-[#27463E] rounded-[100px]' : ""} flex cursor-pointer  justify-between items-center px-7 py-3`}>
                                        <div className="flex items-center gap-4">
                                            <div className="page_icon">

                                                <House color={`${props.pageName === "Dashboard" ? "#B8E659" : "white"}`} width="25px" height="25px" />

                                            </div>

                                            <h1
                                                className={`${props.pageName === "Dashboard" ? "text-[#B8E659]" : "text-white"} font-inter font-normal text-[16px]`}
                                            >
                                                Dashboard
                                            </h1>
                                        </div>

                                        <div className={`${props.pageName === "Dashboard" ? "block" : "hidden"} right_arrow_icon`}>
                                            <Image src={right_arrow_icon} alt="" />
                                        </div>
                                    </div>
                                </Link>

                                <Link href={"/Admin_Panel/Customers"}>
                                    <div className={`${props.pageName === "Customers" ? 'bg-[#27463E] rounded-[100px]' : ""} flex cursor-pointer justify-between items-center px-7 py-3`}>
                                        <div className="flex items-center gap-4">
                                            <div className="page_icon">

                                                <User color={`${props.pageName === "Customers" ? "#B8E659" : "white"}`} width="25px" height="25px" />



                                            </div>

                                            <h1
                                                className={`${inter.className} ${props.pageName === "Customers" ? "text-[#B8E659]" : "text-white"} font-normal text-[16px] font-inter`}
                                            >
                                                Customers
                                            </h1>
                                        </div>

                                        <div className={`${props.pageName === "Customers" ? "block" : "hidden"} right_arrow_icon`}>
                                            <Image src={right_arrow_icon} alt="" />
                                        </div>
                                    </div>
                                </Link>

                                <Link href={"/Admin_Panel/CardRequest"}>
                                    <div className={`${props.pageName === "CardRequest" || props.pageName === "CardRequest/Card_Details" ? 'bg-[#27463E] rounded-[100px]' : ""} flex cursor-pointer justify-between items-center px-7 py-3`}>
                                        <div className="flex items-center gap-4">
                                            <div className="page_icon">
                                                <CreditCard color={`${props.pageName === "CardRequest" || props.pageName === "CardRequest/Card_Details" ? "#B8E659" : "white"}`} width="25px" height="25px" />
                                            </div>

                                            <h1 className={`${inter.className} ${inter.className} ${props.pageName === "CardRequest" || props.pageName === "CardRequest/Card_Details" ? "text-[#B8E659]" : "text-white"} font-normal text-[16px] `}>
                                                Card Request
                                            </h1>
                                        </div>
                                        <div className={`${props.pageName === "CardRequest" || props.pageName === "CardRequest/Card_Details" ? "block" : "hidden"} right_arrow_icon`}>
                                            <Image src={right_arrow_icon} alt="" />
                                        </div>
                                    </div>
                                </Link>


                                <Link href={"/Admin_Panel/Fund_Request"}>
                                    <div className={`${props.pageName === "Fund_Request" ? 'bg-[#27463E] rounded-[100px]' : ""} flex cursor-pointer justify-between items-center px-7 py-3`}>
                                        <div className="flex items-center gap-4">
                                            <div className="page_icon">

                                                <ChartColumnIncreasing color={`${props.pageName === "Fund_Request" ? "#B8E659" : "white"}`} width="25px" height="25px" />

                                            </div>

                                            <h1 className={`${inter.className} ${inter.className} ${props.pageName === "Fund_Request" ? "text-[#B8E659]" : "text-white"} font-normal text-[16px] `}>
                                                Fund Request
                                            </h1>
                                        </div>
                                        <div className={`${props.pageName === "Fund_Request" ? "block" : "hidden"} right_arrow_icon`}>
                                            <Image src={right_arrow_icon} alt="" />
                                        </div>
                                    </div>
                                </Link>



                                <Link href={"/Admin_Panel/Activity_Log"}>
                                    <div className={`${props.pageName === "Activity_Log" ? 'bg-[#27463E] rounded-[100px]' : ""} flex cursor-pointer justify-between items-center px-7 py-3`}>
                                        <div className="flex items-center gap-4">
                                            <div>
                                                <BellDot color={`${props.pageName === "Activity_Log" ? "#B8E659" : "white"}`} width="25px" height="25px" />
                                            </div>

                                            <h1 className={`${inter.className} ${props.pageName === "Activity_Log" ? "text-[#B8E659]" : "text-white"} font-normal text-[16px] `}>
                                                Activity Log
                                            </h1>
                                        </div>
                                        <div className={`${props.pageName === "Activity_Log" ? "block" : "hidden"} pr-3 pt-1 right_arrow_icon`}>
                                            <Image src={right_arrow_icon} alt="" />
                                        </div>
                                    </div>
                                </Link>


                                <Link href={"/Analytics"}>
                                    <div className="flex cursor-pointer justify-between items-center px-7 py-3">
                                        <div className="flex items-center gap-4">
                                            <div className="page_icon">
                                                <PhoneCall width="25px" height="25px" />
                                            </div>

                                            <h1 className={`${inter.className} font-normal text-[16px] text-white`}>
                                                Support Request
                                            </h1>
                                        </div>
                                    </div>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href={"/Customer_Panel/Dashboard"}>
                                    <div className={`${props.pageName === "Dashboard" ? 'bg-[#27463E] rounded-[100px]' : ""} flex cursor-pointer justify-between items-center px-7 py-3`}>
                                        <div className="flex items-center gap-4">
                                            <div className="page_icon">
                                                <House color={`${props.pageName === "Dashboard" ? "#B8E659" : "white"}`} width="25px" height="25px" />
                                            </div>

                                            <h1
                                                className={`${props.pageName === "Dashboard" ? "text-[#B8E659]" : "text-white"} font-inter font-normal text-[16px]`}
                                            >
                                                Dashboard
                                            </h1>
                                        </div>

                                        <div className={`${props.pageName === "Dashboard" ? "block" : "hidden"} right_arrow_icon`}>
                                            <Image src={right_arrow_icon} alt="" />
                                        </div>
                                    </div>
                                </Link>

                                <Link href={"/Customer_Panel/My_Cards"}>
                                    <div className={`${props.pageName === "My_Cards" || props.pageName === "My_Cards/Card_Details" ? "bg-[#27463E] rounded-[100px]" : props.pageName === "Add_New_card" ? "bg-[#27463E] rounded-[100px]" : ""} flex cursor-pointer justify-between items-center px-7 py-3`}>
                                        <div className="flex items-center gap-4">
                                            <div className="page_icon">
                                                <User color={`${props.pageName === "My_Cards" || props.pageName === "My_Cards/Card_Details" ? "#B8E659" : props.pageName === "Add_New_card" ? "#B8E659" : "white"}`} width="25px" height="25px" />
                                            </div>

                                            <h1
                                                className={`${inter.className} ${props.pageName === "My_Cards" || props.pageName === "My_Cards/Card_Details" ? "text-[#B8E659]" : props.pageName === "Add_New_card" ? "text-[#BBE659]" : "text-white"} font-normal text-[16px] font-inter`}
                                            >
                                                My Cards
                                            </h1>
                                        </div>

                                        <div className={`${props.pageName === "My_Cards" || props.pageName === "My_Cards/Card_Details" ? "block" : props.pageName === "Add_New_card" ? "text-[#BBE659]" : "hidden"} right_arrow_icon`}>
                                            <Image src={right_arrow_icon} alt="" />
                                        </div>
                                    </div>
                                </Link>

                                <Link href={"/Customer_Panel/Transactions"}>
                                    <div className={`flex cursor-pointer ${props.pageName === "Transactions" ? 'bg-[#27463E] rounded-[100px]' : ""}  justify-between items-center px-7 py-3`}>
                                        <div className="flex items-center gap-4">
                                            <div className="page_icon">
                                                <CreditCard color={`${props.pageName === "Transactions" ? "#B8E659" : "white"}`} width="25px" height="25px" />
                                            </div>

                                            <h1
                                                className={`${inter.className} ${props.pageName === "Transactions" ? "text-[#B8E659]" : "text-white"} font-normal text-[16px] font-inter`}
                                            >
                                                Transactions
                                            </h1>
                                        </div>

                                        <div className={`${props.pageName === "Transactions" ? "block" : "hidden"} right_arrow_icon`}>
                                            <Image src={right_arrow_icon} alt="" />
                                        </div>
                                    </div>
                                </Link>

                                <Link href={"/Customer_Panel/My_Request"}>
                                    <div className={`${props.pageName === "My_Request" ? 'bg-[#27463E] rounded-[100px]' : ""} flex cursor-pointer justify-between items-center px-7 py-3`}>
                                        <div className="flex items-center gap-4">


                                            <div className="page_icon">
                                                <CircleDollarSign color={`${props.pageName === "My_Request" ? "#B8E659" : "white"}`} width="25px" height="25px" />
                                            </div>



                                            <h1
                                                className={`${inter.className} ${props.pageName === "My_Request" ? "text-[#B8E659]" : "text-white"} font-normal text-[16px] font-inter`}
                                            >
                                                My requests
                                            </h1>
                                        </div>

                                        <div className={`${props.pageName === "My_Request" ? "block" : "hidden"} right_arrow_icon`}>
                                            <Image src={right_arrow_icon} alt="" />
                                        </div>

                                    </div>
                                </Link>
                            </>
                        )}

                    </div>


                </div>


                <div className="footer pl-12 pb-6 flex flex-col justify-center">
                    <div className="flex justify-between items-center mb-5">
                        <div className="flex items-center gap-4">
                            <div className="page_icon">
                                <Settings />
                            </div>
                            <h1 className={`${inter.className} font-normal text-[18px] text-white`}>Setting</h1>
                        </div>
                    </div>


                    <div className="flex justify-between items-center mb-5">
                        <Link href={"/Authentication/Email"}>
                            <div className="flex items-center gap-4">
                                <div className="page_icon">
                                    <Power color="#FF4E4E" className="w-6 h-6" />
                                </div>
                                <h1 className={`${inter.className} font-normal text-[18px] text-white`}>Log Out</h1>
                            </div>
                        </Link>
                    </div>

                    <div className={`${props.isAdminView ? "hidden" : "flex"} justify-between items-center`}>
                        <div className="flex items-center gap-3 bg-[#27463E] px-6 py-3 rounded-[100px]">
                            <div className="page_icon">
                                <PhoneCall color="#BAE959" className="w-5 h-5" />
                            </div>
                            <h1 className={`font-inter font-medium text-[14px] text-white`}>Contact Support</h1>
                        </div>
                    </div>

                </div>
            </aside>
        </>
    )
}

export default Sidebar