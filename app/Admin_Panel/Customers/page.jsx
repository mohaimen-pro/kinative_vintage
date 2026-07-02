"use client"

import Filter_section from "./filter"
import confirmation_icon_circle from "../../../public/check_circle.png"
import user_circle_yellow from "@/public/user-circle-yellow.png"
import search_icon from "@/public/search_icon.png"
import cardImage from "../../../public/credit_card_image_1.png"


//customers page card

import error_icon from "@/public/error_outline.png"
import card_hover_bg from "@/public/card_hover_bg.png"
import Image from "next/image";
import right_arrow_icon_green from "@/public/right_arrow_green_cards.png";
import { useState } from "react"
import {
    DollarSign,
    Users,
    CreditCard,
    CircleAlert,
    CircleCheck,
    Ban,
    Plus
} from "lucide-react";




export default function Customers() {

    const [active_button_filter_index, set_active_button_index] = useState(0)

    const icons = {
        DollarSign,
        Users,
        CreditCard,
        CircleAlert,
        CircleCheck,
        Ban
    };

    const cards_info = [
        {
            id: 1,
            card_image_icon: "Users",
            card_label: "Total Customers",
            card_info_number: 121,
            show_view_all: false,
        },

        {
            id: 2,
            card_image_icon: "CircleCheck",
            card_label: "Active Customers",
            card_info_number: 42,
            show_view_all: false,

        },


        {
            id: 3,
            card_image_icon: "Users",
            card_label: "Pending Customers",
            card_info_number: "$12,400",
            show_view_all: false,

        },


        {
            id: 4,
            card_image_icon: "Ban",
            card_label: "Suspended",
            card_info_number: 20,
            show_view_all: false,

        }
    ]

    //this object will come from database
    const table_info = [
        {
            id: 1,
            customer_short_name: "MD",
            customer_name: "Paul Anderson",
            date_of_birth: "20th June, 1995",
            email: "paul@gmail.com",
            mobile_number: "+61412345678",
            type: "Individual",
            status: "Active",
        },
        {
            id: 2,
            customer_short_name: "MD",
            customer_name: "Paul Anderson",
            date_of_birth: "20th June, 1995",
            email: "paul@gmail.com",
            mobile_number: "+61412345678",
            type: "Individual",
            status: "Pending",
        },
        {
            id: 3,
            customer_short_name: "MD",
            customer_name: "Paul Anderson",
            date_of_birth: "20th June, 1995",
            email: "paul@gmail.com",
            mobile_number: "+61412345678",
            type: "Individual",
            status: "Active",
        },
        {
            id: 4,
            customer_short_name: "MD",
            customer_name: "Paul Anderson",
            date_of_birth: "20th June, 1995",
            email: "paul@gmail.com",
            mobile_number: "+61412345678",
            type: "Individual",
            status: "Suspended",
        },
        {
            id: 5,
            customer_short_name: "MD",
            customer_name: "Paul Anderson",
            date_of_birth: "20th June, 1995",
            email: "paul@gmail.com",
            mobile_number: "+61412345678",
            type: "Individual",
            status: "Active",
        },
    ];



    return (
        <>
            <div className="cards mt-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2">
                {
                    cards_info.map((card_info, index) => {
                        const Icon = icons[card_info.card_image_icon];
                        return (
                            <div key={card_info.id} className=" card-one group relative flex flex-col pl-4 pt-4 bg-white rounded-[10px] overflow-hidden">

                                <div className={`${card_info.show_view_all ? "pb-15" : "pb-8"} card_info relative z-100 flex gap-4 items-center `}>
                                    <div className="user_profile bg-[#FFF5D9] group-hover:bg-[#EBF9EB] rounded-full w-14 h-14 flex justify-center items-center">
                                        {/* <Image src={card_info.card_image} alt="" /> */}
                                        <Icon alt="" className={`group-hover:text-[#628343] text-[#FFBB38] w-[28px] h-[28px]`} />
                                    </div>

                                    <div className="total_customer_info">
                                        <p className="font-inter font-bold text-[26px] group-hover:text-white text-[#232323]">{card_info.card_info_number}</p>
                                        <p className="font-normal text-[15px] group-hover:text-white text-[#5B8B7E]">{card_info.card_label}</p>
                                    </div>
                                </div>

                                {card_info.show_view_all ? (
                                    <div className={`flex view_all relative z-100 pr-4 pb-3 mt-auto ml-auto  items-center gap-3`}>
                                        <p className="font-normal font-lato text-[13px] group-hover:text-white text-[#89BE1E]">View All</p>
                                        <div className="right_arrow w-9.75 h-9.75 bg-[#EBF9EB] rounded-full flex justify-center items-center">
                                            <Image src={right_arrow_icon_green} alt="" />
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}



                                {/* Hover background */}
                                <div className="absolute z-10 inset-0 rounded-xl bg-gradient-to-br from-[#223933] to-[#9ec74b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            </div>
                        )
                    })
                }




            </div>


            <Filter_section set_active_button={set_active_button_index} customerDetailsObject={table_info} />
        </>
    )
}