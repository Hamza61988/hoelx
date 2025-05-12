import React, { useEffect, useState } from "react";
import './Main.css'; 

export default function Main() {
    const [item, changeItem] = useState([]);

    useEffect(() => {
        async function hamza() {
            const response = await fetch('http://localhost:8080/api/olx');
            const data = await response.json();
            changeItem(data);
        }

        hamza();
    }, []); 

    return (
        <div className="h1" >
            <h1>Mobile and Phones</h1>
            <div className="main-container">
                {item.map((item) => (
                    <div className="item-box" key={item._id}>
                        <h2>{item.name}</h2>
                        <p className="category">{item.category}</p>  
                        <p className="price">{item.price} $</p> 
                        <img src={item.image} alt={item.name} className="item-image" />
                        
                        <button className="button">View Details</button> {/* Use button here */}
                    </div>
                ))}
            </div>
        </div>
    );
}
