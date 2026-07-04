import Cards from "../../Templates/Cards"
import Card_list_filter from "./card_list_filter";
import Cards_List from "./cards_list";
import Credit_Card_slider from "./credit_card_slider"



export default function MY_CARDS() {

    const cards_info = [
        {
            id: 1,
            card_image_icon: "WalletCards",
            card_icon_bg: "bg-[#EBF9EB]",
            card_icon_color: "text-[#93BE52]",
            card_label: "Active Cards",
            card_info_number: "05",
            show_view_all: false,
        },

        {
            id: 2,
            card_image_icon: "DollarSign",
            card_icon_bg: "bg-[#D9F1FF]",
            card_icon_color: "text-[#67C0F4]",
            card_label: "Total Balance",
            card_info_number: "$23,000",
            show_view_all: false,

        },


        {
            id: 3,
            card_image_icon: "DollarSign",
            card_icon_bg: "bg-[#FFDCD9]",
            card_icon_color: "text-[#E38178]",
            card_label: "Pending Approval",
            card_info_number: "02",
            show_view_all: false,

        },


        {
            id: 4,
            card_image_icon: "WalletCards",
            card_label: "Inactive Card",
            card_icon_bg: "bg-[#FFF5D9]",
            card_icon_color: "text-[#FFBB38]",
            card_info_number: "02",
            show_view_all: false,

        }
    ]



    const table_info = [
        {
            id: 1,
            name: "Paul Anderson",
            LastDigit: "2210",
            IssueDate: "20 June,2026", 
            Expires: "20 June,2026",
            Balance:"$33423",
            type: "Physical",
            address: "55 Eagle Rd, Wyndham Vale, VIC, 3024",
            status: "Active",
        },
        {
            id: 2,
            name: "Paul Anderson",
            LastDigit: "2210",
            IssueDate: "20 June,2026", 
            Expires: "20 June,2026",
            Balance:"$33423",
            type: "Virtual",
            address: "55 Eagle Rd, Wyndham Vale, VIC, 3024",
            status: "Pending",
        },
        {
            id: 3,
            name: "Paul Anderson",
            LastDigit: "2210",
            IssueDate: "20 June,2026", 
            Expires: "20 June,2026",
            Balance:"$33423",
            type: "Physical",
            address: "55 Eagle Rd, Wyndham Vale, VIC, 3024",
            status: "Active",
        },
        {
            id: 4,
            name: "Paul Anderson",
            LastDigit: "2210",
            IssueDate: "20 June,2026", 
            Expires: "20 June,2026",
            Balance:"$33423",
            type: "Vir-Phy",
            address: "55 Eagle Rd, Wyndham Vale, VIC, 3024",
            status: "Rejected",
        },
        {
            id: 5,
            name: "Paul Anderson",
            LastDigit: "2210",
            IssueDate: "20 June,2026", 
            Expires: "20 June,2026",
            Balance:"$33423",
            type: "Vir-Phy",
            address: "55 Eagle Rd, Wyndham Vale, VIC, 3024",
            status: "Active",
        },
    ];


    return (
        <>
            <Cards cards_info={cards_info} />
            <div className="credit_card pt-8 pl-8">
                <Credit_Card_slider />
            </div>

            <Card_list_filter cardrequests={table_info} />
        </>
    )
}