import Cards from "../../Templates/Cards"
import confirmation_icon_circle from "../../../public/check_circle.png"
import user_circle_yellow from "@/public/user-circle-yellow.png"
import search_icon from "@/public/search_icon.png"
import { Plus } from "lucide-react"
import cardImage from "../../../public/credit_card_image_1.png"
import Filters_section from "./filters_section"
import { table } from "node:console"




export default function My_Request() {

    const cards_info = [
        {
            id: 1,
            card_image_icon: "Users",
            card_label: "Total Customers",
            card_icon_bg: "",
            card_icon_color: "",
            card_info_number: 121,
            show_view_all: false,
        },

        {
            id: 2,
            card_image_icon: "CircleCheck",
            card_label: "Active Customers",
            card_icon_bg: "",
            card_icon_color: "",
            card_info_number: 42,
            show_view_all: false,

        },


        {
            id: 3,
            card_image_icon: "Users",
            card_label: "Pending Customers",
            card_icon_bg: "",
            card_icon_color: "",
            card_info_number: "$12,400",
            show_view_all: false,

        },


        {
            id: 4,
            card_image_icon: "Ban",
            card_label: "Suspended",
            card_icon_bg: "",
            card_icon_color: "",
            card_info_number: 20,
            show_view_all: false,

        }
    ]




    const table_info = [
        {
            id: 1,
            name: "Paul Anderson",
            plasticId: "3006202210",
            type: "Physical",
            address: "55 Eagle Rd, Wyndham Vale, VIC, 3024",
            status: "Active",
            isCard_request: "Card Request"

        },
        {
            id: 2,
            name: "Paul Anderson",
            plasticId: "3006202210",
            type: "Virtual",
            address: "55 Eagle Rd, Wyndham Vale, VIC, 3024",
            status: "Pending",
            isCard_request: "Card Request"

        },
        {
            id: 3,
            name: "Paul Anderson",
            plasticId: "3006202210",
            type: "Physical",
            address: "55 Eagle Rd, Wyndham Vale, VIC, 3024",
            status: "Active",
            isCard_request: "Card Request"

        },
        {
            id: 4,
            name: "Paul Anderson",
            plasticId: "3006202210",
            type: "Vir-Phy",
            address: "55 Eagle Rd, Wyndham Vale, VIC, 3024",
            status: "Rejected",
            isCard_request: "Card Request"

        },
        {
            id: 5,
            name: "Paul Anderson",
            plasticId: "3006202210",
            type: "Vir-Phy",
            address: "55 Eagle Rd, Wyndham Vale, VIC, 3024",
            status: "Active",
            isCard_request: true
        },
    ];


    const fund_request = [
        {
            id: 1,
            customer_short_name: "MD",
            customer_name: "Paul Anderson",
            date_of_birth: "15th June, 2026",
            email: "paul@gmail.com",
            mobile_number: "+61412345678",
            type: "$90232",
            status: "Active",
            isCard_request: "Fund Request"

        },
        {
            id: 2,
            customer_short_name: "MD",
            customer_name: "Paul Anderson",
            date_of_birth: "22th June, 2026",
            email: "paul@gmail.com",
            mobile_number: "+61412345678",
            type: "$90232",
            status: "Pending",
            isCard_request: "Fund Request"
        },
        {
            id: 3,
            customer_short_name: "MD",
            customer_name: "Paul Anderson",
            date_of_birth: "28th June, 2026",
            email: "paul@gmail.com",
            mobile_number: "+61412345678",
            type: "$90232",
            status: "Active",
            isCard_request: "Fund Request"
        },
        {
            id: 4,
            customer_short_name: "MD",
            customer_name: "Paul Anderson",
            date_of_birth: "20th June, 2026",
            email: "paul@gmail.com",
            mobile_number: "+61412345678",
            type: "$90232",
            status: "Suspended",
            isCard_request: "Fund Request"
        },
        {
            id: 5,
            customer_short_name: "MD",
            customer_name: "Paul Anderson",
            date_of_birth: "1th July, 2026",
            email: "paul@gmail.com",
            mobile_number: "+61412345678",
            type: "$90232",
            status: "Active",
            isCard_request: "Fund Request"
        },
    ];



    return (
        <>
            <Filters_section cardrequests={table_info} fund_request={fund_request}/>


        </>
    )
}