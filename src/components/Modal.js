import React from "react";


export default function Modal() {
    return(
        <div className="bg-smallText font-mulish absolute w-max-screen inset-0 bg-smallText bg-opacity-50 h-48">
            <div className="bg-white h-48">
                <div>
                    
                </div>
                <div className="mx-16 py-8">
                    <button className="w-96 flex flex-col text-xs border-mainText border-2 rounded-2xl px-8 py-2">
                        <p className="font-semibold">LOCATION</p>
                        <p>Helsinki, Finland</p>
                    </button>
                </div>
            </div>
        </div>
    )
}