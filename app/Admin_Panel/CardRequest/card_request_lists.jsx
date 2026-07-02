import Link from "next/link";
import cardImage from "../../../public/credit_card_image_1.png"
import { useRouter } from "next/navigation";


export default function Card_Request_List({ card_request_list }) {

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
                <table className="min-w-[1200px] min-[1700px]:w-full">
                    {/* Header */}
                    <thead className="">
                        <tr className="text-left font-inter text-[15px] font-light text-[#000000]">
                            <th className="px-10 py-5">Card Details</th>
                            <th className="px-6 py-5">Plastic ID</th>
                            <th className="px-6 py-5">Card Type</th>
                            <th className="px-6 py-5">Address</th>
                            <th className="px-6 py-5">Status</th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody className="bg-white">
                        {
                            card_request_list.length > 0 ? (
                                card_request_list.map((card) => (


                                    <tr
                                        onClick={()=>{
                                            router.push(`/Admin_Panel/CardRequest/Card_Details`)
                                        }}
                                        key={card.id}
                                        className="border-b cursor-pointer border-[#f0f0f0] last:border-b-0 hover:bg-gray-50 transition"
                                    >
                                        
                                            {/* Card Details */}
                                            <td className="px-10 py-5">
                                                <div className="flex items-center gap-5">
                                                    <img
                                                        src={cardImage.src}
                                                        alt=""
                                                        className="w-[155px]"
                                                    />

                                                    <div>
                                                        <h3 className="text-[15px] font-inter font-medium text-[#2D3F3A]">
                                                            {card.name}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Plastic ID */}
                                            <td className="px-6">
                                                <p className="text-[15px] font-inter font-bold text-[#232323]">
                                                    {card.plasticId}
                                                </p>
                                            </td>

                                            {/* Card Type */}
                                            <td className="px-6">
                                                <span
                                                    className={`rounded-[100px] text-[12px] font-normal font-inter px-4 py-1 text-sm ${badgeStyle[card.type]}`}
                                                >
                                                    {card.type}
                                                </span>
                                            </td>

                                            {/* Address */}
                                            <td className="px-6">
                                                <p className="max-w-[260px] text-[15px] font-inter font-normal leading-[22px] text-[#697E79]">
                                                    {card.address}
                                                </p>
                                            </td>

                                            {/* Status */}
                                            <td className="px-6">
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

