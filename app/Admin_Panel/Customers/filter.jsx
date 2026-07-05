"use client"
import search_icon from "@/public/search_icon.png"
import { Plus } from "lucide-react"
import cardImage from "../../../public/credit_card_image_1.png"
import { useMemo, useState } from "react"
import customer_details_icon from "../../../public/customer_details_icon.png"
import Customer_details from "./customer_details"


export default function filter_section(props) {
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
    ]

    //filter logic
    const [active_button_index_filter, set_active_button_index] = useState(0);
    const [activeFilter, set_active_button] = useState("All");
    const [cusotmer_search, set_customer_seach] = useState("");


    function Handle_Filter_button(button_name, index) {
        set_active_button_index(index);
        props.set_active_button(index)
        set_active_button(button_name);

    }

    const filteredCustomers = useMemo(() => {
        return props.customerDetailsObject.filter(customer => {
            const matchesStatus =
                activeFilter === "All" ||
                customer.status === activeFilter;

            const matchesSearch =
                customer.customer_name
                    .toLowerCase()
                    .includes(cusotmer_search.toLowerCase());

            return matchesStatus && matchesSearch;
        });
    }, [props.customerDetailsObject, activeFilter, cusotmer_search]);



    return (
        <>
            <div className="filter_section bg-white mt-2">
                <div className="px-6 max-[500px]:px-2  pt-8 flex items-center justify-between pb-6">
                    <div className="flex items-center max-[420px]:flex-col max-[420px]:items-start  gap-4">
                        <h1 className="font-inter text-[#223933] font-semibold text-[18px]">Customer List</h1>
                        <div className="search flex max-[660px]:hidden  border border-[#BDD7BD] rounded-[40px] w-[314px] px-6 py-3 items-start gap-4">
                            <img src={search_icon.src} alt="" />
                            <input onChange={(e) => set_customer_seach(e.target.value)} className="placeholder:text-[#5F887D] font-normal font-inter text-[14px]" type="text" name="" placeholder="Search Customer" id="" />
                        </div>
                    </div>

                    <div className="button max-[660px]:hidden block ">
                        <div className="return_button bg-[#223933] rounded-[100px] px-4 py-3 flex items-center gap-2 cursor-pointer">
                            <Plus color="#A1CC53" alt="" />
                            <button className="font-medium text-[14px] font-inter text-white cursor-pointer">Add New Customer</button>
                        </div>
                    </div>
                </div>

                <div className="filter_btn pb-4 px-6 flex max-[660px]:grid max-[660px]:grid-cols-2 items-center gap-2">
                    {
                        filter_buttons.map((button_info, index) => {
                            return (
                                <button onClick={() => Handle_Filter_button(button_info.filter_type, index)} key={button_info.id} className={`${active_button_index_filter === index ? "bg-black text-white" : "bg-[#EBF9EB] hover:bg-amber-50 text-[#27463E]"}   rounded-[100px] px-10 py-2   transition font-inter text-[13px] font-medium`}>{button_info.filter_type}</button>
                            )
                        })
                    }



                </div>

                <div className="hidden max-[660px]:grid max-[660px]:grid-cols-2 w-full gap-2 px-6 pb-6">
                    {/* Search */}
                    <div className="search w-full flex items-center gap-4 max-[420px]:gap-2 border border-[#BDD7BD] rounded-[40px] max-[500px]:px-4 max-[500px]:py-2  px-6 py-3 min-w-0">
                        <img src={search_icon.src} alt="" />
                        <input
                            onChange={(e) => set_customer_seach(e.target.value)}
                            className="w-full min-w-0 placeholder:text-[#5F887D] font-normal font-inter text-[14px] max-[500px]:text-[11px] max-[420px]:text-[11px] outline-none"
                            type="text"
                            placeholder="Search Customer"
                        />
                    </div>

                    {/* Button */}
                    <div className="w-full">
                        <div className="w-full bg-[#223933] rounded-[100px] px-4 max-[500px]:px-4 max-[500px]:py-2 py-3 flex justify-center items-center gap-2 cursor-pointer">
                            <div>
                                <Plus color="#A1CC53" />
                            </div>
                            <button className="w-full text-center font-medium text-[14px] max-[500px]:text-[11px] max-[420px]:text-[10px] font-inter text-white cursor-pointer">
                                Add New Customer
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <Customer_details customers={filteredCustomers} />
        </>
    )
}