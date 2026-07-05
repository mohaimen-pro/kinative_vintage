"use client"
import search_icon from "@/public/search_icon.png"
import { Plus, ArrowDown } from "lucide-react"
import cardImage from "../../../public/credit_card_image_1.png"
import { useMemo, useState } from "react"
import Card_Request_List from "./card_request_lists"


export default function Filters_section(props) {


    const filter_buttons = [
        {
            id: 1,
            filter_type: "Card Request"
        },

        {
            id: 2,
            filter_type: "Fund Request"
        },


    ]



    const graph_filter_array_ofObjects = [
        {
            id: 1,
            filter_type: "All Status"
        },
        {
            id: 2,
            filter_type: "Active"
        },

        {
            id: 3,
            filter_type: "Pending"
        },
    ]

    const [isOpenFilterGraph, setisOpenFilterGraph] = useState(false);
    const [selected_filter, set_selected_filter] = useState(graph_filter_array_ofObjects[0])
    const [graph_filter, set_graph_filter] = useState("All Status")





    //filter logic
    const [active_button_index_filter, set_active_button_index] = useState(0);
    const [active_button, set_active_button] = useState("Card Request");
    const [cusotmer_search, set_customer_seach] = useState("");


    function Handle_Filter_button(button_name, index) {
        set_active_button_index(index);
        set_active_button(button_name);

    }

    const filtered_data = useMemo(() => {
        const active_request =
            active_button === "Card Request"
                ? props.cardrequests
                : props.fund_request;

        return active_request.filter((info) => {
            const searchName =
                active_button === "Card Request"
                    ? info.name
                    : info.customer_name;

            return (
                (graph_filter === "All Status" ||
                    info.status === graph_filter) &&
                (cusotmer_search === "" ||
                    searchName.toLowerCase().includes(cusotmer_search.toLowerCase()))
            );
        });
    }, [
        props.cardrequests,
        props.fund_request,
        graph_filter,
        active_button,
        cusotmer_search,
    ]);








    return (
        <>
            <div className="filter_section bg-white  mt-2">
                <div className="px-6 pt-8 flex items-center justify-between pb-6">
                    <div className="flex items-center gap-4">
                        <h1 className="font-inter text-[#223933] font-semibold text-[18px] max-[660px]:hidden block">Customer List</h1>
                        <div className="search flex max-[660px]:hidden border border-[#BDD7BD] rounded-[40px] w-[314px] max-[550px]:w-[250px] px-6 py-3 items-start gap-4">
                            <img src={search_icon.src} alt="" />
                            <input onChange={(e) => set_customer_seach(e.target.value)} className="placeholder:text-[#5F887D] font-normal font-inter text-[14px]" type="text" name="" placeholder="Search Card" id="" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between  max-[550px]:grid gap-2 items-center">
                    {/* Filter Buttons */}
                    <div className="filter_btn pb-4 px-6 flex max-[660px]:grid max-[660px]:grid-cols-2 items-center gap-2">
                        {filter_buttons.map((button_info, index) => {
                            return (
                                <button
                                    key={button_info.id}
                                    onClick={() => {
                                        Handle_Filter_button(button_info.filter_type, index);
                                        set_active_button(button_info.filter_type);
                                    }}
                                    className={`${active_button_index_filter === index
                                            ? "bg-black text-white"
                                            : "bg-[#EBF9EB] hover:bg-amber-50 text-[#27463E]"
                                        } rounded-[100px] px-10 py-2 transition font-inter text-[13px] font-medium`}
                                >
                                    {button_info.filter_type === "Active"
                                        ? "Approved"
                                        : button_info.filter_type}
                                </button>
                            );
                        })}
                    </div>

                    {/* Desktop Filter Dropdown */}
                    <div className="graph_filter mr-6 max-[660px]:hidden block mb-6">
                        <div className="relative">
                            <div
                                onClick={() => setisOpenFilterGraph((prev) => !prev)}
                                className="flex w-full items-center justify-between rounded-[100px] border border-gray-200 bg-[#F7F7F7] px-6 py-2 shadow-xl cursor-pointer transition-all duration-200 hover:bg-[#F3F7F6] hover:text-[#5F887D]"
                            >
                                <div className="flex items-center gap-4">
                                    <p className="font-inter text-[13px] font-medium text-[#8B8B8B]">
                                        {selected_filter.filter_type}
                                    </p>

                                    <ArrowDown color="#A1CC53" className="w-4 h-4" />
                                </div>
                            </div>

                            {isOpenFilterGraph && (
                                <div className="absolute top-full left-0 z-200 mt-2 w-full rounded-2xl border border-gray-200 bg-white p-2 shadow-xl flex flex-col gap-1">
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
                                                <p className="font-inter text-[12px] font-medium text-[#5F887D]">
                                                    {info.filter_type}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Search & Filter */}
                    <div className="hidden max-[660px]:grid max-[660px]:grid-cols-2 items-center w-full gap-2 px-6 pb-6">
                        {/* Search */}
                        <div className="search flex w-[314px] max-[550px]:w-[200px] items-start gap-4 rounded-[40px] border border-[#BDD7BD] px-6 py-3">
                            <img src={search_icon.src} alt="" />

                            <input
                                type="text"
                                placeholder="Search Card"
                                onChange={(e) => set_customer_seach(e.target.value)}
                                className="placeholder:text-[#5F887D] font-inter text-[14px] font-normal"
                            />
                        </div>

                        {/* Mobile Filter */}
                        <div className="relative">
                            <div
                                onClick={() => setisOpenFilterGraph((prev) => !prev)}
                                className="flex w-full items-center justify-between rounded-[100px] border border-gray-200 bg-[#F7F7F7] px-6 py-2 shadow-xl cursor-pointer transition-all duration-200 hover:bg-[#F3F7F6] hover:text-[#5F887D]"
                            >
                                <div className="flex items-center gap-4">
                                    <p className="font-inter text-[13px] font-medium text-[#8B8B8B]">
                                        {selected_filter.filter_type}
                                    </p>

                                    <ArrowDown color="#A1CC53" className="w-4 h-4" />
                                </div>
                            </div>

                            {isOpenFilterGraph && (
                                <div className="absolute top-full left-0 z-200 mt-2 w-full rounded-2xl border border-gray-200 bg-white p-2 shadow-xl flex flex-col gap-1">
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
                                                <p className="font-inter text-[12px] font-medium text-[#5F887D]">
                                                    {info.filter_type}
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

            <Card_Request_List card_request_list={filtered_data} active_button={active_button} />
        </>
    )
}