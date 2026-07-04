"use client"

import { useRouter } from "next/navigation";

import cardImage from "../../../public/credit_card_image_1.png"


export default function Cards_List({ card_request_list }) {
    const badgeStyle = {
        Physical: "bg-[#977850] text-white",
        Virtual: "bg-[#A3CE53] text-[#27463E]",
        "Vir-Phy": "bg-[#D3E3FF] text-[#27463E]",
    };

    const statusStyle = {
        Active: "bg-[#EBF9EB] text-[#223933]",
        Pending: "bg-[#FFF5D9] text-[#223933]",
        Rejected: "bg-[#FFDCD9] text-[#223933]",
    };

    const statusDot = {
        Active: "bg-[#A1CC53]",
        Pending: "bg-[#FFBB38]",
        Rejected: "bg-[#F6857B]",
    };


    const router = useRouter();


    return (
        <>


            <div className="table-wrapper relative overflow-x-auto w-full rounded-[10px]">
                <table className="table-fixed min-w-[1200px] min-[1700px]:w-full">
                    {/* Header */}
                    <thead className="">
                        <tr className="text-left pl-5 font-inter text-[15px] font-light text-[#000000]">
                            <th scope="col" className="px-6 py-5 font-inter text-[15px] font-normal text-[#000000]">My Card</th>
                            <th scope="col" className="px-6 py-5 font-inter text-[15px] font-normal text-[#000000]">Card Name</th>
                            <th scope="col" className="px-6 py-5 font-inter text-[15px] font-normal text-[#000000]">Last Digit</th>
                            <th scope="col" className="px-6 py-5 font-inter text-[15px] font-normal text-[#000000]">Issue Date</th>
                            <th scope="col" className="px-6 py-5 font-inter text-[15px] font-normal text-[#000000]">Expires</th>
                            <th scope="col" className="px-6 py-5 font-inter text-[15px] font-normal text-[#000000]">Balance</th>
                            <th scope="col" className="px-6 py-5 font-inter text-[15px] font-normal text-[#000000]">Status</th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody className="bg-white">
                        {
                            card_request_list.length > 0 ? (
                                card_request_list.map((card) => (


                                    <tr
                                        onClick={() => {
                                            router.push(`/Customer_Panel/My_Cards/Card_Details`)
                                        }}
                                        key={card.id}
                                        className="border-b cursor-pointer border-[#f0f0f0] last:border-b-0 hover:bg-gray-50 transition"
                                    >

                                        {/* Card Details */}
                                        <td scope="row" className="px-6 py-5">
                                            <div className="flex items-center gap-5">
                                                <img
                                                    src={cardImage.src}
                                                    alt=""
                                                    className="w-[155px]"
                                                />


                                            </div>
                                        </td>

                                        <td className="px-6 py-5">
                                            <div>
                                                <h3 className="text-[15px] text-left font-inter font-normal text-[#697E79]">
                                                    {card.name}
                                                </h3>
                                            </div>
                                        </td>

                                        {/* Plastic ID */}
                                        <td scope="row" className="px-6 py-5">
                                            <p className="text-[15px] font-inter font-bold text-[#232323]">
                                                {card.LastDigit}
                                            </p>
                                        </td>

                                        {/* Card Type */}
                                        <td scope="row" className="px-6 py-5">
                                            <span
                                                className={` text-[15px] font-normal font-inter text-[#697E79] px-4 py-1 text-sm`}
                                            >
                                                {card.IssueDate}
                                            </span>
                                        </td>

                                        {/* Card Type */}
                                        <td scope="row" className="px-6 py-5">
                                            <span
                                                className={` text-[15px] font-normal font-inter text-[#697E79] px-4 py-1 text-sm`}
                                            >
                                                {card.Expires}
                                            </span>
                                        </td>

                                        {/* Card Type */}
                                        <td scope="row" className="px-6 py-5">
                                            <span
                                                className={`text-[15px] font-inter font-bold text-[#232323]`}
                                            >
                                                {card.Balance}
                                            </span>
                                        </td>


                                        <td scope="row" className="px-6 py-5">
                                            <span
                                                className={`inline-flex items-center gap-2 rounded-[100px] px-4 py-1 font-inter text-[15px] font-normal ${statusStyle[card.status]}`}
                                            >
                                                <span
                                                    className={`h-2.5 w-2.5 rounded-full ${statusDot[card.status]}`}
                                                ></span>

                                                {card.status}
                                            </span>
                                        </td>

                                    </tr>

                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="py-10 text-center text-gray-500">
                                        No matches found.
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}