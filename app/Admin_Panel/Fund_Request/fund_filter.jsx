"use client"
import search_icon from "@/public/search_icon.png"
import { Plus } from "lucide-react"
import cardImage from "../../../public/credit_card_image_1.png"
import { useMemo, useState } from "react"
import customer_details_icon from "../../../public/customer_details_icon.png"
import Fund_Request_list from "./fund_request_list"
import Image from "next/image"
import down_arrow from "../../../public/down_arrow.png"
import attach_money from "../../../public/attach_money.png"


//date picker
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";;





export default function Fund_Filter({ fund_requests }) {




    const filter_buttons = [
        {
            id: 1,
            filter_type: "All"
        },

        {
            id: 2,
            filter_type: "Active"
        },

        {
            id: 3,
            filter_type: "Pending"
        },

        {
            id: 4,
            filter_type: "Suspended"
        }
    ];


    //date range
    const [showPicker, setShowPicker] = useState(false);


    const [range, setRange] = useState([
        {
            startDate: new Date(2026, 5, 21),
            endDate: new Date(2026, 6, 21),
            key: "selection",
        },
    ]);
    const startDate = new Date(range[0].startDate)
    const endDate = new Date(range[0].endDate)

















    const [active_button_index_filter, set_active_button_index] = useState(0);
    const [activeFilter, set_active_button] = useState("All");
    const [cusotmer_search, set_customer_seach] = useState("");


    function Handle_Filter_button(button_name, index) {
        set_active_button_index(index);
        set_active_button(button_name);

    }

    const filtered_fund_requests = useMemo(() => {
        return fund_requests.filter((fund_filter) => {
            const matchesStatus =
                activeFilter === "All" ||
                fund_filter.status === activeFilter;

            // Convert "20th June, 1995" -> "20 June, 1995"
            const formattedDate = fund_filter.date_of_birth.replace(
                /(\d+)(st|nd|rd|th)/,
                "$1"
            );

            const customerDate = new Date(formattedDate);

            let matchesDate = true;

            if (startDate && endDate) {
                matchesDate =
                    customerDate >= startDate &&
                    customerDate <= endDate;
            }

            return matchesStatus && matchesDate;
        });
    }, [fund_requests, activeFilter, startDate, endDate]);








    return (



        <>
            <div className=" pl-12 pt-8 pr-6 bg-white">
                <div className="date_filter flex items-center justify-between pb-10">
                    <h1 className="font-inter font-semibold text-[#223933] text-[18px]">Fund Request</h1>
                    <div className="dropdown min-w-60 relative flex justify-center rounded-[100px] bg-[#F7F7F7] items-center gap-1 px-4 py-3">



                        {/* Button */}
                        <button
                            onClick={() => {
                                setShowPicker(!showPicker);

                            }
                            }
                            className="flex items-center gap-3 rounded-full bg-[#F7F7F7] text-[13px] text-[#8B8B8B] font-medium"
                        >
                            <span >
                                {format(range[0].startDate, "MMM dd, yyyy")} -{" "}
                                {format(range[0].endDate, "MMM dd, yyyy")}
                            </span>

                            <svg
                                className={`w-4 h-4 transition text-[#A1CC53] ${showPicker ? "rotate-180" : ""
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {/* Calendar */}
                        {showPicker && (
                            <div className="absolute -left-25 top-8 mt-3 z-50">
                                <DateRange
                                    editableDateInputs
                                    moveRangeOnFirstSelection={false}
                                    ranges={range}
                                    onChange={(item) => setRange([item.selection])}
                                />
                            </div>
                        )}

                    </div>
                </div>

                <div className="cards_fund grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center gap-20 pb-8 border-b border-[#f3f3f3]">
                    <div className="flex gap-4 items-center">
                        <div className="w-13.75 h-13.75 bg-[#EBF9EB] rounded-full flex justify-center items-center">
                            <Image width={30} height={30} src={attach_money} alt="" />
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold text-[26px] font-inter text-[#232323]">$45000</p>
                            <p className="text-[#5B8B7E] font-inter font-normal text-[15px]">Fund Approved</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center">
                        <div className="w-13.75 h-13.75 bg-[#FFF5D9] rounded-full flex justify-center items-center">
                            <Image width={30} height={30} src="/error_outline_yello.png" alt="" />
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold text-[26px] font-inter text-[#232323]">02</p>
                            <p className="text-[#5B8B7E] font-inter font-normal text-[15px]">Pending Approval</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center">
                        <div className="w-13.75 h-13.75 bg-[#FFDCD9] rounded-full flex justify-center items-center">
                            <Image width={30} height={30} src="/block.png" alt="" />
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold text-[26px] font-inter text-[#232323]">02</p>
                            <p className="text-[#5B8B7E] font-inter font-normal text-[15px]">Rejected Fund</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter_section bg-white pt-8">
                <div className="filter_btn pb-4 px-6 min-[581px]flex max-[580px]:grid max-[580px]:grid-cols-2 items-center">
                    {
                        filter_buttons.map((button_info, index) => {
                            return (
                                <button onClick={() => Handle_Filter_button(button_info.filter_type, index)} key={button_info.id} className={`${active_button_index_filter === index ? "bg-black text-white" : "bg-[#EBF9EB] hover:bg-amber-50 text-[#27463E]"}  mx-1  rounded-[100px] px-10 py-2   transition font-inter text-[13px] font-medium`}>{button_info.filter_type}</button>
                            )
                        })
                    }

                </div>
            </div>
            <Fund_Request_list filtered_fund_requests={filtered_fund_requests} />
        </>
    )
}