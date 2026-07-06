"use client"

import {
    DollarSign,
    Users,
    CreditCard,
    CircleAlert,
    CircleCheck,
    Ban,
    WalletCards,
    CircleDollarSign,
    Snowflake,
    Pencil,
    Plus,
    ArrowDown,
    ArrowRight
} from "lucide-react";
import Dropdown from "./dropdown_section";
import Graph_Section from "./graph_section";
import { useState } from "react";




export default function Graph_Cards_Section() {

   const graph_filter_array_ofObjects = [
        { id: 1, filter_name: "This Week" },
        { id: 2, filter_name: "This Month" },
        { id: 3, filter_name: "This Year" },
    ];

    const [selected_filter, set_selected_filter] = useState(graph_filter_array_ofObjects[0]);


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
            card_image_icon: "DollarSign",
            background: "bg-[#27463E]",
            icon_color: "text-[#B7E658]",
            card_label: "Total Balance",
            card_info_number: "$48,000",
            show_view_all: true,
        },

        {
            id: 2,
            card_image_icon: "DollarSign",
            background: "bg-[#FFDCD9]",
            icon_color: "text-[#FF8378]",
            card_label: "Total Expenses",
            card_info_number: "$23,589",
            show_view_all: true,

        },

    ]

    return (
        <>
            <div className="flex-[0.3] rounded-[10px] max-[1450px]:flex-col flex gap-4 mb-2">
                {
                    cards_info.map((card_info, index) => {
                        const Icon = icons[card_info.card_image_icon];
                        return (
                            <div
                                key={card_info.id}
                                className="card-one group relative flex-1  h-full flex justify-between items-start pl-4 pt-4 bg-white rounded-[10px] overflow-visible"
                            >

                                <div className={`${card_info.show_view_all ? "pb-15" : "pb-8"} card_info relative z-100 flex gap-4 items-center `}>
                                    <div className={`${card_info.background} group-hover:bg-[#EBF9EB] user_profile  rounded-full w-14 h-14 flex justify-center items-center`}>
                                        <Icon alt="" className={`group-hover:text-[#628343] ${card_info.icon_color}  w-[28px] h-[28px]`} />
                                    </div>

                                    <div className="total_customer_info">
                                        <p className={`font-inter font-bold text-[26px] max-[1450px]:text-[24px] group-hover:text-white text-[#232323]`}>{card_info.card_info_number}</p>
                                        <p className={`font-normal text-[15px] group-hover:text-white text-[#5B8B7E]`}>{card_info.card_label}</p>
                                    </div>
                                </div>

                                {card_info.show_view_all ? (

                                    <Dropdown isGraph={false} set_selected_filter={set_selected_filter} selected_filter={selected_filter} />

                                ) : (
                                    ""
                                )}



                                {/* Hover background */}
                                <div className={` absolute z-10 inset-0 rounded-xl bg-gradient-to-br from-[#223933] to-[#9ec74b] opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                            </div>
                        )
                    })
                }
            </div>

            <div className="flex-[2] bg-white rounded-[10px] mb-2">
                <Graph_Section />
            </div>
        </>
    )
}