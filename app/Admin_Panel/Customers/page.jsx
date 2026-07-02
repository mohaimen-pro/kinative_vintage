import Filter_section from "./filter"
import Cards from "../../Templates/Cards"
import confirmation_icon_circle from "../../../public/check_circle.png"
import user_circle_yellow from "@/public/user-circle-yellow.png"
import search_icon from "@/public/search_icon.png"
import { Plus } from "lucide-react"
import cardImage from "../../../public/credit_card_image_1.png"
import { table } from "node:console"





export default function Customers() {



    const cards_info = [
        {
            id: 1,
            card_image: user_circle_yellow,
            card_label: "Total Customers",
            card_info_number: 121,
            show_view_all: false,
        },

        {
            id: 2,
            card_image: confirmation_icon_circle,
            card_label: "Active Customers",
            card_info_number: 42,
            show_view_all: false,

        },


        {
            id: 3,
            card_image: confirmation_icon_circle,
            card_label: "Pending Customers",
            card_info_number: "$12,400",
            show_view_all: false,

        },


        {
            id: 4,
            card_image: user_circle_yellow,
            card_label: "Suspended",
            card_info_number: 20,
            show_view_all: false,

        }
    ]

//this object will come from database
    const table_info = [
        {
            id: 1,
            customer_short_name: "MD",
            customer_name: "Paul Anderson",
            date_of_birth: "20th June, 1995",
            email: "paul@gmail.com",
            mobile_number: "+61412345678",
            type: "Individual",
            status: "Active",
        },
        {
            id: 2,
            customer_short_name: "MD",
            customer_name: "Paul Anderson",
            date_of_birth: "20th June, 1995",
            email: "paul@gmail.com",
            mobile_number: "+61412345678",
            type: "Individual",
            status: "Pending",
        },
        {
            id: 3,
            customer_short_name: "MD",
            customer_name: "Paul Anderson",
            date_of_birth: "20th June, 1995",
            email: "paul@gmail.com",
            mobile_number: "+61412345678",
            type: "Individual",
            status: "Active",
        },
        {
            id: 4,
            customer_short_name: "MD",
            customer_name: "Paul Anderson",
            date_of_birth: "20th June, 1995",
            email: "paul@gmail.com",
            mobile_number: "+61412345678",
            type: "Individual",
            status: "Suspended",
        },
        {
            id: 5,
            customer_short_name: "MD",
            customer_name: "Paul Anderson",
            date_of_birth: "20th June, 1995",
            email: "paul@gmail.com",
            mobile_number: "+61412345678",
            type: "Individual",
            status: "Active",
        },
    ];

    return (
        <>
            <Cards cards_info={cards_info} />
            <Filter_section customerDetailsObject={table_info}/>
        </>
    )
}