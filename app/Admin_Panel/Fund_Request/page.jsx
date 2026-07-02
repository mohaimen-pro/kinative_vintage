
import Fund_filter from "./fund_filter"




export default function Fund_Request() {




    //this object will come from database
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
        },
    ];

    return (
        <>


            <Fund_filter fund_requests={fund_request} />

        </>
    )
}