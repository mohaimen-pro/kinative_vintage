"use client"

import { useState, useEffect, useRef } from "react";
import { Plus, ArrowDown, Download } from "lucide-react"

//date picker
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import amazon_logo from "../../../public/apple_logo.png"




export default function Transaction_List() {

    const dropdownRef = useRef(null);
    const [showPicker, setShowPicker] = useState(false);

   

    const graph_filter_array_ofObjects = [
        {
            id: 1,
            filter_type: "All Cards"
        },
        {
            id: 2,
            filter_type: "Card 1"
        },

        {
            id: 3,
            filter_type: "Card 2"
        },
    ]




    const [range, setRange] = useState([
        {
            startDate: new Date(2026, 5, 21),
            endDate: new Date(2026, 6, 21),
            key: "selection",
        },
    ]);

    const [isOpenFilterGraph, setisOpenFilterGraph] = useState(false);
    const [selected_filter, set_selected_filter] = useState(graph_filter_array_ofObjects[0])
    const [graph_filter, set_graph_filter] = useState("All Status")


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

        {
            id: 5,
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
            id: 6,
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




     useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setisOpenFilterGraph(false);
                setShowPicker(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div className="">
            <div className="head flex  min-[1050px]:justify-between max-[1050px]:flex-col gap-4 pb-10 pr-6 ">
                <div>
                    <p className="font-inter text-[#223933] text-[18px] font-semibold pt-1 ">History</p>
                </div>

                <div className="flex items-center gap-2 max-[550px]:gap-5 max-[1050px]:grid max-[1050px]:grid-cols-2 max-[550px]:grid-cols-1 max-[1050px]:grid max-[1050px]:grid-cols-2 max-[1050px]:justify-center max-[1050px]:items-center">
                    <div className="graph_filter max-[550px]:w-[70%]">
                        <div  className="relative">
                            <div
                               
                                onClick={() => setisOpenFilterGraph((prev) => !prev)}
                                className="flex w-full items-center justify-between rounded-[100px] border border-gray-200 bg-[#F7F7F7] px-6 py-2 cursor-pointer transition-all duration-200 hover:bg-[#F3F7F6] hover:text-[#5F887D]"
                            >
                                <div className="flex items-center gap-4">
                                    <p className="font-inter text-[13px] font-medium text-[#8B8B8B]">
                                        {graph_filter}
                                    </p>

                                    <ArrowDown color="#A1CC53" className="w-4 h-4" />
                                </div>
                            </div>

                            {isOpenFilterGraph && (
                                <div ref={dropdownRef} className="absolute top-full left-0 z-200 mt-2 w-full rounded-2xl border border-gray-200 bg-white p-2 shadow-xl flex flex-col gap-1">
                                    {graph_filter_array_ofObjects.map((info) => (
                                        <div
                                            
                                            key={info.id}
                                            onClick={() => {
                                                set_selected_filter(info);
                                                setisOpenFilterGraph(false);
                                                set_graph_filter(info.filter_type);
                                            }}
                                            className="flex w-full items-center justify-between rounded-xl bg-white px-2 py-3 cursor-pointer transition-all duration-200 hover:bg-[#F3F7F6] hover:text-[#5F887D]"
                                        >
                                            <div className="flex items-center">
                                                <p className="font-inter text-[13px] font-medium text-[#5F887D]">
                                                    {info.filter_type}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="date_filter  flex items-center justify-between max-[550px]:w-[100%]">

                        <div ref={dropdownRef} className="dropdown min-[555px]:min-w-60 relative flex justify-center rounded-[100px] border border-gray-200 bg-[#F7F7F7] items-center gap-1 px-6 py-2">



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

                    <div className="button flex bg-black rounded-[100px] px-6 py-2 items-center justify-center gap-2 max-[550px]:w-[70%]">
                        <button className="font-inter text-[13px] text-white font-medium">Statement</button>
                        <Download color="#A1CC53" className="w-[22px] h-[22px]" />
                    </div>
                </div>
            </div>


            <div className="list pr-6 pb-6 overflow-x-auto ">
                <div className="min-w-[700px] max-[700px]:hidden block">
                    {transactions.map((transaction) => (
                        <div
                            key={transaction.id}
                            className={`${transaction.id % 2 === 0 ? "bg-white" : "bg-[#F7F7F7]"} flex   items-center w-full  rounded-[10px] px-4 py-2`}
                        >
                            <div className="flex-1 flex gap-3 items-center">
                                <img src={transaction.logo} alt={transaction.company} />
                                <h1 className="font-lato font-semibold text-[14px] text-[#223933]">
                                    {transaction.company}
                                </h1>
                            </div>

                            <h1 className="flex-1 font-inter text-[14px] font-medium text-[#6E8D37] pl-4">
                                {transaction.cardNumber}
                            </h1>

                            <h1 className="flex-1 font-inter font-medium text-[15px] text-[#223933]">
                                {transaction.holderName}
                            </h1>

                            <p className="flex-1 text-[15px] text-[#697E79] font-normal font-inter">
                                {transaction.date} {transaction.time}
                            </p>

                            <div className="flex flex-1 items-center gap-2">
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



                <div className="max-[800px]:block hidden">
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
                                    <h1 className="flex-1 font-inter font-medium text-[15px] text-[#223933]">
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
    )
}