import React from "react";
import Grid from "./components/Grid";
import Search from "./components/Search";
import logo from "./logo.svg";
import data from "./stays.json";

function App() {
  const [stay, setStay] = React.useState(data);
  const filterData = (city, guests) => {
    const res = data.filter((x) => {
      return x.city === city && x.maxGuests >= guests;
    });
    setStay(res);
  }

  return (
    <div className="relative group-active:bg-smallText">
      <div className='flex flex-col mx-16'>
      <header className="md:flex space-y-8 justify-between mt-8">
        <img src={logo} alt="logo"/>
        <div className="group">
          <Search stay={stay} filterData={filterData}/>
        </div>
      </header>
      <div className="flex justify-between mt-12">
        <p className="font-montserrat font-bold text-xl text-mainText">Stays in Finland</p>
        <p className="text-sm text-tag mt-2">{stay.length} stays</p>
      </div>
      
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 mt-4 gap-8">
        {stay.map((x) => {
          return (<Grid key={x.title} prop={x}/>)
        })}
      </div>
    </div>
    </div>
  );
}

export default App;
