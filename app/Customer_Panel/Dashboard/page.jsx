import error_icon from "@/public/error_outline.png"
import card_hover_bg from "@/public/card_hover_bg.png"
import Cards from "../../Templates/Cards"
import Graph_Section from "./graph_section"
import Image from "next/image";
import Credit_Card_Slider from "./credit_card_slider"
import right_arrow_slider from "../../../public/right_arrow_slider.png"
import left_arrow_slider from "../../../public/left_arrow_slider.png"
import right_arrow_icon_green from "../../../public/right_arrow_icon.png"

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
    ArrowRight
} from "lucide-react";
import Link from "next/link";




export default function Dashboard() {

    const cards_info = [
        {
            id: 1,
            card_image_icon: "WalletCards",
            card_icon_bg: "bg-[#EBF9EB]",
            card_icon_color: "text-[#93BE52]",
            card_label: "Active Cards",
            card_info_number: "05",
            show_view_all: false,
        },

        {
            id: 2,
            card_image_icon: "DollarSign",
            card_icon_bg: "bg-[#D9F1FF]",
            card_icon_color: "text-[#67C0F4]",
            card_label: "Total Balance",
            card_info_number: "$23,000",
            show_view_all: false,

        },


        {
            id: 3,
            card_image_icon: "DollarSign",
            card_icon_bg: "bg-[#FFDCD9]",
            card_icon_color: "text-[#E38178]",
            card_label: "Pending Approval",
            card_info_number: "02",
            show_view_all: false,

        },


        {
            id: 4,
            card_image_icon: "WalletCards",
            card_label: "Inactive Card",
            card_icon_bg: "bg-[#FFF5D9]",
            card_icon_color: "text-[#FFBB38]",
            card_info_number: "02",
            show_view_all: false,

        }
    ]

   


    return (
        <>
            <Cards cards_info={cards_info} />


            <main className="flex  gap-2 mr-2 mb-4">
                <div className="left flex mt-2 flex-col flex-1 gap-2">
                    <div className="quick_action justify-center flex-1 gap-8 flex items-center bg-white rounded-[10px]">
                        <div className=" flex flex-col gap-2 items-center ">
                            <div className="w-12.5 h-12.5 bg-[#EBF9EB] flex justify-center items-center rounded-full ">
                                <CircleDollarSign color="#9DCF38" />
                            </div>
                            <p className="text-[#223933] font-lato font-semibold text-[15px]">Fund Request</p>
                        </div>

                        <div className="flex flex-col gap-2 items-center ">
                            <div className="w-12.5 h-12.5 bg-[#D9F1FF] flex justify-center items-center rounded-full ">
                                <Snowflake color="#3ea7db" />
                            </div>
                            <p className="text-[#223933] font-lato font-semibold text-[15px]">Fund Request</p>
                        </div>

                        <div className="flex flex-col gap-2 items-center">
                            <div className="w-12.5 h-12.5 bg-[#FFDCD9] flex justify-center items-center rounded-full ">
                                <Ban color="#F6857B" />
                            </div>
                            <p className="text-[#223933] font-lato font-semibold text-[15px]">Fund Request</p>
                        </div>
                    </div>

                    <div className="credit_card flex-2  bg-white rounded-[10px] justify-between px-9 py-8">
                        <div className="flex justify-between items-center w-full px-3">
                            <div>
                                <h2 className="font-inter font-semibold text-[18px] text-black">Activate Card</h2>
                            </div>
                            <p className="font-semibold text-[#A1A1A1] font-inter text-[16px]"><span className="text-[#90C02C]">01</span> of 03</p>
                        </div>

                        <Credit_Card_Slider />
                    </div>

                    <div className="list flex-2 flex items-center bg-white rounded-[10px]">
                        <div className="bg-white rounded-[10px] flex-1 max-[1050px]:flex-2 pl-8 pt-3">
                            <div className="head flex justify-between items-center ">
                                <div>
                                    <h2 className="font-inter font-semibold text-[18px] text-black">Alerts</h2>
                                </div>

                                <div className="view_all pr-8 flex items-center pt-3 gap-3">
                                    <p className="font-normal font-lato text-[13px] text-[#89BE1E]">View All</p>
                                    <div className="right_arrow w-9.75 h-9.75 bg-[#EBF9EB] rounded-full flex justify-center items-center">
                                        <Image src={right_arrow_icon_green} alt="" />
                                    </div>
                                </div>

                            </div>

                            <div className="notificaitons flex flex-col gap-2">
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="flex justify-center items-center w-[42px] h-[42px] rounded-full bg-[#FFF5D9]">
                                        <CircleAlert alt="" className="w-5.5 h-5.5 text-[#F6857B]" />
                                    </div>
                                    <p className="font-nomral font-inter text-[15px] text-[#697E79]">Card about to expire <span className="font-semibold font-inter text-[15px] text-black">Physical Card 4567</span></p>
                                </div>

                                <div className="flex items-center gap-2 mt-2">
                                    <div className="flex justify-center items-center w-[42px] h-[42px] rounded-full bg-[#D9F1FF]">
                                        <Snowflake alt="" className="w-5.5 h-5.5 text-[#45a2da]" />
                                    </div>
                                    <p className="font-nomral font-inter text-[15px] text-[#697E79]">Card about to expire <span className="font-semibold font-inter text-[15px] text-black">Virtual Card</span></p>
                                </div>

                                <div className="flex items-center gap-2 mt-2">
                                    <div className="flex justify-center items-center w-[42px] h-[42px] rounded-full bg-[#FFD9D9]">
                                        <Ban alt="" className="w-5.5 h-5.5 text-[#F6857B]" />
                                    </div>
                                    <p className="font-nomral font-inter text-[15px] text-[#697E79]">Card about to expire <span className="font-semibold font-inter text-[15px] text-black">Virtual Card</span></p>
                                </div>

                                <div className="flex items-center gap-2 mt-2">
                                    <div className="flex justify-center items-center w-[42px] h-[42px] rounded-full bg-[#FFF5D9]">
                                        <CircleAlert alt="" className="w-5.5 h-5.5 text-[#F6857B]" />
                                    </div>
                                    <p className="font-nomral font-inter text-[15px] text-[#697E79]">Card about to expire <span className="font-semibold font-inter text-[15px] text-black">Virtual Card</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="right flex flex-col flex-2 gap-2">
                    <div className="graph">
                        <Graph_Section />
                    </div>


                    <div className="transactions bg-white px-6 py-8 rounded-[10px]">
                        <div className="graph_head pb-6 px-4 flex justify-between items-center">
                            <div>
                                <h2 className="font-inter font-semibold text-[18px] text-black">
                                    Transactions History
                                </h2>
                            </div>

                          <Link href="/Customer_Panel/Transactions">
                                <div className="flex view_all relative z-100 pr-4 pb-3 mt-auto ml-auto items-center gap-3">
                                    <p className="font-normal font-lato text-[13px] text-[#89BE1E] group-hover:text-white">
                                        View All
                                    </p>

                                    <div
                                        className="right_arrow w-9.75 h-9.75 bg-[#EBF9EB] rounded-full flex justify-center items-center"
                                    >
                                        <ArrowRight />
                                    </div>
                                </div>
                            </Link>
                        </div>


                        <div className="block transaction ml-2">

                            <div className="bg-[#F7F7F7] flex items-center w-full rounded-[10px] px-4 py-2">
                                <div className="flex-1 flex gap-3 items-center">
                                    <img
                                        src="/_next/static/media/apple_logo.2zjlautvm8g47.png"
                                        alt="Amazon Marketplace"
                                    />
                                    <h1 className="font-lato font-semibold text-[15px] text-[#223933]">
                                        Amazon Marketplace
                                    </h1>
                                </div>

                                <h1 className="flex-1 font-inter text-[15px] font-medium text-[#6E8D37]">
                                    **** 2344
                                </h1>
                                <p className="flex-1 text-[15px] text-[#697E79] font-normal font-inter">
                                    22 Dec, 2025 6:45 AM
                                </p>

                                <div className="flex flex-1 items-center gap-2">
                                    <div className="text-[#FF6B6B]">+</div>

                                    <div className="font-inter flex flex-col justify-center text-[#FF6B6B]">
                                        <p className="font-bold text-[15px]">$12,400</p>
                                        <p className="font-normal text-[13px]">Declined</p>
                                    </div>
                                </div>
                            </div>


                            <div className="bg-white flex items-center w-full rounded-[10px] px-4 py-2">
                                <div className="flex-1 flex gap-3 items-center">
                                    <img
                                        src="/_next/static/media/apple_logo.2zjlautvm8g47.png"
                                        alt="Netflix"
                                    />
                                    <h1 className="font-lato font-semibold text-[15px] text-[#223933]">
                                        Netflix
                                    </h1>
                                </div>

                                <h1 className="flex-1 font-inter text-[15px] font-medium text-[#6E8D37]">
                                    **** 5678
                                </h1>
                                <p className="flex-1 text-[15px] text-[#697E79] font-normal font-inter">
                                    20 Dec, 2025 8:30 PM
                                </p>

                                <div className="flex flex-1 items-center gap-2">
                                    <div className="text-[#6E8D37]">-</div>

                                    <div className="font-inter flex flex-col justify-center text-[#6E8D37]">
                                        <p className="font-bold text-[15px]">$499</p>
                                        <p className="font-normal text-[13px]">Completed</p>
                                    </div>
                                </div>
                            </div>


                            <div className="bg-[#F7F7F7] flex items-center w-full rounded-[10px] px-4 py-2">
                                <div className="flex-1 flex gap-3 items-center">
                                    <img
                                        src="/_next/static/media/apple_logo.2zjlautvm8g47.png"
                                        alt="Spotify"
                                    />
                                    <h1 className="font-lato font-semibold text-[15px] text-[#223933]">
                                        Spotify
                                    </h1>
                                </div>

                                <h1 className="flex-1 font-inter text-[15px] font-medium text-[#6E8D37]">
                                    **** 9012
                                </h1>

                                <p className="flex-1 text-[15px] text-[#697E79] font-normal font-inter">
                                    18 Dec, 2025 10:15 AM
                                </p>

                                <div className="flex flex-1 items-center gap-2">
                                    <div className="text-[#FF6B6B]">+</div>

                                    <div className="font-inter flex flex-col justify-center text-[#FF6B6B]">
                                        <p className="font-bold text-[15px]">$19</p>
                                        <p className="font-normal text-[13px]">Pending</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}