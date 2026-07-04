"use client"

import { WalletCards, Cloud, CreditCard } from 'lucide-react';
import { useState } from 'react';




export default function Add_New_Card() {

    const cardTypes = [
        {
            id: 1,
            title: "Physical Card",
            description: "Shipped within 4-5 days for in person shopping",
            icon: WalletCards,
        },
        {
            id: 2,
            title: "Virtual Card",
            description: "Use instantly for online purchases and subscriptions",
            icon: Cloud,
        },
        {
            id: 3,
            title: "Digital Wallet",
            description: "Connect your card to Apple Pay or Google Pay",
            icon: CreditCard,
        },
    ];

    const [active_card_type_index, set_active_card_type_index] = useState(0);


    return (


        <div className="bg-white rounded-[10px] ml-2 mt-2 pl-9 sm:pr-9 max-[640px]:pr-9 pt-7">
            <div className="border-b border-[#f5f5f5] pb-4">
                <h1 className="font-inter font-semibold text-[18px] text-[#223933]">Add New Card</h1>
                <p className="font-normal text-[15px] font-inter text-[#697E79]">Enter your email address and set your password</p>
            </div>

            <div className="card_type pt-4 pb-10">
                <p className="font-normal text-[15px] font-inter text-[#697E79]">Select a card type</p>

                <div className="card_types  grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 ">
                    {cardTypes.map((card, index) => {
                        const Icon = card.icon;

                        return (
                            <div
                                className={`${active_card_type_index === index ? "" : " rounded-[10px] group-hover:p-0 group-hover:bg-transparent bg-[linear-gradient(90deg,#BAE959_0%,#5F9F8E_100%)] "} mt-4 p-[2px]`}
                                onClick={() => set_active_card_type_index(index)}
                                key={card.id}
                            >
                                <div className="relative group rounded-[10px] pl-8 pt-6 pr-4 pb-6 overflow-hidden bg-white">
                                    {/* Content */}
                                    <div className="relative z-20">
                                        <div className="w-10 h-10 bg-[#EBF9EB] rounded-full flex justify-center items-center">
                                            <Icon className="text-[#628343] w-[22px] h-auto" />
                                        </div>

                                        <div className="mt-4">
                                            <p
                                                className={`${active_card_type_index === index
                                                    ? "text-white"
                                                    : "text-[#233A34] group-hover:text-white"
                                                    } text-[15px] font-inter font-semibold`}
                                            >
                                                {card.title}
                                            </p>

                                            <p
                                                className={`${active_card_type_index === index
                                                    ? "text-white"
                                                    : "text-[#537240] group-hover:text-white"
                                                    } text-[13px] font-normal font-inter`}
                                            >
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Hover Background */}
                                    <div
                                        className={`${active_card_type_index === index
                                            ? "opacity-100"
                                            : "group-hover:opacity-100"
                                            } absolute inset-0 z-10 rounded-[10px] bg-gradient-to-br from-[#223933] to-[#9ec74b] opacity-0 transition-opacity duration-300`}
                                    />
                                </div>
                            </div>


                        );
                    })}




                </div>
            </div>


            <div>

                <div className="w-full max-w-4xl pb-6">
                    <form className="space-y-7 pb-8">

                        <div className='flex flex-col gap-2 max-[585px]:gap-4'>
                            <p className='text-[#697E79] text-[15px] font-inter font-normal'>Name Of your Card</p>
                            <input className="text-[#5F887D] text-[14px] font-normal font-inter rounded-[100px] px-6 py-2 border-1 border-[#BDD7BD]" type="text" name="" placeholder='Your Full Name...' id="" />
                        </div>

                        <div className='flex max-[585px]:flex-col gap-4'>
                            <div className='flex flex-1 flex-col gap-2 max-[585px]:gap-2'>
                                <p className='text-[#697E79] text-[15px] font-inter font-normal'>Email</p>
                                <input className="text-[#5F887D] text-[14px] font-normal font-inter rounded-[100px] px-6 py-2 border-1 border-[#BDD7BD]" type="text" name="" placeholder='yourname@example.com' id="" />
                            </div>
                            <div className='flex flex-1 flex-col gap-2 max-[585px]:gap-2'>
                                <p className='text-[#697E79] text-[15px] font-inter font-normal'>Phone No.</p>
                                <input className="text-[#5F887D] text-[14px] font-normal font-inter rounded-[100px] px-6 py-2 border-1 border-[#BDD7BD]" type="text" name="" placeholder='Valid Phone No.' id="" />
                            </div>
                        </div>

                        <div className='flex  max-[585px]:flex-col gap-4'>
                            <div className='flex flex-1 flex-col gap-2 max-[585px]:gap-2'>
                                <p className='text-[#697E79] text-[15px] font-inter font-normal'>State</p>
                                <input className="text-[#5F887D] text-[14px] font-normal font-inter rounded-[100px] px-6 py-2 border-1 border-[#BDD7BD]" type="text" name="" placeholder='Your Full Name...' id="" />
                            </div>
                            <div className='flex flex-1 flex-col gap-2 max-[585px]:gap-2'>
                                <p className='text-[#697E79] text-[15px] font-inter font-normal'>Card Nickname</p>
                                <input className="text-[#5F887D] text-[14px] font-normal font-inter rounded-[100px] px-6 py-2 border-1 border-[#BDD7BD]" type="text" name="" placeholder='Your Full Name...' id="" />
                            </div>
                        </div>

                    </form>

                    <div className="button cursor-pointer">
                        <button className='bg-[#BAE959] rounded-[100px] px-10 py-3 text-[14px] font-medium font-inter text-[#27463E]'>Submit Request</button>
                    </div>
                </div>
            </div>


        </div>
    )
}