"use client"

import user_circle from "@/public/user-circle.png"
import down_arrow from "@/public/down_arrow.png"
import user_profile_picture from "@/public/user_profile.png"
import header_notification_icon from "@/public/header_notification_icon.png";
import { useState } from "react"
import { UsersRound } from 'lucide-react';
import eye_icon from "@/public/eye_icon.png"
import return_icon from "@/public/return_icon.png"
import { Inter } from "next/font/google";
import Image from "next/image"
import menu_icon from "../../public/menu.png"
import "../globals.css"
import vantage_logo_for_header from "@/public/vantage_logo_small_screen.png"
import dark_mode_button_black from "@/public//wb_sunny.png"


const inter = Inter({
    subsets: ["latin"],
});

function Header(props) {
    const [is_view_as_dropdown_open, set_dropdown] = useState(false)
    const isAdminView = props.isAdminView;

    function Handle_View_As_Dropdown() {
        set_dropdown(is_view_as_dropdown_open ? false : true)
    }


    function Handle_View_As_Role() {
        props.set_admin_view(props.isAdminView ? false : true)
    }

    function Handle_sidebar() {
        props.setIsOpen(true)
    }







    return (
        <>


            <div className={`${isAdminView ? "hidden" : "notification_view_as bg-[#FFEAAF] rounded-[10px] px-2 py-3 flex justify-between items-center mb-3"} `}>
                <div className="flex items-center gap-2">
                    <div className="eye_icon w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#FFF5D9]">
                        <Image src={eye_icon} alt="" />
                    </div>
                    <div>
                        <p className="font-inter font-normal text-[17px] text-[#223933]">You are watching this panel as <span className="text-[17px] font-bold text-black">Paul Anderson</span></p>
                    </div>
                </div>

                <div onClick={() => props.set_admin_view(true)} className="return_button bg-[#223933] rounded-[100px] px-4 py-3 flex items-center gap-2 cursor-pointer">
                    <Image src={return_icon} alt="" />
                    <button className="font-medium text-[14px] font-inter text-white cursor-pointer">Return to Admin</button>
                </div>

            </div>

            <header className="bg-white sticky top-0 z-200 shadow-md rounded-[10px] w-full pl-9 pr-2 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2 ">


                    <div onClick={Handle_sidebar} className="max-[1200px]:block cursor-pointer hidden">
                        <img className="" src={menu_icon.src} alt="" />
                    </div>

                    <h1 className="text-[#223933] max-[805px]:hidden font-inter font-semibold text-[20px]">{
                        props.pageName === "Fund_Request"
                            ? "Fund Request"
                            : props.pageName === "CardRequest/Card_Details"
                                ? "Card Details"
                                : props.pageName
                    }</h1>
                </div>

                <div className="vantage_logo_small_screen hidden m max-[805px]:block">
                    <Image src={vantage_logo_for_header} alt="" />
                </div>

                <div className="user_info flex gap-2 items-center">

                    <div className="dark_modeBTN pr-2 cursor-pointer">
                        <Image src={dark_mode_button_black} alt="" />
                    </div>
                    <div onClick={Handle_View_As_Dropdown} className="relative max-[805px]:hidden view_as bg-[#EBF9EB] cursor-pointer rounded-[40px] w-78.5 flex justify-between items-center px-4 py-3">
                        <div onClick={() => props.set_admin_view(true)} className={` flex gap-2 items-center`}>
                            <Image src={user_circle} alt="" />

                            <p className="font-inter text-[14px] font-normal text-[#5F887D]">{`${isAdminView ? "View As Admin" : "View As Customer"}`}</p>
                        </div>
                        <div>
                            <img src={down_arrow} alt="" />
                        </div>
                        <div onClick={Handle_View_As_Role} className={`${is_view_as_dropdown_open ? "flex" : "hidden"} absolute z-100 -bottom-13 left-0 right-0  bg-[#EBF9EB]  items-center gap-2 cursor-pointer rounded-[40px] w-78.5 px-4 py-3`}>
                            <div>
                                <UsersRound color="green" />
                            </div>
                            <p className="font-inter text-[14px] font-normal text-[#5F887D]">{`${isAdminView ? "View As Customer" : "View As Admin"}`}</p>
                        </div>
                    </div>



                    <div className="flex items-center gap-2 pr-10">


                        <div>
                            <Image src={user_profile_picture} alt="" />
                        </div>
                        <p className="font-inter font-medium text-[14px] max-[805px]:hidden text-[#223933]">Admin Profile</p>
                    </div>

                    <div className="notification_icon pr-2 max-[805px]:hidden">
                        <Image src={header_notification_icon} alt="Hi" />
                    </div>
                </div>
            </header>



        </>
    )
}


export default Header

