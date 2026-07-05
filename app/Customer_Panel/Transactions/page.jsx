import Transaction_List from "./Transaction_list"
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


export default function Transactions() {


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
            show_view_all: false,
        },

        {
            id: 2,
            card_image_icon: "DollarSign",
            background: "bg-[#FFDCD9]",
            icon_color: "text-[#FF8378]",
            card_label: "Total Expenses",
            card_info_number: "$23,589",
            show_view_all: false,

        },

    ]


    return (
        <main className="flex gap-4 mt-4 max-[1000px]:flex-col max-[600px]:mx-3">
            <div className="transactions flex-2 bg-white rounded-[10px] max-[800px]:pl-6 max-[600px]:pr-0 pl-10 pt-6 pr-2">
                <Transaction_List />
            </div>

            <div className="flex-1 flex flex-col gap-4">
                <div className="cards flex-1 rounded-[10px] ">
                    <div className=" rounded-[10px] flex-col flex">
                        {
                            cards_info.map((card_info, index) => {
                                const Icon = icons[card_info.card_image_icon];
                                return (
                                    <div
                                        key={card_info.id}
                                        className="card-one group relative flex-1 mb-4 flex justify-between items-start pl-4 pt-4 bg-white rounded-[10px] overflow-hidden"
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
                </div>

                
                <div className="top_spending_cards flex-2 bg-white rounded-[10px] pl-12 pr-10 pt-6">
                    <p className="font-inter text-[#223933] text-[18px] font-semibold pt-1">Top Spending Card</p>

                    <div className="flex flex-col pt-6 gap-4">
                        <div className="flex justify-between border-b border-[#f2f2f2] pb-3 items-center">
                            <p className="text-[15px] font-medium font-inter text-[#6E8D37]">**** 2344</p>
                            <p className="font-inter text-[#223933] text-[15px] font-bold">$12,400</p>
                        </div>

                        <div className="flex justify-between border-b border-[#f2f2f2] pb-3 items-center">
                            <p className="text-[15px] font-medium font-inter text-[#6E8D37]">**** 2344</p>
                            <p className="font-inter text-[#223933] text-[15px] font-bold">$12,400</p>
                        </div>

                        <div className="flex justify-between border-b border-[#f2f2f2] pb-3 items-center">
                            <p className="text-[15px] font-medium font-inter text-[#6E8D37]">**** 2344</p>
                            <p className="font-inter text-[#223933] text-[15px] font-bold">$12,400</p>
                        </div>


                        <div className="flex justify-between border-b border-[#f2f2f2] pb-3 items-center">
                            <p className="text-[15px] font-medium font-inter text-[#6E8D37]">**** 2344</p>
                            <p className="font-inter text-[#223933] text-[15px] font-bold">$12,400</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}