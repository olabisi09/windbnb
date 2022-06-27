import React from "react";
import {HiSearch} from "react-icons/hi";
import {MdOutlineClose, MdLocationOn} from "react-icons/md";

export default function Search({stay, filterData}) {
    const [isShown, setIsShown] = React.useState(false);
    const [isLocOpen, setIsLocOpen] = React.useState(false);
    const [isGuestOpen, setIsGuestOpen] = React.useState(false);
    const [location, setLocation] = React.useState("");
    const [adult, setAdult] = React.useState(0);
    const [child, setChild] = React.useState(0);
    const [guests, setGuests] = React.useState(0);
    const cities = stay.map((x) => {
        return x.city;
    });
    const uniqueCities = [...new Set(cities)];
    let menuref = React.useRef();
    
    React.useEffect(() => {
        document.body.addEventListener('mousedown', (event) => {
            if(!menuref.current.contains(event.target)){
                setIsShown(false);
            }
        });
    }, []);
    console.log(location)
    const handleSubmit = (e) => {
        e.preventDefault();
        setGuests(adult + child);
        setIsLocOpen(false);
        setIsGuestOpen(false);
        filterData(location, guests);
        setIsShown(false);
    }
    return(
        <div ref={menuref} className="px-4 mx-8 md:mx-0 flex gap-4 divide-x rounded-2xl shadow-lg bg-opacity-50">
            {isShown &&
                <form onSubmit={handleSubmit} className="bg-white font-mulish absolute w-max-screen inset-0 h-96">
                    <div className="bg-white h-48 space-y-8">
                        <div className="flex justify-between mx-8 pt-8 md:hidden">
                            <p className="font-semibold">Edit your search</p>
                            <button onClick={() => setIsShown((x) => !x)}>
                                <MdOutlineClose/>
                            </button>
                        </div>
                        <div className="md:flex rounded-2xl md:divide-x shadow-lg h-32 md:h-16 bg-opacity-50 md:mx-16">
                            <div tabIndex="0" onClick={() => {setIsLocOpen(prev => !prev); setIsGuestOpen(false)}} className="md:w-1/3 rounded-2xl p-4 focus:border-smallText focus:rounded-2xl focus:border-[1.5px]">
                                <p className="font-semibold text-xs">LOCATION</p>
                                <input type="text" name="location" value={location && location + ", Finland"} readOnly placeholder="Select Location" onChange={(e) => setLocation(e.target.value)} className="text-sm placeholder:text-smallText outline-0" />
                            </div>
                            <hr/>
                            <div tabIndex="0" onClick={() => {setIsGuestOpen(prev => !prev); setIsLocOpen(false)}} className="md:w-1/3 p-4 focus:border-smallText focus:rounded-2xl focus:border-[1.5px]">
                                <p className="font-semibold text-xs">GUESTS</p>
                                <p className="text-smallText text-sm">{child + adult !== 0 ? child + adult : "Add"} {child + adult > 1 ? "guests" : "guest"}</p>
                            </div>
                            <button type={location ? "submit" : ""} className="flex gap-2 w-auto justify-center items-center pl-64 md:pl-0 md:w-1/3">
                                <div className="bg-logo flex gap-2 p-4 mt-10 md:mt-0 rounded-2xl">
                                    <p className="text-white">Search</p>
                                    <div className="pt-1"><HiSearch color="white"/></div>
                                </div>
                            </button>
                        </div>
                        <div className="flex">
                            {isLocOpen && 
                            <div className="space-y-4 pl-20">
                                {uniqueCities.map((city, index) => {
                                    return(
                                    <button type="button" onClick={() => {setLocation(city); setIsLocOpen(false)}} className="flex gap-2">
                                        <div className="pt-1"><MdLocationOn color="#4F4F4F"/></div>
                                        <p className="text-tag" key={index}>{city}, Finland</p>
                                    </button>) 
                                    
                                })}
                            </div>
                            }
                            {isGuestOpen &&
                                <div className="space-y-4 ml-[460px]">
                                    <div>
                                        <p className="font-bold">Adults</p>
                                        <p className="text-smallText">Ages 13 or above</p>
                                        <div className="flex gap-4">
                                            <button type="button" onClick={() => setAdult(adult => adult > 0 ? adult - 1 : 0)} className="font-bold h-4">-</button>
                                            <p>{adult}</p>
                                            <button type="button" onClick={() => setAdult(adult => adult + 1)} className="font bold h-4">+</button>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-bold">Children</p>
                                        <p className="text-smallText">Ages 2 to 12</p>
                                        <div className="flex gap-4">
                                            <button type="button" onClick={() => setChild(child => child > 0 ? child - 1 : 0)} className="font-bold h-4">-</button>
                                            <p>{child}</p>
                                            <button type="button" onClick={() => setChild(child => child + 1)} className="font bold h-4">+</button>
                                        </div>
                                    </div>
                                </div>
                                
                                }
                        </div>
                    </div>
                </form>
            }
            <button onClick={() => setIsShown((x) => !x)} className="font-mulish text-sm py-4 text-mainText">{location === "" ? "Select Location" : location}</button>
            <input
                className="placeholder:font-mulish outline-0 text-sm pl-4 text-center"
                type="text"
                placeholder={child + adult !== 0 ? child + adult + ` ${child + adult > 1 ? "guests" : "guest"}` : "Add guests"}
                onClick={() => setIsShown((x) => !x)}
            />
            <button className="py-4 pl-3 pl-10">
                <HiSearch color="#EB5757"/>
            </button>
            
        </div>
    )
}