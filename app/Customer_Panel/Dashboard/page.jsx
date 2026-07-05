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
    ArrowRight,

} from "lucide-react";
import Link from "next/link";
import amazon_logo from "../../../public/apple_logo.png"


const transactions = [
    {
        id: 1,
        logo: amazon_logo.src,
        company: "Amazon Marketplace",
        cardNumber: "**** 2344",
        holderName: "Matt Demon",
        date: "22 Dec, 2025",
        time: "6:45 AM",
        amount: "$12,400",
        status: "Declined",
        type: "expense",
    },
    {
        id: 2,
        logo: amazon_logo.src,
        company: "Netflix",
        cardNumber: "**** 5678",
        holderName: "John Smith",
        date: "20 Dec, 2025",
        time: "8:30 PM",
        amount: "$499",
        status: "Completed",
        type: "income",
    },
    {
        id: 3,
        logo: amazon_logo.src,
        company: "Spotify",
        cardNumber: "**** 9012",
        holderName: "Alice Johnson",
        date: "18 Dec, 2025",
        time: "10:15 AM",
        amount: "$19",
        status: "Pending",
        type: "expense",
    },

    {
        id: 4,
        logo: amazon_logo.src,
        company: "Spotify",
        cardNumber: "**** 9012",
        holderName: "Alice Johnson",
        date: "18 Dec, 2025",
        time: "10:15 AM",
        amount: "$19",
        status: "Pending",
        type: "expense",
    },


];




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


            <main className="flex max-[800px] max-[800px]:flex-col gap-2 mr-2 max-[500px]:mx-auto mb-4">
                <div className="left flex mt-2 flex-col flex-1 gap-2 ">
                    <div className="quick_action justify-center max-[800px]:justify-start max-[490px]:justify-center max-[800px]:pl-12 max-[490px]:pl-5 max-[800px]:py-6 flex-1 gap-8 flex items-center bg-white rounded-[10px]">
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

                    <div className="credit_card flex-2  bg-white rounded-[10px] justify-between px-9 max-[500px]:px-4 py-8">
                        <div className="flex justify-between max-[800px]:max-w-[370px] items-center w-full px-3">
                            <div>
                                <h2 className="font-inter font-semibold text-[18px] text-black">Activate Card</h2>
                            </div>
                            <p className="font-semibold text-[#A1A1A1] font-inter text-[16px]"><span className="text-[#90C02C]">01</span> of 03</p>
                        </div>

                        <Credit_Card_Slider />
                    </div>

                    <div className="list flex-2 flex items-center bg-white rounded-[10px] max-[490px]:pb-5">
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


                <div className="right flex flex-col flex-2 min-w-0 gap-2">
                    <div className="graph">
                        <Graph_Section />
                    </div>


                    <div className="transactions bg-white px-6 max-[500px]:px-2 py-8 rounded-[10px] max-[490px]:pb-5">
                        <div className="graph_head pb-6 px-4 flex max-[500px]:flex-col max-[500px]:items-start max-[500px]:gap-2 justify-between items-center">
                            <div>
                                <h2 className="font-inter font-semibold text-[18px] text-black">
                                    Transactions History
                                </h2>
                            </div>

                            <Link href="/Customer_Panel/Transactions">
                                <div className="flex view_all relative z-100 pr-4 mt-auto ml-auto items-center gap-3">
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


                        <div className="transaction ml-2">


                            <div className="max-[700px]:hidden block">
                                <div className="overflow-x-auto">
                                    <div className="min-w-[900px]">
                                        {transactions.map((transaction) => (
                                            <div
                                                key={transaction.id}
                                                className={`${transaction.id % 2 === 0 ? "bg-white" : "bg-[#F7F7F7]"} flex   items-center w-full  rounded-[10px] px-4  py-2`}
                                            >
                                                <div className="flex-1  w-full flex gap-3  items-center">
                                                    <img src={transaction.logo} alt={transaction.company} />
                                                    <h1 className="font-lato font-semibold text-[15px] text-[#223933]">
                                                        {transaction.company}
                                                    </h1>
                                                </div>

                                                <h1 className="flex-1  w-full font-inter text-[15px] font-medium text-[#6E8D37]">
                                                    {transaction.cardNumber}
                                                </h1>

                                                <h1 className="flex-1  w-full font-inter font-medium text-[15px] text-[#223933]">
                                                    {transaction.holderName}
                                                </h1>

                                                <p className="flex-1  w-full text-[15px] text-[#697E79] font-normal font-inter">
                                                    {transaction.date} {transaction.time}
                                                </p>

                                                <div className="flex flex-1  w-full items-center gap-2">
                                                    <div
                                                        className={
                                                            transaction.type === "expense"
                                                                ? "text-[#FF6B6B]"
                                                                : "text-[#6E8D37]"
                                                        }
                                                    >
                                                        {transaction.type === "expense" ? "+" : "-"}
                                                    </div>

                                                    <div
                                                        className={`font-inter flex flex-col justify-center ${transaction.type === "expense"
                                                            ? "text-[#FF6B6B]"
                                                            : "text-[#6E8D37]"
                                                            }`}
                                                    >
                                                        <p className="font-bold text-[15px]">{transaction.amount}</p>
                                                        <p className="font-normal text-[13px]">{transaction.status}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>




                            <div className="max-[700px]:block hidden">
                                {transactions.map((transaction) => (
                                    <div
                                        key={transaction.id}
                                        className={`${transaction.id % 2 === 0 ? "bg-white" : "bg-[#F7F7F7]"} flex  flex-col gap-4 w-full  rounded-[10px] px-6 py-4 py-2`}
                                    >
                                        <div className="flex justify-between items-center w-full">
                                            <div className=" flex gap-3 items-center">
                                                <img src={transaction.logo} alt={transaction.company} />
                                                <h1 className="font-lato font-semibold text-[15px] text-[#223933]">
                                                    {transaction.company}
                                                </h1>
                                            </div>

                                            <h1 className=" font-inter text-[15px] font-medium text-[#6E8D37]">
                                                {transaction.cardNumber}
                                            </h1>
                                        </div>

                                        <div className="flex justify-between">
                                            <div className="flex flex-col">
                                                <h1 className="flex-1  w-full font-inter font-medium text-[15px] text-[#223933]">
                                                    {transaction.holderName}
                                                </h1>

                                                <p className="flex-1 text-[15px] text-[#697E79] font-normal font-inter">
                                                    {transaction.date} {transaction.time}
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <div
                                                    className={
                                                        transaction.type === "expense"
                                                            ? "text-[#FF6B6B]"
                                                            : "text-[#6E8D37]"
                                                    }
                                                >
                                                    {transaction.type === "expense" ? "+" : "-"}
                                                </div>

                                                <div
                                                    className={`font-inter flex flex-col justify-center ${transaction.type === "expense"
                                                        ? "text-[#FF6B6B]"
                                                        : "text-[#6E8D37]"
                                                        }`}
                                                >
                                                    <p className="font-bold text-[15px]">{transaction.amount}</p>
                                                    <p className="font-normal text-[13px]">{transaction.status}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}