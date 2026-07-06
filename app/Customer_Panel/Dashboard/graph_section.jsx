"use client"
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";


//importing the carousel things
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import credit_card_image_one from "@/public/credit_card_image_1.png"
import down_arrow from "../../../public/down_arrow.png"
// import credit_card_section_bg from "/credit_card_section_bg.png";
import bar_charts_icon from "../../../public/bar_chart.png"
import format_list_bulleted from "../../../public/format_list_bulleted.png"
import left_arrow_slider from "../../../public/left_arrow_slider.png"
import right_arrow_slider from "../../../public/right_arrow_slider.png"
import Image from "next/image";
import amazon_logo from "../../../public/apple_logo.png"
import bar_chart_green from "../../../public/bar_chart_green.png"
import format_list_bulleted_black from "../../../public/format_list_bulleted_black.png"
import { div, img } from "motion/react-client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";








export default function Graph_section_customer() {




    //Graph logics (used recharts)


    //This will come from the database
    const data = [
        { date: "2026-07-01", value: 1000 },
        { date: "2026-06-01", value: 7000 },
        { date: "2026-01-02", value: 5000 },
        { date: "2026-03-07", value: 15000 },
        { date: "2026-02-02", value: 38000 },
        { date: "2026-05-03", value: 14000 },
        { date: "2026-07-05", value: 4000 },
        { date: "2026-06-21", value: 23000 },
        { date: "2026-07-1", value: 5000 },
        { date: "2026-07-1", value: 28000 },
    ];


    //graph selected button
    const [graph_filter, set_graph_filter] = useState("This Week")
    const [show_graph, set_show_graph] = useState(true)


    const graph_filter_array_ofObjects = [
        { id: 1, filter_name: "This Week" },
        { id: 2, filter_name: "This Month" },
        { id: 3, filter_name: "This Year" },
    ];

    
    const [isOpenFilterGraph, setisOpenFilterGraph] = useState(false);
    const [selected_filter, set_selected_filter] = useState(graph_filter_array_ofObjects[0]);


    //filtering data for the graph according to the selectef filter button
    const filtered_data_forGraph = data.filter((item) => {
        const currentDate = new Date();
        const itemDate = new Date(item.date);

        switch (graph_filter) {
            case "This Week": {
                const weekAgo = new Date();
                weekAgo.setDate(currentDate.getDate() - 7);

                return itemDate >= weekAgo && itemDate <= currentDate;
            }

            case "This Month":
                return (
                    itemDate.getMonth() === currentDate.getMonth() &&
                    itemDate.getFullYear() === currentDate.getFullYear()
                );

            case "This Year":
                return itemDate.getFullYear() === currentDate.getFullYear();

            default:
                return true;
        }









    });

    //SLider logics

    const [currentSlide, setCurrentSlide] = useState(0);

    const cards = [
        {
            id: 1,
            image: "/credit_card_image_1.png",
            holder: "John Snow",
            type: "Virtual",
        },
        {
            id: 2,
            image: "/credit_card_image_1.png",
            holder: "Arya Stark",
            type: "Physical",
        },
        {
            id: 3,
            image: "/credit_card_image_1.png",
            holder: "Tyrion Lannister",
            type: "Virtual",
        },
    ];

    //transaction

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
    ];




    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % cards.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? cards.length - 1 : prev - 1
        );
    };

    const current_card = cards[currentSlide]




    const dropdownRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {

                setisOpenFilterGraph(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);




    return (
        <div className="graph_section flex gap-4  pt-2">
            <div className="graph outline-0 border-0 bg-white flex-3 rounded-[10px] px-8 max-[500px]:px-5 pt-4">
                <div className="graph_head pb-5 flex flex-col max-[500px]:gap-4">
                    <div className=" flex justify-between  items-center">
                        <div>
                            <h2 className="font-inter font-semibold text-[18px] text-black">Transactions</h2>
                        </div>
                        <div className="sorting_section max-[500px]:pb-2 flex gap-2  items-center">


                            <div className="graph_filter block max-[700px]:hidden">
                                <div ref={dropdownRef} className="relative">
                                    <div
                                        onClick={() => setisOpenFilterGraph((prev) => !prev)}
                                        className="week_sorting_dropdown flex gap-1 bg-[#F7F7F7] cursor-pointer rounded-[40px] justify-between items-center px-4 py-3"
                                    >
                                        <div className="flex gap-2 items-center">
                                            <p className="font-inter text-[13px] font-medium text-[#5F887D]">
                                                {selected_filter.filter_name}
                                            </p>
                                        </div>

                                        <img src={down_arrow.src} alt="" />
                                    </div>

                                    {isOpenFilterGraph && (
                                        <div className="absolute top-full left-0  z-200 mt-2 w-full bg-white rounded-2xl border border-gray-200 shadow-xl p-2 flex flex-col gap-1 ">
                                            {graph_filter_array_ofObjects.map((filter) => (
                                                <div
                                                    onClick={() => {
                                                        set_selected_filter(filter);
                                                        setisOpenFilterGraph(false);
                                                        set_graph_filter(filter.filter_name)
                                                    }}
                                                    key={filter.id}
                                                    className="rounded-xl px-2 py-3 cursor-pointer transition-all duration-200 hover:bg-[#F3F7F6] hover:text-[#5F887D]"
                                                >
                                                    <div className="flex items-center">
                                                        <p className="font-inter text-[12px] font-medium text-[#5F887D]">
                                                            {filter.filter_name}
                                                        </p>


                                                    </div>

                                                </div>

                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="view_all hidden max-[700px]:flex hidden max-[700px]:justify-between">
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


                        <div className="graph_filter hidden max-[700px]:block">
                            <div className="relative">
                                <div
                                    onClick={() => setisOpenFilterGraph((prev) => !prev)}
                                    className="week_sorting_dropdown flex gap-1 bg-[#F7F7F7] cursor-pointer rounded-[40px] justify-between items-center px-4 py-3"
                                >
                                    <div className="flex gap-2 items-center">
                                        <p className="font-inter text-[13px] font-medium text-[#5F887D]">
                                            {selected_filter.filter_name}
                                        </p>
                                    </div>

                                    <img src={down_arrow.src} alt="" />
                                </div>

                                {isOpenFilterGraph && (
                                    <div className="absolute top-full left-0  z-200 mt-2 w-full bg-white rounded-2xl border border-gray-200 shadow-xl p-2 flex flex-col gap-1 ">
                                        {graph_filter_array_ofObjects.map((filter) => (
                                            <div
                                                onClick={() => {
                                                    set_selected_filter(filter);
                                                    setisOpenFilterGraph(false);
                                                    set_graph_filter(filter.filter_name)
                                                }}
                                                key={filter.id}
                                                className="rounded-xl px-2 py-3 cursor-pointer transition-all duration-200 hover:bg-[#F3F7F6] hover:text-[#5F887D]"
                                            >
                                                <div className="flex items-center">
                                                    <p className="font-inter text-[12px] font-medium text-[#5F887D]">
                                                        {filter.filter_name}
                                                    </p>


                                                </div>

                                            </div>

                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>




                </div>

                <div className={`${show_graph ? "block" : "hidden"} graph h-[350px] w-full outline-0`}>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={filtered_data_forGraph}>
                            <defs>
                                <linearGradient id="greenFill" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#A3D65C" stopOpacity={0.5} />
                                    <stop offset="95%" stopColor="#A3D65C" stopOpacity={0} />
                                </linearGradient>
                            </defs>

                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis axisLine={false} dataKey="date"
                                tickFormatter={(date) =>
                                    new Date(date).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                    })
                                } tick={{ fill: "#999999", fontSize: 13, fontWeight: 400 }} />

                            <YAxis axisLine={false} tickFormatter={(value) => `$${value}`} tick={{ fill: "#999999", fontSize: 13, fontWeight: 400 }} />

                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#6F9D3B"
                                strokeWidth={3}
                                fill="url(#greenFill)"
                                activeDot={{
                                    r: 8,
                                    fill: "#A3D65C",
                                    stroke: "#7CB342",
                                    strokeWidth: 4,
                                }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className={`${show_graph ? "hidden" : "block"} transaction ml-2`}>
                    {transactions.map((transaction) => (
                        <div
                            key={transaction.id}
                            className={`${transaction.id % 2 === 0 ? "bg-white" : "bg-[#F7F7F7]"} flex items-center w-full  rounded-[10px] px-4 py-2`}
                        >
                            <div className="flex-1 flex gap-3 items-center">
                                <img src={transaction.logo} alt={transaction.company} />
                                <h1 className="font-lato font-semibold text-[15px] text-[#223933]">
                                    {transaction.company}
                                </h1>
                            </div>

                            <h1 className="flex-1 font-inter text-[15px] font-medium text-[#6E8D37]">
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
            </div>






        </div>
    )
}