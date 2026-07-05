import Cards from "../../Templates/Cards";
import Graph_section from "./graph_pagination"

import down_arrow from "@/public/down_arrow.png"
import credit_card_section_bg from "@/public/credit_card_section_bg.png"
import bar_charts_icon from "@/public/bar_chart.png"
import format_list_bulleted from "@/public/format_list_bulleted.png"
import credit_card_image_one from "@/public/credit_card_image_1.png"
import left_arrow_slider from "@/public/left_arrow_slider.png"
import right_arrow_slider from "@/public/right_arrow_slider.png"
import user_circle_yellow from "@/public/user-circle-yellow.png"
import right_arrow_icon_green from "@/public/right_arrow_green_cards.png";
import error_icon from "@/public/error_outline.png"


import credit_card_wallet from "@/public/credit_card_walled.png"
import Image from "next/image";
import { Users } from "lucide-react";




export default function Dashboard() {
    //dynamic card
    const cards_info = [
        {
            id: 1,
            card_image_icon: "Users",
            card_icon_bg: "",
            card_icon_color: "",
            card_label: "Total Customers",
            card_info_number: 121,
            show_view_all: true,

        },

        {
            id: 2,
            card_image_icon: "CircleAlert",
            card_icon_bg: "",
            card_icon_color: "",
            card_label: "Pending Customers",
            card_info_number: 42,
            show_view_all: true,
        },


        {
            id: 3,
            card_image_icon: "DollarSign",
            card_icon_bg: "",
            card_icon_color: "",
            card_label: "Active Balance",
            card_info_number: "$12,400",
            show_view_all: true,
        },


        {
            id: 4,
            card_image_icon: "CreditCard",
            card_icon_bg: "",
            card_icon_color: "",
            card_label: "Total Card Activated",
            card_info_number: 200,
            show_view_all: true,
        }
    ]


    return (
        <main className="max-[700px]:mx-3 max-[700px]:mt-4">

            <Cards cards_info={cards_info} />
            <Graph_section />
            <div className="informations_section flex max-[890px]:flex-col max-[890px]:mx-2 max-[890px]:justify-center gap-2 mt-2 ">
                <div className="activity_log max-[700px]:overflow-x-auto bg-white rounded-[10px] max-[700px]:flex-0  flex-2 pl-7 pt-2">
                    <div className="max-[700px] min-w-120">
                        <div className="head flex justify-between items-center">
                            <div>
                                <h2 className="font-inter font-semibold text-[18px] text-black">Activity Log</h2>
                            </div>

                            <div className="view_all pr-8 flex items-center pt-3 gap-3">
                                <p className="font-normal font-lato text-[13px] text-[#89BE1E]">View All</p>
                                <div className="right_arrow w-9.75 h-9.75 bg-[#EBF9EB] rounded-full flex justify-center items-center">
                                    <Image src={right_arrow_icon_green} alt="" />
                                </div>
                            </div>

                        </div>
                        <div className="date">
                            <p className="font-normal text-[#697E79] font-inter text-[15px]">Today</p>
                        </div>


                        <div className="activities pr-8">
                            <div className="flex items-center justify-between py-4 border-b border-[#f0f0f0]">
                                <h1 className="font-medium font-inter text-[15px]">Super Admin</h1>
                                <p className="font-nomral font-inter text-[15px] text-[#697E79]">Approved Card of user <span className="font-semibold font-inter text-[15px] text-black">Matt Demon</span></p>
                                <p className="font-nomral font-inter text-[15px] text-[#697E79]">20 June, 2026</p>
                            </div>

                            <div className="flex items-center justify-between py-4 border-b border-[#f0f0f0]">
                                <h1 className="font-medium font-inter text-[15px]">Super Admin</h1>
                                <p className="font-nomral font-inter text-[15px] text-[#697E79]">Approved Card of user <span className="font-semibold font-inter text-[15px] text-black">Matt Demon</span></p>
                                <p className="font-nomral font-inter text-[15px] text-[#697E79]">20 June, 2026</p>
                            </div>

                            <div className="flex items-center justify-between py-4 border-b border-[#f0f0f0]">
                                <h1 className="font-medium font-inter text-[15px]">Super Admin</h1>
                                <p className="font-nomral font-inter text-[15px] text-[#697E79]">Approved Card of user <span className="font-semibold font-inter text-[15px] text-black">Matt Demon</span></p>
                                <p className="font-nomral font-inter text-[15px] text-[#697E79]">20 June, 2026</p>
                            </div>

                            <div className="flex items-center justify-between py-4 border-b border-[#f0f0f0]">
                                <h1 className="font-medium font-inter text-[15px]">Super Admin</h1>
                                <p className="font-nomral font-inter text-[15px] text-[#697E79]">Approved Card of user <span className="font-semibold font-inter text-[15px] text-black">Matt Demon</span></p>
                                <p className="font-nomral font-inter text-[15px] text-[#697E79]">20 June, 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-[10px] max-[700px]:overflow-x-auto max-[700px]:flex-0 flex-1 max-[1050px]:flex-2 pl-8 pt-3">
                    <div className="">
                        <div className="head flex justify-between items-center ">
                            <div>
                                <h2 className="font-inter font-semibold text-[18px] text-black">Notification</h2>
                            </div>

                            <div className="view_all pr-8 flex items-center pt-3 gap-3 max-[700px]:pr-12">
                                <p className="font-normal font-lato text-[13px] text-[#89BE1E]">View All</p>
                                <div className="right_arrow w-9.75 h-9.75 bg-[#EBF9EB] rounded-full flex justify-center items-center">
                                    <Image src={right_arrow_icon_green} alt="" />
                                </div>
                            </div>

                        </div>

                        <div className="notificaitons flex flex-col gap-2 ">
                            <div className="flex items-center gap-2 mt-2">
                                <div className="flex justify-center items-center w-[42px] h-[42px] rounded-full bg-[#FFF5D9]">
                                    <Image src={credit_card_wallet} alt="" />
                                </div>
                                <p className="font-nomral font-inter text-[15px] text-[#697E79]"><span className="font-semibold font-inter text-[15px] text-black">Tareq</span> requested for a new <span className="font-semibold font-inter text-[15px] text-black">Virtual Card</span></p>
                            </div>

                            <div className="flex items-center gap-2 mt-2">
                                <div className="flex justify-center items-center w-[42px] h-[42px] rounded-full bg-[#FFF5D9]">
                                    <Image src={credit_card_wallet} alt="" />
                                </div>
                                <p className="font-nomral font-inter text-[15px] text-[#697E79]"><span className="font-semibold font-inter text-[15px] text-black">Tareq</span> requested for a new <span className="font-semibold font-inter text-[15px] text-black">Virtual Card</span></p>
                            </div>

                            <div className="flex items-center gap-2 mt-2">
                                <div className="flex justify-center items-center w-[42px] h-[42px] rounded-full bg-[#FFF5D9]">
                                    <Image src={credit_card_wallet} alt="" />
                                </div>
                                <p className="font-nomral font-inter text-[15px] text-[#697E79]"><span className="font-semibold font-inter text-[15px] text-black">Tareq</span> requested for a new <span className="font-semibold font-inter text-[15px] text-black">Virtual Card</span></p>
                            </div>

                            <div className="flex items-center gap-2 mt-2">
                                <div className="flex justify-center items-center w-[42px] h-[42px] rounded-full bg-[#FFF5D9]">
                                    <Image src={credit_card_wallet} alt="" />
                                </div>
                                <p className="font-nomral font-inter text-[15px] text-[#697E79]"><span className="font-semibold font-inter text-[15px] text-black">Tareq</span> requested for a new <span className="font-semibold font-inter text-[15px] text-black">Virtual Card</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}