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
import { useState } from "react";

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


    return (
        <div className="graph_section flex gap-4  pt-2">
            <div className="graph outline-0 border-0 bg-white flex-3 rounded-[10px] px-8 pt-4">
                <div className="graph_head pb-6 px-4 flex justify-between items-center">
                    <div>
                        <h2 className="font-inter font-semibold text-[18px] text-black">Transactions</h2>
                    </div>
                    <div className="sorting_section flex gap-2 items-center">
                        <div onClick={() => set_show_graph(true)} className=" flex-1">
                            <div className={`${show_graph ? "bg-[#9EC952]" : "bg-white"} w-[35px] h-[35px] flex justify-center items-center  rounded-[5px]`}>
                                {show_graph ?
                                    <img src={bar_charts_icon.src} alt="" />
                                    : <img src={bar_chart_green.src} alt="" />
                                }
                            </div>
                        </div>

                        <div onClick={() => set_show_graph(false)} className=" flex-1">
                            <div className={`${show_graph ? "bg-white" : "bg-[#B7E658]"} w-[35px] h-[35px] flex justify-center items-center border border-[1px] border-[#E5E5E5] rounded-[5px]`}>
                                {show_graph ?
                                    <img src={format_list_bulleted.src} alt="" />

                                    : <img src={format_list_bulleted_black.src} alt="" />

                                }

                            </div>
                        </div>

                        <div className="graph_filter">
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
                                    <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-2xl border border-gray-200 shadow-xl p-2 flex flex-col gap-1 z-50">
                                        {graph_filter_array_ofObjects.map((filter) => (
                                            <div
                                                onClick={() => {
                                                    set_selected_filter(filter);
                                                    setisOpenFilterGraph(false);
                                                    set_graph_filter(filter.filter_name)
                                                }}
                                                key={filter.id}
                                                className="flex w-full items-center  justify-between rounded-xl px-2 py-3 cursor-pointer transition-all duration-200 hover:bg-[#F3F7F6] hover:text-[#5F887D]"
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



            {/* <div
                style={{
                    backgroundImage: `url(/credit_card_section_bg.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                }}
                className="flex-1 max-[1050px]:flex-2 bg-white rounded-[10px]">


                <div className="credit_card_slide  mt-8">
                    <div className="carousel ">





                        <div className="carousel_upper_part flex items-center justify-center">
                            <div onClick={prevSlide} className="left_arrow cursor-pointer">
                                <img src={left_arrow_slider.src} alt="" />
                            </div>
                            <div className="slide_credit_card">
                                <motion.img
                                    key={currentSlide}
                                    src={current_card.image}
                                    alt=""
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                            <div onClick={nextSlide} className="right_arrow cursor-pointer">
                                <img src={right_arrow_slider.src} alt="" />
                            </div>
                        </div>

                        <div className="carousel_info flex justify-between items-center mx-6 min-[1700px]:mx-20">
                            <div>
                                <p className="font-lato font-normal text-[12px] text-[#BAE959]">CARD HOLDER</p>
                                <p className="font-lato font-semibold text-[15px] text-white">{current_card.holder}</p>
                            </div>

                            <div>
                                <p className="font-lato font-normal text-[12px] text-[#BAE959]">CARD TYPE</p>
                                <p className="font-lato font-semibold text-[15px] text-white">{current_card.type}</p>
                            </div>
                        </div>



                    </div>

                    <div className="dots flex gap-1 pt-4 justify-center items-center">
                        {cards.map((card, index) => (
                            <div
                                key={card.id}
                                onClick={() => setCurrentSlide(index)}
                                className={`cursor-pointer rounded-full transition-all duration-300 ${currentSlide === index
                                    ? "w-2 h-2 bg-white"
                                    : "w-2 h-2 bg-white/40"
                                    }`}
                            />
                        ))}


                    </div>

                    <div className="info flex flex-col items-center mt-6">
                        <h1 className="font-semibold font-inter text-[28px] text-white">25</h1>
                        <p className="font-inter font-normal text-[15px] text-[#FFFFFF]">Pending Card Approval </p>
                    </div>


                    <div className="view_details_button flex w-full mb-6">
                        <button className="bg-[#BAE959] mx-auto mt-6 text-[#27463E] font-inter font-semibold text-[14px] rounded-[100px] py-3 px-7">View All Requests</button>
                    </div>
                </div>

            </div> */}



        </div>
    )
}