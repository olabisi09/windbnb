import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function Grid({prop}) {
    return (
        <div className="flex flex-col w-auto gap-2 mb-8 md:mb-0 font-montserrat">
            <img className="rounded-3xl h-60 object-fill" src={prop.photo} alt="image"/>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    {prop.superHost ? <div className="border font-bold border-tag p-1 rounded-lg text-xs">SUPER HOST</div> : ""}
                    <p className="text-sm text-smallText mt-1">{prop.type} {prop.beds} {prop.beds === null ? "" : ". beds"}</p>
                </div>
                <div className="flex gap-2">
                    <AiFillStar color="#EB5757"/>
                    <p className="text-sm text-tag">{prop.rating}</p>
                </div>
            </div>
            <p className="text-sm text-tag font-semibold">{prop.title}</p>
        </div>
    )
}