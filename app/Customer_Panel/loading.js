export default function Loading() {
    return (
        <div className="loading">
            <div className="p-4 space-y-4 animate-pulse">

                {/* Top Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

                    {[1, 2, 3, 4].map((item) => (
                        <div
                            key={item}
                            className="bg-white rounded-xl shadow-sm p-6 h-46 flex flex-col justify-between"
                        >
                            <div className="flex gap-4">
                                <div className="w-14 h-14 rounded-full bg-gray-200"></div>

                                <div className="space-y-3">
                                    <div className="h-6 w-20 rounded bg-gray-200"></div>
                                    <div className="h-4 w-32 rounded bg-gray-200"></div>
                                </div>
                            </div>

                            <div className="flex justify-end items-center gap-3">
                                <div className="h-4 w-16 rounded bg-gray-200"></div>
                                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Chart + Card */}
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">

                    {/* Chart */}
                    <div className="xl:col-span-3 bg-white rounded-xl shadow-sm p-6">

                        <div className="flex justify-between items-center mb-6">
                            <div className="h-7 w-40 rounded bg-gray-200"></div>

                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded bg-gray-200"></div>
                                <div className="w-10 h-10 rounded bg-gray-200"></div>
                                <div className="w-28 h-10 rounded-full bg-gray-200"></div>
                            </div>
                        </div>

                        <div className="relative h-[350px] rounded-lg bg-gray-100 overflow-hidden">

                            {/* Fake grid lines */}
                            <div className="absolute inset-0 flex flex-col justify-between p-4">
                                {[...Array(6)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="border-t border-dashed border-gray-300"
                                    ></div>
                                ))}
                            </div>

                            {/* Fake chart line */}
                            <div className="absolute bottom-8 left-6 right-6">
                                <div className="h-1 rounded-full bg-gray-300 w-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col justify-between">

                        <div className="flex justify-between">
                            <div className="w-4 h-4 rounded bg-gray-200"></div>
                            <div className="w-4 h-4 rounded bg-gray-200"></div>
                        </div>

                        <div className="h-40 rounded-xl bg-gray-200 my-5"></div>

                        <div className="space-y-4">

                            <div className="flex justify-between">
                                <div>
                                    <div className="h-3 w-20 rounded bg-gray-200 mb-2"></div>
                                    <div className="h-5 w-24 rounded bg-gray-200"></div>
                                </div>

                                <div>
                                    <div className="h-3 w-20 rounded bg-gray-200 mb-2"></div>
                                    <div className="h-5 w-20 rounded bg-gray-200"></div>
                                </div>
                            </div>

                            <div className="flex justify-center gap-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-2 h-2 rounded-full bg-gray-300"></div>
                                ))}
                            </div>

                            <div className="mx-auto h-8 w-16 rounded bg-gray-200"></div>

                            <div className="mx-auto h-12 w-48 rounded-full bg-gray-200"></div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

                    {/* Activity */}
                    <div className="xl:col-span-2 bg-white rounded-xl shadow-sm p-6">

                        <div className="flex justify-between mb-8">
                            <div className="h-7 w-36 rounded bg-gray-200"></div>

                            <div className="flex items-center gap-3">
                                <div className="h-4 w-16 rounded bg-gray-200"></div>
                                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                            </div>
                        </div>

                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="flex justify-between items-center py-5 border-b"
                            >
                                <div className="space-y-3">
                                    <div className="h-5 w-24 rounded bg-gray-200"></div>
                                    <div className="h-4 w-60 rounded bg-gray-200"></div>
                                </div>

                                <div className="h-4 w-32 rounded bg-gray-200"></div>
                            </div>
                        ))}
                    </div>

                    {/* Notifications */}
                    <div className="bg-white rounded-xl shadow-sm p-6">

                        <div className="flex justify-between mb-8">
                            <div className="h-7 w-36 rounded bg-gray-200"></div>

                            <div className="flex items-center gap-3">
                                <div className="h-4 w-16 rounded bg-gray-200"></div>
                                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                            </div>
                        </div>

                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-gray-200"></div>

                                <div className="flex-1 space-y-3">
                                    <div className="h-4 w-full rounded bg-gray-200"></div>
                                    <div className="h-4 w-3/4 rounded bg-gray-200"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}