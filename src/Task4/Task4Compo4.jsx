import React, { useState,useEffect } from "react";
import { Task4Compo5 } from "./Task4Compo5";
import { Task4Compo6 } from "./Task4Compo6"; 

import { FaRegHeart} from "react-icons/fa";
import { FcLike} from "react-icons/fc";
import { FaRegStarHalfStroke } from "react-icons/fa6";

 
export function Task4Compo4({ ToyData }){


    const [originalToyData,setToyData]=useState(ToyData);
    
    const importedData=()=>{setToyData(ToyData)}
    useEffect(() => {
      importedData();
      // console.log("importedData")
    }); 

    const [LikeToyData,setLikeToyData]=useState([])
    const ToyLikeFun=(Id)=>{
        const ToyLikesData=[...originalToyData]
        ToyLikesData.forEach((toy)=>{
          if(toy.ToyId===Id){
            if(!toy.ToyLike)setLikeToyData(prevLikeToyData => [...prevLikeToyData, toy]);
            else setLikeToyData(prevLikeToyData => prevLikeToyData.filter(item => item.ToyId !== toy.ToyId));
            toy.ToyLike= !toy.ToyLike;
          }
        })
        setToyData(ToyLikesData);
        // console.log("ToyLikesData");
        // console.log(ToyLikesData);
    }
    // console.log("LikeToyData");
    // console.log(LikeToyData);

    const [CartToyData,setCartToyData]=useState([])
    const ToyCartFun=(Id)=>{
      const ToyCartsData=[...originalToyData]
      ToyCartsData.forEach((toy)=>{
        if(toy.ToyId===Id){
          if(!toy.ToyCart)setCartToyData(prevCartToyData => [...prevCartToyData, toy]);
          else setCartToyData(prevCartToyData => prevCartToyData.filter(item => item.ToyId !== toy.ToyId));
          toy.ToyCart= !toy.ToyCart;
          // console.log(toy);
        }
      })
      setToyData(ToyCartsData);
      // console.log("ToyCartsData")
    }

    return(
        <> 
            <div className="Task4Compo4">
              {
                originalToyData.map((toy)=>{
                  return(
                    <div key={toy.ToyId} className="Task4Compo4_card">
                      <div className="Task4Compo4_card_liked" onClick={()=>ToyLikeFun(toy.ToyId)}>{toy.ToyLike?<FcLike/>:<FaRegHeart/>}</div>                       
                      <div className="Task4Compo4_card_img"><img src={toy.ToyImg} /></div>                        
                      <hr/>
                      <div className="Task4Compo4_card_name">{toy.ToyName.toUpperCase()}</div> 
                      <div className="Task4Compo4_card_div">
                        <div className="Task4Compo4_card_cost">$ {toy.ToyCost}/-</div>                        
                        <div className="Task4Compo4_card_rating"><FaRegStarHalfStroke/>{toy.ToyRating}</div>                        
                      </div>                       
                      {/* <div className="Task4Compo4_card_cart" onClick={()=>ToyCartFun(toy.ToyId)}>{toy.ToyCart?<div className="Task4Compo4_card_cart_remove">Remove from Cart</div>:<div className="Task4Compo4_card_cart_add">Add to Cart</div>}</div> */}
                      <div className="Task4Compo4_card_cart" onClick={()=>{ToyCartFun(toy.ToyId); ChangeCart();}} class="Rx3d">
                        {toy.ToyCart ?
                          <>
                            <div id="dimension3">Remove from Cart</div>
                            <div id="dimension4">Add to Cart</div>
                          </>
                          :
                          <>
                            <div id="dimension1">Remove from Cart</div>
                            <div id="dimension2">Add to Cart</div>
                          </>
                        }
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <Task4Compo5 ToyData={CartToyData} ToyLikeFun={ToyLikeFun} ToyCartFun={ToyCartFun} />
            <Task4Compo6 ToyData={LikeToyData} ToyLikeFun={ToyLikeFun} ToyCartFun={ToyCartFun} />
        </>
    )
}