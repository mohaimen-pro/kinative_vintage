import Cards from "../../Templates/Cards"
import confirmation_icon_circle from "../../../public/check_circle.png"
import user_circle_yellow from "@/public/user-circle-yellow.png"
import search_icon from "@/public/search_icon.png"
import { Plus } from "lucide-react"
import cardImage from "../../../public/credit_card_image_1.png"
import Filters_section from "./filters_section"
import { table } from "node:console"




export default function Customers() {

    const cards_info = [
        {
            id: 1,
            card_image_icon: "Users",
            card_label: "Total Customers",
            card_info_number: 121,
            show_view_all: false,
        },

        {
            id: 2,
            card_image_icon: "CircleCheck",
            card_label: "Active Customers",
            card_info_number: 42,
            show_view_all: false,

        },


        {
            id: 3,
            card_image_icon: "Users",
            card_label: "Pending Customers",
            card_info_number: "$12,400",
            show_view_all: false,

        },


        {
            id: 4,
            card_image_icon: "Ban",
            card_label: "Suspended",
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
        },
        {
            id: 2,
            name: "Paul Anderson",
            plasticId: "3006202210",
            type: "Virtual",
            address: "55 Eagle Rd, Wyndham Vale, VIC, 3024",
            status: "Pending",
        },
        {
            id: 3,
            name: "Paul Anderson",
            plasticId: "3006202210",
            type: "Physical",
            address: "55 Eagle Rd, Wyndham Vale, VIC, 3024",
            status: "Active",
        },
        {
            id: 4,
            name: "Paul Anderson",
            plasticId: "3006202210",
            type: "Vir-Phy",
            address: "55 Eagle Rd, Wyndham Vale, VIC, 3024",
            status: "Rejected",
        },
        {
            id: 5,
            name: "Paul Anderson",
            plasticId: "3006202210",
            type: "Vir-Phy",
            address: "55 Eagle Rd, Wyndham Vale, VIC, 3024",
            status: "Active",
        },
    ];



    return (
        <>
            <Cards cards_info={cards_info} />


            <Filters_section cardrequests={table_info} />


        </>
    )
}