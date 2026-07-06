"use client"



import { useState } from "react";

import { ArrowLeft } from "lucide-react"
import { ArrowRight } from "lucide-react"


export default function Credit_Card_slider() {


    const [isActivateCard, set_is_active_Card] = useState(false)


    return (
        <div className="credit_cards flex items-start gap-6 overflow-x-auto">
            <div className="activate_card flex flex-col gap-4">
                <h1 className="font-semibold text-[18px] font-inter text-[#223933] pl-2">Activate Cards</h1>

                <div className="deactivated_cards flex gap-4 overflow-x-auto pb-2">

                    <div
                        className="relative w-[358px] h-[226px] shrink-0 rounded-[9px] p-9 flex flex-col justify-between overflow-hidden rounded-[9px] p-9 flex flex-col justify-between overflow-hidden"
                        style={{
                            backgroundImage: "url(/credit_card_bg.png)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Blur Overlay */}
                        {
                            !isActivateCard ? (
                                <img
                                    src="/credit_card_blur.png"
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover z-10 px-2 pb-2"
                                />
                            ) : ""
                        }

                        {
                            !isActivateCard ? (
                                <div className="absolute z-200 inset-0 flex items-center cursor-pointer justify-center">
                                    <button onClick={() => set_is_active_Card(true)} className="bg-[#BAE959] max-w-[180px] cursor-pointer rounded-full text-[14px] font-medium font-inter text-[#27463E] px-8 py-2">
                                        Activate Card
                                    </button>
                                </div>
                            ) :
                                ""
                        }


                        {/* Card Content */}
                        <div className="relative z-20 mt-auto">
                            <h2
                                className={`${isActivateCard ? "" : "opacity-20"} text-[17px] mt-auto mb-6 font-inter text-[#E0BB8B]`}
                            >
                                5675 6789 1234 9807
                            </h2>

                            <div className={`${isActivateCard ? "" : "opacity-20"} flex justify-between items-end`}>
                                <div className="flex gap-10">
                                    <div>
                                        <p className="text-[15px] font-light font-inter text-white">
                                            Valid Through
                                        </p>
                                        <p className="text-[21px] tracking-[2px] text-[#E0BB8B]">
                                            ****
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[15px] font-light font-inter text-white">
                                            CVV
                                        </p>
                                        <p className="text-[21px] tracking-[2px] text-[#E0BB8B]">
                                            ***
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="relative w-[358px] h-[226px] shrink-0 rounded-[9px] p-9 flex flex-col justify-between overflow-hidden rounded-[9px] p-9 flex flex-col justify-between overflow-hidden"
                        style={{
                            backgroundImage: "url(/credit_card_bg.png)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Blur Overlay */}
                        {
                            !isActivateCard ? (
                                <img
                                    src="/credit_card_blur.png"
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover z-10 px-2 pb-2"
                                />
                            ) : ""
                        }

                        {
                            !isActivateCard ? (
                                <div className="absolute z-200 inset-0 flex items-center cursor-pointer justify-center">
                                    <button onClick={() => set_is_active_Card(true)} className="bg-[#BAE959] max-w-[180px] cursor-pointer rounded-full text-[14px] font-medium font-inter text-[#27463E] px-8 py-2">
                                        Activate Card
                                    </button>
                                </div>
                            ) :
                                ""
                        }


                        {/* Card Content */}
                        <div className="relative z-20 mt-auto">

                            {/* Blur Overlay */}




                            <h2
                                className={`${isActivateCard ? "" : "opacity-20"} text-[17px] mt-auto mb-6 font-inter text-[#E0BB8B]`}
                            >
                                5675 6789 1234 9807
                            </h2>

                            <div className={`${isActivateCard ? "" : "opacity-20"} flex justify-between items-end`}>
                                <div className="flex gap-10">
                                    <div>
                                        <p className="text-[15px] font-light font-inter text-white">
                                            Valid Through
                                        </p>
                                        <p className="text-[21px] tracking-[2px] text-[#E0BB8B]">
                                            ****
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[15px] font-light font-inter text-white">
                                            CVV
                                        </p>
                                        <p className="text-[21px] tracking-[2px] text-[#E0BB8B]">
                                            ***
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="frequently_used_card flex flex-col gap-4">
                <h1 className="font-semibold text-[18px] font-inter text-[#223933] pl-2">Frequently Used Cards</h1>

                <div className="deactivated_cards flex gap-4 overflow-x-auto pb-2">

                    <div
                        className="relative w-[358px] h-[235px] shrink-0 rounded-[9px] p-9 flex flex-col justify-between overflow-hidden rounded-[9px] p-9  flex flex-col justify-between overflow-hidden"
                        style={{
                            backgroundImage: "url(/credit_card_bg.png)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >



                        {/* Card Content */}
                        <div className="relative z-20 mt-auto">
                            <h2
                                className={`text-[17px] mt-auto mb-6 font-normal font-inter text-[#E0BB8B]`}
                            >
                                5675 6789 1234 9807
                            </h2>

                            <div className={`flex justify-between items-end`}>
                                <div className="flex gap-10">
                                    <div>
                                        <p className="text-[15px] font-light font-inter text-white">
                                            Valid Through
                                        </p>
                                        <p className="text-[21px] tracking-[2px] text-[#E0BB8B]">
                                            ****
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[15px] font-light font-inter text-white">
                                            CVV
                                        </p>
                                        <p className="text-[21px] tracking-[2px] text-[#E0BB8B]">
                                            ***
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="relative w-[358px] h-[235px] shrink-0 rounded-[9px] p-9 flex flex-col justify-between overflow-hidden rounded-[9px] p-9 flex flex-col justify-between overflow-hidden"
                        style={{
                            backgroundImage: "url(/credit_card_bg.png)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >



                        {/* Card Content */}
                        <div className="relative z-20 mt-auto">
                            <h2
                                className={`text-[17px] mt-auto mb-6 font-normal font-inter text-[#E0BB8B]`}
                            >
                                5675 6789 1234 9807
                            </h2>

                            <div className={`flex justify-between items-end`}>
                                <div className="flex gap-10">
                                    <div>
                                        <p className="text-[15px] font-light font-inter text-white">
                                            Valid Through
                                        </p>
                                        <p className="text-[21px] tracking-[2px] text-[#E0BB8B]">
                                            ****
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[15px] font-light font-inter text-white">
                                            CVV
                                        </p>
                                        <p className="text-[21px] tracking-[2px] text-[#E0BB8B]">
                                            ***
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}