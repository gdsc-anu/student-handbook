const Pulse = () => {
    return (
        <div className="border border-gray-100 shadow rounded-md p-4 max-w-lg w-full mx-auto mt-20">
            <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-8 bg-slate-700 rounded"></div>
                    <div className="h-12 bg-slate-700 rounded"></div>
                    <div className="h-12 bg-slate-700 rounded"></div>
                    <div className="h-12 bg-slate-700 rounded"></div>
                    <div className="h-8 bg-slate-700 rounded"></div>
                    <div className="h-12 bg-slate-700 rounded"></div>
                    <div className="h-12 bg-slate-700 rounded"></div>
                    <div className="h-12 bg-slate-700 rounded"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-8 bg-slate-700 rounded col-span-1"></div>
                            <div className="h-8 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        {/* <div className="h-20 bg-slate-700 rounded"></div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pulse;