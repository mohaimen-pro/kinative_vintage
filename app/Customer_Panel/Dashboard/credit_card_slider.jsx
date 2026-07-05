"use client"

import right_arrow_icon_green from "@/public/right_arrow_green_cards.png";
import { motion } from "framer-motion";

import { useState } from "react";

import { ArrowLeft } from "lucide-react"
import { ArrowRight } from "lucide-react"


export default function credit_card_slide() {

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

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % cards.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? cards.length - 1 : prev - 1
        );
    };

    const current_card = cards[currentSlide]

    const [isActivateCard, set_is_active_Card] = useState(false)


    return (
        <div className="credit_card ">
            <div className="carousel_upper_part flex items-center mt-5 ">
                <div  className="left_arrow cursor-pointer">
                    <ArrowLeft color="black" className="w-3 h-3" />
                </div>
                <div
                    className="relative w-[358px] h-[226px] max-[400px]:w-[310px] max-[400px]:h-[195px] rounded-[9px] p-9 flex flex-col justify-between overflow-hidden"
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
                            className={`${isActivateCard ? "" : "opacity-20"} text-[22px] mt-auto mb-6 font-inter text-white`}
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
                <div className="right_arrow cursor-pointer">
                    <ArrowRight color="black" className="w-3 h-3" />
                </div>
            </div>
        </div>
    )
}