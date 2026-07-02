import customer_details_icon from "../../../public/customer_details_icon.png"


export default function Customer_details({ customers }) {


   




    const badgeStyle = {
        Physical: "bg-[#977850] text-white",
        Virtual: "bg-[#A3CE53] text-[#27463E]",
        "Vir-Phy": "bg-[#D3E3FF] text-[#27463E]",
    };

    const statusStyle = {
        Active: "bg-[#EBF9EB] text-[#223933]",
        Pending: "bg-[#FFF5D9] text-[#223933]",
        Suspended: "bg-[#FFDCD9] text-[#223933]",
    };

    const statusDot = {
        Active: "bg-[#A1CC53]",
        Pending: "bg-[#FFBB38]",
        Suspended: "bg-[#F6857B]",
    };



    return (
        <>
          

            <div className="table-wrapper w-full overflow-x-auto rounded-[10px]">
                <table className="min-w-[1200px] min-[1700px]:w-full">
                    {/* Header */}
                    <thead className="">
                        <tr className="text-left font-inter text-[15px] font-light text-[#000000]">
                            <th className="px-10 py-5">Customer</th>
                            <th className="px-6 py-5">Date of Birth </th>
                            <th className="px-6 py-5">Email</th>
                            <th className="px-6 py-5">Mobile</th>
                            <th className="px-6 py-5">Type</th>
                            <th className="px-6 py-5">Status</th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody className="bg-white">
                        {
                            customers.length > 0 ? (
                                customers.map((card) => (
                                    <tr
                                        key={card.id}
                                        className="border-b border-[#f0f0f0] last:border-b-0 hover:bg-gray-50 transition"
                                    >
                                        {/* Card Details */}
                                        <td className="px-10 py-5">
                                            <div className="flex items-center gap-5">
                                                <div className="text-[#223933] flex justify-center items-center font-semibold text-[16px] font-inter bg-[#EBF9EB] w-12.5 h-12.5 rounded-full">
                                                    {card.customer_short_name}
                                                </div>

                                                <div>
                                                    <h3 className="text-[15px] font-inter font-medium text-[#2D3F3A]">
                                                        {card.customer_name}
                                                    </h3>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Plastic ID */}
                                        <td className="px-6">
                                            <p className="text-[15px] font-inter font-normal text-[#697E79]">
                                                {card.date_of_birth}
                                            </p>
                                        </td>

                                        {/* Card Type */}
                                        <td className="px-6">
                                            <span
                                                className={`rounded-[100px] text-[15px] font-normal font-inter px-4 py-1 text-sm text-[#697E79]`}
                                            >
                                                {card.email}
                                            </span>
                                        </td>

                                        {/* Address */}
                                        <td className="px-6">
                                            <p className="max-w-[260px] text-[15px] font-inter font-bold  text-[#232323]">
                                                {card.mobile_number}
                                            </p>
                                        </td>
                                        {/* Type */}

                                        <td className="px-6">
                                            <span
                                                className={`font-inter text-[15px] font-normal text-[#697E79]`}
                                            >


                                                {card.type}
                                            </span>
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

                                        <td className="px-6">

                                            <img src={customer_details_icon.src} alt="" />
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