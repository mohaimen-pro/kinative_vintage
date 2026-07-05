
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
import Graph_Section from "./graph_section";
import Link from "next/link";
import amazon_logo from "../../../../public/apple_logo.png"



export default function Card_Details() {
    const spent = 2000;
    const total = 10000;
    const progress = (spent / total) * 100;

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




    return (
        <main className="mt-5 ml-2 flex max-[860px]:flex-col max-[500px]:gap-4 max-[500px]:mt-0 max-[500px]:ml-2 max-[500px]:mr-0 gap-4 mb-2 mr-4">
            <div className="left bg-white rounded-[10px]  flex-1">
                <div className="bg-white">
                    <div className="flex-1 flex flex-col justify-between bg-white rounded-[10px] max-[390px]:px-2 px-6  py-8">
                        <div className="flex justify-between  pl-2v max-[390px]:mx-2">
                            <h1 className="font-semibold font-inter text-[#223933] text-[18px]">Card Details</h1>
                            <span className="inline-flex items-center gap-2 rounded-[100px] font-inter px-4 py-1 text-[15px] font-normal bg-[#FFF5D9] text-[#223933]">
                                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBB38]"></span>Pending</span>
                        </div>

                        <div

                            className="credit_card pt-6 flex justify-start">
                            <div
                                style={{
                                    backgroundImage: `url(/credit_card_bg.png)`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',

                                }}
                                className=" w-[358px] h-[226px] rounded-[9px]  p-9 flex flex-col justify-between">

                                {/* Card Number */}
                                <h2 className="text-[22px] mt-auto mb-6 font-inter font-normal text-white">
                                    5675 6789 1234 9807
                                </h2>

                                {/* Bottom */}
                                <div className="flex justify-between items-end">
                                    <div className="flex gap-10">
                                        <div>
                                            <p className="text-[15px] font-light font-inter text-white">Valid Through</p>
                                            <p className="text-[22px] font-inter text-[21px]  tracking-[2px] text-[#E0BB8B]">****</p>
                                        </div>

                                        <div>
                                            <p className="text-[15px] font-light font-inter text-white">CVV</p>
                                            <p className="text-[22px] font-inter text-[21px]  tracking-[2px] text-[#E0BB8B]">***</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="credit_card_owner flex justify-between pl-2 mt-4">
                            <div>
                                <p className="text-[15px] font-normal font-lato text-[#7E7E7E]">CARD HOLDER</p>
                                <h1 className="font-lato text-[20px] text-[#223933] font-extrabold">Paul Anderson</h1>
                            </div>
                            <div>
                                <p className="text-[15px] font-normal font-lato text-[#7E7E7E]">ACCOUNT NUMBER</p>
                                <h1 className="font-lato text-[20px] text-[#223933] font-extrabold">A670009</h1>

                            </div>
                        </div>


                    </div>
                </div>
                <div className="quick_action justify-center  px-8 max-[390px]:px-2 py-6 m-6 max-[390px]:m-2 max-[390px]:mb-6  flex-1 gap-6 flex items-center bg-white rounded-[10px] border-1 border-[#EBF9EB]">
                    <div className=" flex flex-col gap-2 items-center ">
                        <div className="w-12.5 h-12.5 bg-[#EBF9EB] flex justify-center items-center rounded-full ">
                            <CircleDollarSign color="#9DCF38" />
                        </div>
                        <p className="text-[#223933] font-lato font-semibold text-[15px]">Show Details</p>
                    </div>

                    <div className="flex flex-col gap-2 items-center ">
                        <div className="w-12.5 h-12.5 bg-[#D9F1FF] flex justify-center items-center rounded-full ">
                            <Snowflake color="#3ea7db" />
                        </div>
                        <p className="text-[#223933] font-lato font-semibold text-[15px]">Freeze Card</p>
                    </div>

                    <div className="flex flex-col gap-2 items-center">
                        <div className="w-12.5 h-12.5 bg-[#FFDCD9] flex justify-center items-center rounded-full ">
                            <Ban color="#F6857B" />
                        </div>
                        <p className="text-[#223933] font-lato font-semibold text-[15px]">Lock Card</p>
                    </div>
                </div>

                <div className="w-[340px] rounded-[14px] m-6 max-[860px]:mx-auto max-[390px]:m-1 bg-gradient-to-br from-[#EEF7EE] to-[#E7F3E5] px-6 py-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                        <h2 className="font-inter text-[18px] font-semibold leading-none text-[#223933]">
                            Daily Limit
                        </h2>

                        <button className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-white/40">
                            <Pencil
                                size={20}
                                strokeWidth={2}
                                className="text-[#9CCB41]"
                            />
                        </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-7">
                        <div className="h-[10px] w-full overflow-hidden rounded-full bg-white">
                            <div
                                className="h-full rounded-full"
                                style={{
                                    width: `${progress}%`,
                                    background:
                                        "linear-gradient(90deg, #223933 0%, #BAE959 100%)",
                                }}
                            />
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-5 flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <span className="font-lato text-[15px] font-semibold text-[#223933]">
                                ${spent}
                            </span>

                            <span className="font-lato text-[15px] font-medium text-[#8AB14D]">
                                spent out of
                            </span>
                        </div>

                        <span className="font-lato text-[15px] font-bold text-[#223933]">
                            ${total}
                        </span>
                    </div>
                </div>

                <div className="flex gap-3 mt-25 m-6">
                    <button className="flex-1 bg-[#BAE959] rounded-full text-[14px] font-medium font-inter text-[#27463E] py-2">
                        Change Card Pin
                    </button>

                    <button className="flex-1 bg-black rounded-full flex items-start justify-center gap-1 text-[14px] font-medium font-inter text-white py-2">
                        <Plus color="#BAE959" />
                        Request Fund
                    </button>
                </div>
            </div>

            <div className="right flex flex-col gap-2 min-w-0 flex-3">
                <div className="flex-[0.3] rounded-[10px] max-[1450px]:flex-col flex gap-4 mb-2">
                    {
                        cards_info.map((card_info, index) => {
                            const Icon = icons[card_info.card_image_icon];
                            return (
                                <div
                                    key={card_info.id}
                                    className="card-one group relative flex-1  h-full flex justify-between items-start pl-4 pt-4 bg-white rounded-[10px] overflow-hidden"
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
                                        <div className={`flex view_all pr-4 pb-3  items-center gap-1 pr-4 relative z-100`}>
                                            <p className="font-mediumfont-inter text-[13px] group-hover:text-white text-[#8B8B8B]">This Week</p>
                                            <ArrowDown className="group-hover:text-[#9ec74b]" />
                                        </div>
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

                <div className="flex-[2] bg-white rounded-[10px]">
                    <div className="transactions  bg-white px-6 py-8 rounded-[10px]">
                        <div className="graph_head pb-6 px-4 flex max-[500px]:flex-col max-[500px]:gap-3 max-[500px]:items-start justify-between items-center">
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


                        <div className="transaction ml-2 max-[500px]:ml-0">


                            <div className="max-[700px]:hidden block">
                                <div className="overflow-x-auto">
                                    <div className="min-w-[900px]">
                                        {transactions.map((transaction) => (
                                            <div
                                                key={transaction.id}
                                                className={`${transaction.id % 2 === 0 ? "bg-white" : "bg-[#F7F7F7]"} flex  items-center w-full  rounded-[10px] px-4  py-2`}
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

            </div>

        </main>
    )
}