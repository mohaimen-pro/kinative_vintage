"use client"
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";



import { motion } from "framer-motion";
import { useState } from "react";
import down_arrow from "../../../../public/down_arrow.png"
// import credit_card_section_bg from "/credit_card_section_bg.png";
import format_list_bulleted from "../../../../public/format_list_bulleted.png"
import Image from "next/image";
import format_list_bulleted_black from "../../../../public/format_list_bulleted_black.png"
import { div, img } from "motion/react-client";
import Dropdown from './dropdown_section'


export default function Graph_Section() {

     const graph_filter_array_ofObjects = [
        { id: 1, filter_name: "This Week" },
        { id: 2, filter_name: "This Month" },
        { id: 3, filter_name: "This Year" },
    ];

    const [selected_filter, set_selected_filter] = useState(graph_filter_array_ofObjects[0]);

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





    const [isOpenFilterGraph, setisOpenFilterGraph] = useState(false);


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



    return (
        <>
            <main className="Graph_section mt-6 mb-6 mx-8 max-[390px]:mx-4" >
                <div className="graph_head pb-3 flex justify-between items-center ">
                    <div>
                        <h2 className="font-inter font-semibold text-[18px] text-black">Transactions Stats</h2>
                    </div>
                    <div className="sorting_section flex gap-2 items-center">


                        {/* <div className="graph_filter">
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




                        </div> */}

                        <Dropdown isGraph={true} set_selected_filter={set_selected_filter} selected_filter={selected_filter}/>


                    </div>
                </div>
                <div className={`graph h-[350px] w-full outline-0`}>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
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
            </main>

        </>
    )

}