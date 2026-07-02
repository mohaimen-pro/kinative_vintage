import user_circle_yellow from "@/public/user-circle-yellow.png"
import error_icon from "@/public/error_outline.png"
import card_hover_bg from "@/public/card_hover_bg.png"
import Image from "next/image";
import right_arrow_icon_green from "@/public/right_arrow_green_cards.png";
import confirmation_icon_circle from "@/public/check_circle.png"
import {
    DollarSign,
    Users,
    CreditCard,
    CircleAlert,
    CircleCheck,
    Ban
} from "lucide-react";




function Cards(props) {

    const card_info_object = props.cards_info;
    const icons = {
        DollarSign,
        Users,
        CreditCard,
        CircleAlert,
        CircleCheck,
        Ban
    };

    return (
        <>
            <div className="cards mt-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2">
                {
                    card_info_object.map((card_info) => {
                        const Icon = icons[card_info.card_image_icon];
                        return (
                            <div key={card_info.id} className=" card-one group relative flex flex-col pl-4 pt-4 bg-white rounded-[10px] overflow-hidden">

                                <div className={`${card_info.show_view_all ? "pb-15" : "pb-8"} card_info relative z-100 flex gap-4 items-center `}>
                                    <div className="user_profile bg-[#FFF5D9] group-hover:bg-[#EBF9EB] rounded-full w-13.75 h-13.75 flex justify-center items-center">
                                        {/* <Image src={card_info.card_image} alt="" /> */}
                                        <Icon alt="" className={`group-hover:text-[#628343] text-[#FFBB38] w-[28px] h-[28px]`} />
                                    </div>

                                    <div className="total_customer_info">
                                        <p className="font-inter font-bold text-[26px] group-hover:text-white text-[#232323]">{card_info.card_info_number}</p>
                                        <p className="font-normal text-[15px] group-hover:text-white text-[#5B8B7E]">{card_info.card_label}</p>
                                    </div>
                                </div>

                                {card_info.show_view_all ? (
                                    <div className={`flex view_all relative z-100 pr-4 pb-3 mt-auto ml-auto  items-center gap-3`}>
                                        <p className="font-normal font-lato text-[13px] group-hover:text-white text-[#89BE1E]">View All</p>
                                        <div className="right_arrow w-9.75 h-9.75 bg-[#EBF9EB] rounded-full flex justify-center items-center">
                                            <Image src={right_arrow_icon_green} alt="" />
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}



                                {/* Hover background */}
                                <div className="absolute z-10 inset-0 rounded-xl bg-gradient-to-br from-[#223933] to-[#9ec74b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            </div>
                        )
                    })
                }




            </div>


        </>
    )
}


export default Cards