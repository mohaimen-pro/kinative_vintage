"use client"
import search_icon from "@/public/search_icon.png"
import { Plus } from "lucide-react"
import cardImage from "../../../public/credit_card_image_1.png"
import { useMemo, useState } from "react"
import Cards_List from "./cards_list";
import Link from "next/link"


export default function card_list_filter({ cardrequests }) {
    const filter_buttons = [
        {
            id: 1,
            filter_type: "All time"
        },

        {
            id: 2,
            filter_type: "Active"
        },

        {
            id: 3,
            filter_type: "Rejected"
        }
    ]




    //filter logic
    const [active_button_index_filter, set_active_button_index] = useState(0);
    const [active_button, set_active_button] = useState("All time");
    const [cusotmer_search, set_customer_seach] = useState("");


    function Handle_Filter_button(button_name, index) {
        set_active_button_index(index);
        set_active_button(button_name);

    }

    const filtered_data = useMemo(() => {
        return cardrequests.filter((info) =>
            (active_button === "All time" || info.status === active_button) &&
            (cusotmer_search === "" ||
                info.name.toLowerCase().includes(cusotmer_search.toLowerCase()))
        );
    }, [cardrequests, active_button, cusotmer_search]);



    return (
        <>
            <div className="filter_section bg-white mt-8">
                <div className="px-6 pt-8 flex items-center justify-between pb-6">
                    <div className="flex items-center  gap-4 max-[500px]:flex-col max-[500px]:items-start max-[500px]:gap-3">
                        <h1 className="font-inter text-[#223933] font-semibold text-[18px]">Customer List</h1>
                        <div className="search flex border border-[#BDD7BD] rounded-[40px] w-[314px] max-[550px]:w-[250px] px-6 py-3 items-start gap-4">
                            <img src={search_icon.src} alt="" />
                            <input onChange={(e) => set_customer_seach(e.target.value)} className="placeholder:text-[#5F887D] font-normal font-inter text-[14px]" type="text" name="" placeholder="Search Card" id="" />
                        </div>
                    </div>

                    <div className="button max-[700px]:hidden block">
                        <div className="return_button bg-[#223933] rounded-[100px] px-4 py-3 flex items-center gap-2 cursor-pointer">
                            <Plus color="#A1CC53" alt="" />
                            <Link href="Add_New_card">
                                <button className="font-medium text-[14px] font-inter text-white cursor-pointer">Add New Card</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="filter_btn pb-4 px-6 flex max-[660px]:grid max-[660px]:grid-cols-2 items-center gap-2">
                    {
                        filter_buttons.map((button_info, index) => {
                            return (
                                <button onClick={() => Handle_Filter_button(button_info.filter_type, index)} key={button_info.id} className={`${active_button_index_filter === index ? "bg-black text-white" : "bg-[#EBF9EB] hover:bg-amber-50 text-[#27463E]"}   rounded-[100px] px-10 py-2   transition font-inter text-[13px] font-medium`}>{button_info.filter_type === "Active" ? "Approved" : button_info.filter_type}</button>
                            )
                        })
                    }
                    <div className="button max-[700px]:block hidden">
                        <div className="return_button bg-[#223933] rounded-[100px] px-3 py-2 flex items-center gap-2 cursor-pointer">
                            <Plus color="#A1CC53" alt="" />
                            <button className="font-medium text-[13px] font-inter text-white cursor-pointer">Add New Card</button>
                        </div>
                    </div>

                </div>
            </div>


            <Cards_List card_request_list={filtered_data} />

        </>
    )

}


