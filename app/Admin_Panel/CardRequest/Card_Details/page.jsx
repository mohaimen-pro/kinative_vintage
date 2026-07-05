import credit_card_bg from "../../../../public/credit_card_bg.png"


export default function Card_Details() {
    return (
        <>
            <div className="flex mt-3 ml-2 mr-2 gap-3 max-[875px]:flex-col">
                
                <div className="flex-1 flex flex-col justify-between bg-white rounded-[10px] px-6 py-8">
                    <div className="flex justify-between pl-2v">
                        <h1 className="font-semibold font-inter text-[#223933] text-[18px]">Card Details</h1>
                        <span className="inline-flex items-center gap-2 rounded-[100px] font-inter px-4 py-1 text-[15px] font-normal bg-[#FFF5D9] text-[#223933]">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBB38]"></span>Pending</span>
                    </div>

                    <div

                        className="credit_card pt-6 flex justify-start">
                        <div
                            style={{
                                backgroundImage: `url(/credit_card_bg.png)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',

                            }}
                            className=" w-[358px] h-[226px] rounded-[9px]  p-9 flex flex-col justify-between">

                            {/* Card Number */}
                            <h2 className="text-[22px] mt-auto mb-6 font-inter font-normal text-white">
                                5675 6789 1234 9807
                            </h2>

                            {/* Bottom */}
                            <div className="flex justify-between items-end">
                                <div className="flex gap-10">
                                    <div>
                                        <p className="text-[15px] font-light font-inter text-white">Valid Through</p>
                                        <p className="text-[22px] font-inter text-[21px]  tracking-[2px] text-[#E0BB8B]">****</p>
                                    </div>

                                    <div>
                                        <p className="text-[15px] font-light font-inter text-white">CVV</p>
                                        <p className="text-[22px] font-inter text-[21px]  tracking-[2px] text-[#E0BB8B]">***</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="credit_card_owner flex justify-between pl-2 mt-4">
                        <div>
                            <p className="text-[15px] font-normal font-lato text-[#7E7E7E]">CARD HOLDER</p>
                            <h1 className="font-lato text-[20px] text-[#223933] font-extrabold">Paul Anderson</h1>
                        </div>
                        <div>
                            <p className="text-[15px] font-normal font-lato text-[#7E7E7E]">ACCOUNT NUMBER</p>
                            <h1 className="font-lato text-[20px] text-[#223933] font-extrabold">A670009</h1>

                        </div>
                    </div>

                    <div className="flex gap-3 mt-20">
                        <button className="flex-1 bg-[#FF5A4D] rounded-full text-[14px] font-medium font-inter text-white py-3">
                            Reject Card
                        </button>

                        <button className="flex-1 bg-black rounded-full text-[14px] font-medium font-inter text-white py-3">
                            Approve Card
                        </button>
                    </div>
                </div>


                <div className="flex-2 max-[875px]:flex-1 max-[875px]:pb-10 max-[875px]:pt-12  flex gap-30 max-[900px]:gap-10   bg-white rounded-[10px] pl-14 max-[580px]:pl-6 max-[900]:pr-10   ">
                    <div className="flex flex-col justify-center gap-12">
                        <div className="flex flex-col justify-center gap-1">
                            <p className="text-[15px] font-normal font-lato text-[#7E7E7E]">PLASTIC ID</p>
                            <h1 className="font-lato text-[20px] font-extrabold text-[#223933]">01827393030</h1>
                        </div>

                        <div className="flex flex-col justify-center gap-1">
                            <p className="text-[15px] font-normal font-lato text-[#7E7E7E]">VALID THROUGH</p>
                            <h1 className="font-lato text-[20px] font-extrabold text-[#223933]">12/25</h1>
                        </div>

                        <div className="flex flex-col justify-center gap-1">
                            <p className="text-[15px] font-normal font-lato text-[#7E7E7E]">CVV</p>
                            <h1 className="font-lato text-[20px] font-extrabold text-[#223933]">456</h1>
                        </div>

                        <div className="flex flex-col justify-center gap-1">
                            <p className="text-[15px] font-normal font-lato text-[#7E7E7E]">ISSUANCE</p>
                            <h1 className="font-lato text-[20px] font-extrabold text-[#223933]">Normal Delivery</h1>
                        </div>
                    </div>

                    <div className="flex flex-col max-[875px]:pt-0 pt-20.5 gap-12">
                        <div className="flex flex-col justify-center gap-1">
                            <p className="text-[15px] font-normal font-lato text-[#7E7E7E]">PLASTIC ID</p>
                            <h1 className="font-lato text-[20px] font-extrabold text-[#223933]">01827393030</h1>
                        </div>

                        <div className="flex flex-col justify-center gap-1">
                            <p className="text-[15px] font-normal font-lato text-[#7E7E7E]">VALID THROUGH</p>
                            <h1 className="font-lato text-[20px] font-extrabold text-[#223933]">12/25</h1>
                        </div>

                        <div className="flex flex-col justify-center gap-1">
                            <p className="text-[15px] font-normal font-lato text-[#7E7E7E]">CVV</p>
                            <h1 className="font-lato text-[20px] font-extrabold text-[#223933]">456</h1>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}