"use client"


import { ArrowDown } from "lucide-react";
import { useState , useEffect , useRef } from "react";



export default function Dropdown(props) {
    const graph_filter_array_ofObjects = [
        { id: 1, filter_name: "This Week" },
        { id: 2, filter_name: "This Month" },
        { id: 3, filter_name: "This Year" },
    ];

    const [isOpenFilterGraph, setisOpenFilterGraph] = useState(false);

    const [graph_filter, set_graph_filter] = useState("This Week")

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
            <div ref={dropdownRef} className="relative z-200">
                <div
                    onClick={() => setisOpenFilterGraph((prev) => !prev)}
                    className={`${props.isGraph ? "bg-[#F7F7F7]" : ""} week_sorting_dropdown z-200 flex  gap-1 cursor-pointer rounded-[40px] justify-between items-center px-4 py-3`}
                >
                    <div className="flex gap-2 items-center z-200">
                        <p className="font-inter text-[13px] font-medium text-[#5F887D] group-hover:text-white">
                            {props.selected_filter.filter_name}
                        </p>
                    </div>

                    <ArrowDown className={`${props.isGraph ? "text-[#A1CC53]" : "text-black"} group-hover:text-white  w-4 h-4 `}/>
                </div>

                {isOpenFilterGraph && (
                    <div className="absolute top-full left-0  z-200 mt-2 w-full bg-white rounded-2xl border border-gray-200 shadow-xl p-2 flex flex-col gap-1 ">
                        {graph_filter_array_ofObjects.map((filter) => (
                            <div
                                onClick={() => {
                                    props.set_selected_filter(filter);
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
    )
}