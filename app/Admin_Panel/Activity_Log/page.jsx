"use client";

const activityData = [
    {
        section: "Today",
        items: [
            {
                role: "Super Admin",
                name: "Super Admin",
                action: "approvedCard",
                user: "Matt Demon",
                date: "20 June, 2026",
            },
            {
                role: "Admin",
                name: "Adnan Islam",
                action: "approvedFund",
                amount: "$34999",
                user: "Matt Demon",
                date: "20 June, 2026",
            },
            {
                role: "Administrator",
                name: "Tom Cruize",
                action: "rejectedCard",
                card: "6359",
                user: "Matt Demon",
                date: "20 June, 2026",
            },
            {
                role: "Super Admin",
                name: "Super Admin",
                action: "approvedCard",
                user: "Matt Demon",
                date: "20 June, 2026",
            },
            {
                role: "Admin",
                name: "Adnan Islam",
                action: "approvedFund",
                amount: "$34999",
                user: "Matt Demon",
                date: "20 June, 2026",
            },
            {
                role: "Administrator",
                name: "Tom Cruize",
                action: "rejectedCard",
                card: "6359",
                user: "Matt Demon",
                date: "20 June, 2026",
            },
            {
                role: "Super Admin",
                name: "Super Admin",
                action: "approvedCard",
                user: "Matt Demon",
                date: "20 June, 2026",
            },
        ],
    },
    {
        section: "Yesterday",
        items: [
            {
                role: "Super Admin",
                name: "Super Admin",
                action: "approvedCard",
                user: "Matt Demon",
                date: "20 June, 2026",
            },
            {
                role: "Admin",
                name: "Adnan Islam",
                action: "approvedFund",
                amount: "$34999",
                user: "Matt Demon",
                date: "20 June, 2026",
            },
            {
                role: "Administrator",
                name: "Tom Cruize",
                action: "rejectedCard",
                card: "6359",
                user: "Matt Demon",
                date: "20 June, 2026",
            },
        ],
    },
];

function ActivityMessage({ item }) {
    switch (item.action) {
        case "approvedCard":
            return (
                <p className="text-[15px] text-[#697E79] font-normal font-normal">
                    Approved Card of user{" "}
                    <span className="font-semibold text-[15px] font-inter text-[#00241A]">{item.user}</span>
                </p>
            );

        case "approvedFund":
            return (
                <p className="text-[15px] text-[#697E79] font-inter font-normal font-normal">
                    Approved fund of{" "}
                    <span className="font-semibold text-[#144D3E]">{item.amount}</span>{" "}
                    to{" "}
                    <span className="font-semibold text-[15px] font-inter text-[#00241A]">{item.user}</span>
                </p>
            );

        case "rejectedCard":
            return (
                <p className="text-[15px] text-[#697E79] font-normal font-normal">
                    Rejected Card ending with{" "}
                    <span className="font-semibold text-[#144D3E] font-inter">{item.card}</span>{" "}
                    from{" "}
                    <span className="font-semibold text-[15px] font-inter text-[#00241A]">{item.user}</span>
                </p>
            );

        default:
            return null;
    }
}

export default function ActivityLog() {
    return (
        <div className="w-full rounded-[10px] mt-3 bg-white">
            <div className="pr-6 pl-10 pt-7">
                <h2 className="text-[18px] font-semibold font-inter text-[#223933]">
                    Activity Log
                </h2>
            </div>

            <div className="max-[966px]:overflow-x-auto">
                <div className="min-w-[966px]">
                    {activityData.map((group) => (
                        <div key={group.section}>
                            <div className="pr-6 pl-10 pt-6 pb-2">
                                <p className="text-[15px] font-normal font-inter text-[#697E79]">
                                    {group.section}
                                </p>
                            </div>

                            {group.items.map((item, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-[170px_280px_1fr_170px] items-center pl-10 pr-6 py-5 border-b border-[#F1F3F2] last:border-b-0"
                                >
                                    <div>
                                        <p className="text-[15px] font-medium font-inter text-[#223933]">
                                            {item.role}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[14px] font-normal font-inter text-[#697E79]">
                                            {item.name}
                                        </p>
                                    </div>

                                    <ActivityMessage item={item} />

                                    <div className="text-right">
                                        <p className="text-[15px] font-inter text-[#697E79] font-normal">
                                            {item.date}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}