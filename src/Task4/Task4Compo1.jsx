import React from "react";
import JGKlogo1 from '/JGKlogo1.png'
import { FaAddressBook } from "react-icons/fa";

export function Task4Compo1(){
    return(
        <> 
            <div className="Task4Compo1">
              <div className="Task4Compo1_logo"><img src={JGKlogo1} /> </div>
              <div className="Task4Compo1_name">TOY AVENGERS</div>
              <div className="Task4Compo1_profile"><FaAddressBook /></div>
            </div>  
        </>
    )
}  