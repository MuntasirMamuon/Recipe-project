import React, { useEffect, useState } from "react";
import Card from "../cards/Card";

const RecepiCard = () => {
    const [cards,setCards]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    console.log(cards);
  return (
   <div>
     <h2 className="text-4xl text-center mt-5 mb-5 font-bold">Chef Category</h2>
    <div className="grid lg:grid-cols-3  sm:grid-cols-1 gap-y-4 ">
        
      {
        cards.map((card)=><Card key={card.id} card={card}></Card>)
      }
    </div>
   </div>
  );
};

export default RecepiCard;
